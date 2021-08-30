import { initializeApp } from '@firebase/app'
import { getFirestore, collection, getDocs, addDoc, doc, getDoc, query, where, setDoc } from '@firebase/firestore'
import '@firebase/auth'
import '@firebase/firestore'
import '@firebase/storage'
const SPREADSHET_ID = '1ZZogQOWMSdYPESKCL2WIBEMqUQBHxSo7lF2OnCDGVJg';
const CLIENT_ID = '1005288724361-o3efbfh2mrdjl6b73mg8sccc70os46vq.apps.googleusercontent.com';
const API_KEY = 'AIzaSyA1XCes2vV8UtiurMZSsIUhVJTPN_uzp9o'
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets'

class APIService {
  constructor (config = {}) {
    this.firebaseApp = initializeApp(config)
    this.firebaseDb = getFirestore(this.firebaseApp)
  }

  async signIn (email, phone) {
    let check = true;
    const q = query(collection(this.firebaseDb, "clients"), where("email", "==", email))
    const snap = await getDocs(q).then(async snapshot => {
      if (snapshot.docs[0]) {
        check = false
        return snapshot.docs[0]
      } else {
        await addDoc(collection(this.firebaseDb, "clients"), {
          email: email,
          phone: phone,
          turn: 1,
          code: [],
          des: []
        })
        return {email, phone, turn: 1, code: [], des: []}
      }
    })
    if (!check) {
      return snap.data()
    } else{
      return snap
    }
  }
  async prize (email) {
    const ref = doc(this.firebaseDb, "gift", "MT")
    const snap = await getDoc(doc(this.firebaseDb, "gift", "MT"))
    console.log(snap.data())
    const { count, countLGT, countBAV, countVFM, countVS100, countVS50, countVXR50, countVXR20, countVXR10 } = snap.data()
    const { BAV, LGT, VFM, VS100, VS50, VXR50, VXR20, VXR10 } = snap.data()
    let res = {};
    if (count === 0) {
      res = { des: "Bộ tài liệu. BTC sẽ gửi qua email cho bạn sớm", code: null, pre: 0}
    } else {
      const total = countLGT + countBAV + countVFM + countVS100 + countVS50 + countVXR50 + countVXR20 + countVXR10;
      const perLGT = countLGT;
      const perBAV = countLGT + countBAV;
      const perVFM = countLGT + countBAV + countVFM;
      const perVS100 = countLGT + countBAV + countVFM + countVS100;
      const perVS50 = countLGT + countBAV + countVFM + countVS100 + countVS50;
      const perVXR50 = countLGT + countBAV + countVFM + countVS100 + countVS50 + countVXR50;
      const perVXR20 = countLGT + countBAV + countVFM + countVS100 + countVS50 + countVXR50 + countVXR20;
      const perVXR10 = countLGT + countBAV + countVFM + countVS100 + countVS50 + countVXR50 + countVXR20 + countVXR10;
      console.log(total, "total")
      const random = Math.floor(Math.random() * total) + 1;
      console.log(random, "random")
      if(random <= perLGT) {
        setDoc(ref, { countLGT: countLGT - 1, count: count - 1}, {merge: true});
        res = { des: "Chuột Logiech M221", code: LGT[countLGT - 1], pre: 1}
      }
      if (perLGT < random && random <= perBAV) {
        setDoc(ref, { countBAV: countBAV - 1}, {merge: true});
        res = { des: "Vouchers 1.000.000 VNĐ và suất test đầu vào miễn phí cũng thầy Charles", code: BAV[countBAV - 1], pre: 0}
      }
      if (perBAV < random && random <= perVFM) {
        setDoc(ref, { countVFM: countVFM - 1}, {merge: true});
        res = { des: "Tài khoản VIP sử dụng ứng dụng Voiz FM", code: VFM[countVFM - 1], pre: 0}
      }
      if (perVFM < random && random <= perVS100) {
        setDoc(ref, { countVS100: countVS100 - 1}, {merge: true});
        res = { des: "Vouchers 100% sử dụng Khóa Kỹ Năng Giao Tiếp của Vietskill", code: VS100[countVS100 - 1], pre: 0}
      }
      if (perVS100 < random && random <= perVS50) {
        setDoc(ref, { countVS50: countVS50 - 1}, {merge: true});
        res = { des: "  Vouchers 50% sử dụng Khóa Kỹ Năng Giao Tiếp của Vietskill", code: VS50[countVS50 - 1], pre: 0}
      }
      if (perVS50 < random && random <= perVXR50) {
        setDoc(ref, { countVXR50: countVXR50 - 1}, {merge: true});
        res = { des: "Vouchers 50% sử dụng ứng dụng VeXeRe", code: VXR50[countVXR50 - 1], pre: 0}
      }
      if (perVXR50 < random && random <= perVXR20) {
        setDoc(ref, { countVXR20: countVXR20 - 1}, {merge: true});
        res = { des: "Vouchers 20% sử dụng ứng dụng VeXeRe", code: VXR20[countVXR20 - 1], pre: 0}
      }
      if (perVXR20 < random && random <= perVXR10) {
        setDoc(ref, { countVXR10: countVXR10 - 1}, {merge: true});
        res = { des: "Vouchers 10% sử dụng ứng dụng VeXeRe", code: VXR10[countVXR10 - 1], pre: 0}
      }
    }
    const q = query(collection(this.firebaseDb, "clients"), where("email", "==", email))
    const user = await getDocs(q).then(async snapshot => {
        return snapshot.docs[0]
    })
    const uid = user.id
    console.log(res.code, "uid")
    const code = user.data().code;
    code.push(res.code)
    console.log(code, "code")
    const des = user.data().des
    des.push(res.des)
    await setDoc(doc(this.firebaseDb, "clients", uid), {code: code, des: des}, {merge: true})
    return res
  }
};

const apiServiceInstance = new APIService({
  apiKey: "AIzaSyDgOXSKzZ0WW9XDZgjATNPeugsGZdD585E",
  authDomain: "the-game-box-tgb.firebaseapp.com",
  databaseURL: "https://the-game-box-tgb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "the-game-box-tgb",
  storageBucket: "the-game-box-tgb.appspot.com",
  messagingSenderId: "1005288724361",
  appId: "1:1005288724361:web:b871065ec6434ce2e9b358",
  measurementId: "G-D42HMRN415"
})

export default apiServiceInstance
