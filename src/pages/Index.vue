<template>
  <q-card>
  <q-card class="ses1 " style="height: 140vh">
    <!-- <div class="bg"></div> -->
    <div class="tia">
     
    <div class="row q-pt-xl q-pl-xl q-gutter-sm" style="width: 300px">
      <div class="col-4 q-mb-lg ">
        <q-btn round @click="qd = true        " class="glow">
          <img src="~assets/hint.png"> 
        </q-btn>
        <img src="~assets/tron.png" style="position:absolute; margin:2.5% auto 0 8%; animation: mymove 10s infinite;">
      </div>
      <div class="col-4 luat"></div>
      <div class="col-4" @click="history = true">
        <q-btn round>
          <img src="~assets/qua.png" class="glow">
          
        </q-btn>
         
      </div>
      <div class="col-5 luat"></div>
      
    </div>
    <div class="absolute-center" style="top: 200px">
      <img src="~assets/logo.png">
      <img src="~assets/kkc.png" class="kkc" >
   
      <div class="luat">Minigame 31.08 - 10.09-2021</div>
      <div class="bg-white text-primary luat text-center q-mt-lg" style="height:45px; width:350px; border-radius:100px;">
        <span>Bạn còn </span>
        <span class="text-red q-ma-xs"> {{ turn }} </span>
        <span> lượt chơi</span>
      </div>

    </div>
    
    <div class="row flex flex-center q-gutter-xl" style="margin-top: 120px">
      <q-btn padding="none" round class="col-2" style="height: 1px; margin-right: 100px" @click="handleClick">
        <img src="~assets/lbox.gif">
      </q-btn>
      <q-btn padding="none" flat class="col-2" style="height: 1px; margin-right: 100px" @click="handleClick">
        <img src="~assets/mbox.gif">
      </q-btn>
      <q-btn padding="none" round class="col-2" style="height: 1px"  @click="handleClick">
        <img src="~assets/rbox.gif">
      </q-btn>
    </div>
    <div class="row flex flex-center q-gutter-xl" style="margin-top: 200px">
      <q-btn no-caps padding="xs" rounded class="col-2 mo q-mr-xl blur " color="blue-6" style="margin-right: 80px;width:300px;"  @click="handleClick">
        Mở "Tưởng tượng"
      </q-btn>
      <q-btn no-caps padding="xs" rounded class="col-2 mo q-mr-xl blur" color="indigo-5" style="margin-right: 80px;width:300px"  @click="handleClick">
        Mở "Phân tích"
      </q-btn>
      <q-btn no-caps padding="xs" rounded class="col-2 mo blur" color="pink-4" style="width:300px" @click="handleClick">
        Mở "May mắn"
      </q-btn>
    </div>
    </div>
    </q-card>
 

    <q-card class="ses2 flex flex-center">
      <div class="ts">
        <img src="~assets/stts.png" style="max-width: 50vw">
        
      </div>
      <div class="giaithuong">
        <img src="~assets/giaithuong.png" style="max-width: 35vw;margin: 8% auto 0 auto;">
      </div>
      <q-card class="gt" style="border-radius:20px;">
        <div class="q-mt-xl"  >
          <img src="~assets/phanqua.png" style="max-width: 70vw">
        </div>
        <q-carousel
        padding
        infinite
        v-model="slide"
        transition-next="scale"
        :autoplay="autoplay"
        animated
        height="100px"
      >
        <q-carousel-slide :name="1">
          <div>
            <img src="~assets/nt/group28.png" style="max-width: 30vw">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2">
        <div>
            <img src="~assets/nt/group29.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="3">
        <div>
            <img src="~assets/nt/group30.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="4">
        <div>
            <img src="~assets/nt/group31.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="5">
        <div>
            <img src="~assets/nt/group32.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="6">
        <div>
            <img src="~assets/nt/group33.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="7">
        <div>
            <img src="~assets/nt/group34.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="8">
        <div>
            <img src="~assets/nt/group35.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="9">
        <div>
            <img src="~assets/nt/group36.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="10">
        <div>
            <img src="~assets/nt/group37.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="11">
        <div>
            <img src="~assets/nt/group38.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="12">
        <div>
            <img src="~assets/nt/group39.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="13">
        <div>
            <img src="~assets/nt/group40.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="14">
        <div>
            <img src="~assets/nt/group41.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="15">
        <div>
            <img src="~assets/nt/group42.png">
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="16">
        <div>
            <img src="~assets/nt/group43.png">
          </div>
        </q-carousel-slide>
      </q-carousel>
      </q-card>
      
    </q-card>
  </q-card>
<div style="position: relative; bottom: 0px; " class="q-mb-xl">
        <img src="~assets/ftt.png" style="max-width: 160vw;margin:5% auto auto 10%; background-size: 180% 30%;">
           <div align="right" id="pageAudio">
      <button id="playpausebtn" class="glow" ></button></div>
      </div>
  <div>
      <q-dialog v-model="signIn">
        <div style="width: 400px">
          <img src="~assets/tt.png" style="z-index=-1" class="absolute-center">
        <q-card-section>
          	<div class="row">

	
	</div>
        <q-form
              ref="info"
              class="form-wrapper q-gutter-md"
              @reset.prevent.stop="onReset"
              style="margin-top: 150px"
            >
              <div class="col-12">
                <q-input
                  label="SĐT"
                  outlined
                  dense
                  v-model="form.phone"
                  :rules="[
                    val => (val && val.length > 0) || 'Vui lòng nhập Số điện thoại',
                    val =>
                      (val && val.length > 0 && val.length === 10) ||
                      'Số điện thoại phải có 10 số',
                    val => /^\d+$/.test(val) || 'Số điện thoại không hợp lệ',
                    val => /^(0)/.test(val) || 'Số điện thoại phải bắt đầu là 0'
                  ]"
                />
              </div>
              <div class="col-12">
                <q-input
                  outlined
                  dense
                  label="Email"
                  v-model="form.email"
                  :rules="[
                    val => (val && val.length > 0) || 'Vui lòng nhập email',
                    val => val.includes('@') || 'Email không hợp lệ',
                    val => val.includes('.') || 'Email không hợp lệ'
                  ]"
                />
              </div>
            </q-form>
          </q-card-section>
          <q-card-actions align="center" style="min-height:100px;">
            <q-btn
            rounded
            style="width:250px;height:10px;margin:0% 0 3 0%;"
              flat
              @click="handleSignIn"
              class="submit blur"
            >
            <img src="~assets/nhanqua.svg" style="margin:-4% auto 2% 0; ">
            </q-btn>
            	
	
          </q-card-actions>
        </div>
        
      </q-dialog>
     
    </div>

    <div>
      <q-dialog v-model="game" persistent>
        <div style="width: 400px">
          <img src="~assets/traloi.png" style="z-index=-1" class="absolute-center">
          <q-card-section align="center" class="hoi q-mb-xl">
            {{ formGame.ques }}
          </q-card-section>
          <q-card-actions vertical align="center">
            <q-btn
              rounded
              :label="formGame.A"
              @click="handleSelect1"
              class="cauA text-weight-bold q-mb-md blur"
              style="width: 350px"
            >
            </q-btn>
            <q-btn
              rounded
              :label="formGame.B"
              @click="handleSelect2"
              class="cauC text-weight-bold q-mb-md blur"
              style="width: 350px"
            >
            </q-btn>
            <q-btn
              rounded
              :label="formGame.C"
              @click="handleSelect3"
              class="cauD text-weight-bold q-mb-md blur"
              style="width: 350px"
              v-if="formGame.C"
            >
            </q-btn>
          </q-card-actions>
        </div>
      </q-dialog>
    </div>

    <div>
      <q-dialog v-model="qd">
        <div style="width: 400px">
          <img src="~assets/qd.png" style="z-index=-1" class="absolute-center">
        </div>
        <q-card-actions align="center">
            <q-btn
              flat
              @click="qd = false"
              style="margin-bottom: 480px; margin-left: 30px"
            >
              <img src="~assets/close.png">
            </q-btn>
          </q-card-actions>
      </q-dialog>
    </div>

    <div>
      <q-dialog v-model="share">
        <div style="width: 400px">
          <img src="~assets/cs.png" style="z-index=-1" class="absolute-center">
          <div align="center" class="text-black" style="position: relative; margin-top: 350px">
            <div class="themluot q-pl-md q-pr-md text-primary">
              Bạn đã hết lượt rồi!
            </div>
          </div>
          <q-card-actions align="center">
            <q-btn
            rounded
              flat
              class=" blur"
              @click="handleSignIn"
              style="margin-top: 100px ;width:250px;height:10px;margin-bottom:2%;"
            >
              <img src="~assets/chiase.png" >
            </q-btn>
          </q-card-actions>
        </div>
      </q-dialog>
    </div>

    <div>
      <q-dialog v-model="history">
        <div style="width: 400px">
          <img src="~assets/lichsu.png" style="z-index=-1" class="absolute-center">
          <q-card-actions align="center">
            <q-btn
              flat
              rounded
              @click="qd = false" 
              style="margin-bottom: 20px;margin-top:-40px; margin-left: 400px;width:250px;height:30px;"
            >
              <img src="~assets/close.png">
            </q-btn>
          </q-card-actions>
          <div class="q-pa-md" style="width: 300px">
            <q-table
              :rows="mock"
              :columns="columns"
              row-key="des"
              flat
              bordered
              :data="mock"
              style="max-height: 30vh"
              class="q-my-xs q-pa-none my-sticky-virtscroll-table"
              virtual-scroll
              :rows-per-page-options="[0]"
              hide-pagination
            >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="des" :props="props">{{ props.row.des }}</q-td>
                <q-td key="tools" :props="props">
                  <q-btn
                    icon="copy"
                    size="sm"
                    flat
                    dense
                    class="q-ml-sm"
                    @click="() => clickDelete(props.row)"
                  />
                </q-td>
              </q-tr>
            </template>
            </q-table>
        </div>
              <div class="q-pa-md" style="width: 450px; margin-bottom: 180px; position: absolute">
                <q-table
                  flat
                  bordered
                  :columns="columns"
                  :data="rows"
                  row-key="id"
                  style="max-height: 30vh"
                  class="q-my-xs q-pa-none my-sticky-virtscroll-table"
                  virtual-scroll
                  :rows-per-page-options="[0]"
                  hide-pagination
                >
                  <template v-slot:body="props">
                    <q-tr :props="props">
                      <q-td key="des" :props="props">{{ props.row.des }}</q-td>
                      <q-td key="calories" :props="props">{{ props.row.calories }}</q-td>
                      <q-td key="tools" :props="props">
                        <q-btn
                          icon="delete"
                          size="sm"
                          flat
                          dense
                          class="q-ml-sm"
                          @click="() => clickDelete(props.row)"
                        />
                      </q-td>
                    </q-tr>
                  </template>
                </q-table>
              </div>
        </div>
      </q-dialog>
    </div>
      <div>
      <q-dialog v-model="sai">
        <div style="width: 400px">
          <img src="~assets/sai.png" style="z-index=-1" class="absolute-center">
          <q-card-actions align="center">
            <q-btn
              flat
              rounded
               class=" blur"
              @click="handleSignIn"
              style="margin-top: 400px ;width:250px;height:20px;margin-bottom:2%;"
            >
              <img src="~assets/share.svg">
            </q-btn>
          </q-card-actions>
        </div>
      </q-dialog>
    </div>

    <div>
      <q-dialog v-model="dung">
        <div style="width: 450px">
          <img src="~assets/dung.png" style="z-index=-1" class="absolute-center">
          <q-card-actions align="center">
            <q-btn
              flat
              @click="handleSignIn"
              style="margin-top: 130px"
            >
              <img src="~assets/voucher.png" v-if="pre === 0">
              <img src="~assets/LGT.png" v-if="pre === 1">
            </q-btn>
          </q-card-actions>
          <div align="center" class="text-black" style="position: relative">
            <div class="prize q-pl-md q-pr-md">
              Tặng bạn 1 <span> {{ des }} </span>
            </div>
            <div class="prize">
              Mã nhận quà <span class="text-red"> {{ code }} </span>
            </div>
              <!-- <q-btn></q-btn> -->
          </div>
          <q-card-actions align="center">
            <q-btn
            rounded
              flat
               style="width:250px;height:10px;margin-bottom:2%;"
               class=" blur"
              @click="fanpage"
            >
              <img src="~assets/inbox.svg">
            </q-btn>
          </q-card-actions>
          <q-card-actions align="center">
            <q-btn
            rounded
              flat
               style="width:250px;height:10px;margin-bottom:2%;"
               class=" blur"
              @click="onReset"
            >
              <img src="~assets/choitiep.svg">
            </q-btn>
          </q-card-actions>
          <q-card-actions align="center">
            <q-btn
              flat
              rounded
               class=" blur" 
                style="width:250px;height:10px;margin-bottom:2%;"
              @click="handleSignIn"
            >
              <img src="~assets/chiase.svg">
            </q-btn>
          </q-card-actions>
        </div>
      </q-dialog>
    </div>
    <div class="fb-share-button" data-href="https://google.com" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgoogle.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Chia sẻ</a></div>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue'
import { apiServiceInstance } from 'src/api/index'
import { LocalStorage } from 'quasar'

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      turn: 1,
      email: null,
      history: false,
      signIn: false,
      form: {
        phone: null,
        email: null
      },
      share: false,
      game: false,
      formGame: {},
      A: "A. fdhsaofljkasndflksdanflksdnfdlk",
      B: "B. asldnkaskldnaslkdnlkasdadasdasd",
      C: "C. sandlkasdnalksdnlaksndklasndlak",
      D: "D. asdkajsldnlaksdnlkasndasndasddd",
      sai: false,
      dung: false,
      qd: false,
      traloi: false,
      des: null,
      code: null,
      qua: null,
      pre: null,
      boCauHoi: [
        {
          ques: "Chương trình “Sáng tạo hay tạo sảng?” là mùa thứ mấy của dự án Marketer Talk ?",
          A: "A. Mùa 1",
          B: "B. Mùa 2",
          C: "C. Mùa 3",
          rs: 3
        },
        {
          ques: "Chương trình “Sáng tạo hay tạo sảng?” được tổ chức dưới hình thức Talkshow?",
          A: "A. Đúng",
          B: "B. Sai",
          rs: 1
        },
        {
          ques: "Màu chủ đạo của chương trình “Sáng tạo hay tạo sảng?” là gì?",
          A: "A. Màu đỏ",
          B: "B. Màu tím",
          C: "C. Màu trắng",
          rs: 2
        },
        {
          ques: "Bộ nhận diện của Marketer Talk năm nay là gì?",
          A: "A. Bộ não",
          B: "B. Chiếc hộp và bộ não",
          C: "C. Chiếc hộp",
          rs: 2
        },
        {
          ques: "Chương trình Marketer Talk 2021 được tổ chức bằng hình thức nào?",
          A: "A. Offline",
          B: "B. Online",
          rs: 2
        },
        {
          ques: "Chương trình Marketer Talk 2021 do CLB nào tổ chức?",
          A: "A. MarC",
          B: "B. CLB Marketing Toàn Thành",
          C: "C. Hai phương án trên đều đúng",
          rs: 3
        }
      ],
      columns: [
        {
    name: 'des',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.des,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'tools', align: 'center', field: 'tools', sortable: true },
      ],
    rows : [
  {
    des: 'Frozen Yogurt',
    calories: 'as'
  },
  {
    des: 'Ice cream sandwich',
    calories: 'as'
  }],
      mock: [
        {
          id: 1,
          des: "sadasd"
        },
        {
          id: 2,
          des: "sadasds"
        }
      ]
    }
  },
  created() {
    const turn = LocalStorage.getItem('turn')
    this.email = LocalStorage.getItem('email')
    console.log(this.email)
    if (turn) {
      this.turn = turn
    }
  },
  methods: {
    async handleSignIn() {
      const user = await apiServiceInstance.signIn(this.form.email, this.form.phone)
      this.email = user.email
      this.turn = user.turn
      LocalStorage.set('email', user.email)
      LocalStorage.set('turn', user.turn)
      this.turn = LocalStorage.getItem('turn')
      this.signIn = false;
      this.handleOpenGame();
    },
    handleOpenShare() {
      this.share = true;
    },
    handleClick() {
      if (!this.email) {
        this.handleOpenSignIn()
      }
      if (this.email && this.turn === 0) {
        this.handleOpenShare()
      }
      if (this.email && this.turn !== 0) {
        this.handleOpenGame()
      }
    },
    handleOpenSignIn() {
      this.signIn = true
    },
    handleOpenGame() {
      this.turn = this.turn - 1;
      LocalStorage.set('turn', this.turn)
      const random = Math.floor(Math.random() * 6)
      this.formGame = this.boCauHoi[random]
      this.game = true;
    },
    async handleOpenDung() {
      const prize = await apiServiceInstance.prize(this.email)
      this.des = prize.des,
      this.code = prize.code,
      this.pre = prize.pre
      this.dung = true;
    },
    async handleSelect1() {
      if (this.formGame.rs === 1) {
        this.game = false;
        await this.handleOpenDung();
        this.dung = true
      } else {
        this.game = false;
        this.sai = true
      }
    },
    async handleSelect2() {
      if (this.formGame.rs === 2) {
        this.game = false;
        await this.handleOpenDung();
        this.dung = true
      } else {
        this.game = false;
        this.sai = true
      }
    },
    async handleSelect3() {
      this.game = false;
      if (this.formGame.rs === 3) {
        this.game = false;
        await this.handleOpenDung();
        this.dung = true
      } else {
        this.game = false;
        this.sai = true
      }
    },
    fanpage() {
      window.open("https://www.facebook.com/MarC.NonstopCreativity");
    },
    onReset() {
      this.dung = false,
      this.sai = false,
      this.dung = false,
      this.qd = false,
      this.traloi = false,
      this.des = null,
      this.code = null,
      this.qua = null,
      this.pre = null,
      this.signIn = false,
      this.history = false
    }
  }
})

// am thanh
var audio, playbtn,  seek_bar;
function initAudioPlayer(){
	audio = new Audio();
	audio.src = "https://www.soundjay.com/free-music/midnight-ride-01a.mp3";
	audio.loop = true;
	audio.play();
	// Set object references
	playbtn = document.getElementById("playpausebtn");
	
	// Add Event Handling
	playbtn.addEventListener("click",playPause);
	
	// Functions
	function playPause(){
		if(audio.paused){
		    audio.play();
		    playbtn.style.background = "url(https://image.flaticon.com/icons/svg/189/189889.svg) no-repeat";
	    } else {
		    audio.pause();
		    playbtn.style.background = "url(https://image.flaticon.com/icons/svg/148/148744.svg) no-repeat";
	    }
	}
	
}
window.addEventListener("load", initAudioPlayer);
</script>

<style>
  .luat{
    font-family: Work Sans;
    font-size: 30px;
    color: white;
  }
  .cauA{
    background: radial-gradient(farthest-corner at 0px 1px,white 1%, #FF9DE9 100%);
  }
  .cauB{
    background: radial-gradient(farthest-corner at 0px 1px,white 1%, #FFC3F2 100%);
  }
  .cauC{
    background: radial-gradient(farthest-corner at 0px 1px,white 1%, #007AFF 100%);
  }
  .cauD{
    background: radial-gradient(farthest-corner at 0px 1px,white 1%, #FF0000 100%);
  }
  .hoi{
    font-family: Work Sans;
    font-size: 20px;
    background-color: white;
  }
  .mo{
    font-family: Work Sans;
    font-weight: bold;
font-size: 25px;

    padding:  20% 50%;
    color: white;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);
   line-height: 80px;
text-align: center;
letter-spacing: -0.02em;
margin-top:5%;
border-radius:109px;

  }
  .ses1{
    background:url('~assets/background.png');
    position:relative;
    width: 100vw;
    z-index: 1;
    background-repeat: no-repeat; 
    background-size: cover;
    margin-top: -2%;
  }
  .ses2{
    background-image:url('~assets/bg2.png');
    position:relative;
    height:150vh;
    z-index: 0;
    width:100vw;
    background-repeat:none;
    background-size: cover;
  }
  .ts{
    position: absolute;
    top: 40px;
    max-width: 50vw;
  }
  .giaithuong{
    position: absolute;
    top: 180px;
    left: 30px;
  }
  .gt{
    position: absolute;
    top: 300px;
    width: 80vw;
    min-height: 50vh;
    border:1px solid #fff;
    border-radius:20px;
  }
  .prize{
    font-family: Montserrat;
    font-size: 14px;
  }
  .themluot{
    font-family: Montserrat;
    font-size: 25px;
  }
  .glow:hover {
  filter:brightness(130%);
}
.tia{

		  -webkit-animation: switchOff 300ms linear infinite alternate;
	animation: switchOff 300ms linear infinite alternate;}@keyframes switchOff {
  from {
  
  
  }
  to {
	  position:relative;
  background:url('~assets/tia.png');
   background-repeat:no-repeat;
  
   background-size:100% 98%;
   height:108%;
  
   
  }}
  .kkc{
		
  animation-name: example;
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
	animation-direction: alternate;}
@keyframes example {
  0%   { left:0px; top:0px;}
  10%  { left:50px; top:-10px;}
  25%  { left:120px; top:30px;}
  50%  { left:50px; top:70px;}
  75%  {left:10px; top:30px;}
  100% { left:0px; top:0px;}
}

@keyframes mymove {
  100% {transform: rotate(360deg);}
}
.blur:hover{
   border: 1px solid #fff;
  filter:brightness(130%);
  box-shadow: 10px 10px 20px rgb(155, 60, 236);
}
#pageAudio{
	width:90%; margin:auto; padding:10px;
}
#playpausebtn{
  background:url(https://image.flaticon.com/icons/svg/189/189889.svg) no-repeat;
	width:40px;
  border-radius:50px;
	height:40px; margin-top:3%;
}

</style>
