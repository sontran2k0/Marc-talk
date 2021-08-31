<template>
  <q-card>
  <q-card class="ses1" style="height: 100vh">
    <!-- <div class="bg"></div> -->
    <div class="row q-pt-xl q-pl-xl q-gutter-sm" style="width: 300px">
      <div class="col-4 q-mb-lg">
        <q-btn round @click="qd = true        ">
          <img src="~assets/hint.png">
        </q-btn>
      </div>
      <div class="col-4 luat">Luật chơi</div>
      <div class="col-4" @click="history = true">
        <q-btn round>
          <img src="~assets/qua.png">
        </q-btn>
      </div>
      <div class="col-5 luat">Lịch sử quà</div>
    </div>
    <div class="absolute-center" style="top: 200px">
      <img src="~assets/logo.png">
      <div class="luat">Minigame 31.08 - 10.09-2021</div>
      <div class="bg-white text-primary luat text-center q-mt-lg" style="height:45px; width:350px; border-radius:100px;">
        <span>Bạn còn</span>
        <span class="text-red q-ma-xs"> {{ turn }} </span>
        <span>lượt chơi</span>
      </div>
    </div>
    <div class="row flex flex-center q-gutter-xl" style="margin-top: 120px">
      <q-btn padding="none" round class="col-2" style="height: 1px; margin-right: 100px" @click="handleClick">
        <img src="~assets/hop1.png">
      </q-btn>
      <q-btn padding="none" flat class="col-2" style="height: 1px; margin-right: 100px" @click="handleClick">
        <img src="~assets/hop2.png">
      </q-btn>
      <q-btn padding="none" round class="col-2" style="height: 1px"  @click="handleClick">
        <img src="~assets/hop3.png">
      </q-btn>
    </div>
    <div class="row flex flex-center q-gutter-xl" style="margin-top: 200px">
      <q-btn no-caps padding="xs" rounded class="col-2 mo q-mr-xl" color="blue-6" style="margin-right: 100px"  @click="handleClick">
        Mở "Tưởng tượng"
      </q-btn>
      <q-btn no-caps padding="xs" rounded class="col-2 mo q-mr-xl" color="indigo-5" style="margin-right: 100px"  @click="handleClick">
        Mở "Phân tích"
      </q-btn>
      <q-btn no-caps padding="xs" rounded class="col-2 mo" color="pink-4"  @click="handleClick">
        Mở "May mắn"
      </q-btn>
    </div>
    </q-card>

    <q-card class="ses2 flex flex-center">
      <div class="ts">
        <img src="~assets/talkshow.png" style="max-width: 50vw">
      </div>
      <div class="giaithuong">
        <img src="~assets/giaithuong.png" style="max-width: 35vw">
      </div>
      <q-card class="gt">
        <div class="q-mt-xl" >
          <img src="~assets/groupqua.png" style="max-width: 70vw">
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
            <img src="~assets/nt/group28.png" style="max-width: 60vw">
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
      <div style="position: absolute; bottom: 0px" class="q-mb-xl">
        <img src="~assets/ft.png" style="max-width: 80vw">
      </div>
    </q-card>
  </q-card>

  <div>
      <q-dialog v-model="signIn">
        <div style="width: 400px">
          <img src="~assets/tt.png" style="z-index=-1" class="absolute-center">
        <q-card-section>
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
          <q-card-actions align="center">
            <q-btn
              flat
              @click="handleSignIn"
              class="submit"
            >
            <img src="~assets/nhanqua.png">
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
              class="text-weight-bold q-mb-md"
              style="width: 350px"
              :class="cA"
            >
            </q-btn>
            <q-btn
              rounded
              :label="formGame.B"
              @click="handleSelect2"
              class="text-weight-bold q-mb-md"
              style="width: 350px"
              :class="cB"
            >
            </q-btn>
            <q-btn
              rounded
              :label="formGame.C"
              @click="handleSelect3"
              class="text-weight-bold q-mb-md"
              style="width: 350px"
              v-if="formGame.C"
              :class="cC"
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
              flat
              @click="handleSignIn"
              style="margin-top: 100px"
            >
              <img src="~assets/chiase.png">
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
              @click="qd = false"
              style="margin-bottom: 20px; margin-left: 400px"
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
              @click="afterShareSai"
              style="margin-top: 400px"
            >
              <img src="~assets/share.png">
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
              flat
              @click="fanpage"
            >
              <img src="~assets/inbox.png">
            </q-btn>
          </q-card-actions>
          <q-card-actions align="center">
            <q-btn
              flat
              @click="onReset"
            >
              <img src="~assets/choitiep.png">
            </q-btn>
          </q-card-actions>
          <q-card-actions align="center">
            <q-btn
              flat
              @click="handleSignIn"
            >
              <img src="~assets/chiase.png">
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
      cA: null,
      cB: null,
      cC: null,
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
      this.$refs.info.validate().then(async success => {
        if (!success) return;
        const user = await apiServiceInstance.signIn(this.form.email, this.form.phone)
        this.email = user.email
        this.turn = user.turn
        LocalStorage.set('email', user.email)
        LocalStorage.set('turn', user.turn)
        this.turn = LocalStorage.getItem('turn')
        this.signIn = false;
        this.handleOpenGame();
      });
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
      this.cA = "choncau";
      this.cB = "choncau";
      this.cC = "choncau"
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
        this.aDung()
        setTimeout(this.handleOpenDung, 2000)
        setTimeout(this.handleCloseGame, 3000)
      } else {
        if(this.formGame.rs === 2) {
          this.bDung()
          setTimeout(this.handleOpenDung, 2000)
          setTimeout(this.handleCloseGame, 3000)
        } else {
          this.cDung()
          setTimeout(this.handleOpenDung, 2000)
          setTimeout(this.handleCloseGame, 3000)
        }
      }
    },
    async handleSelect2() {
      if (this.formGame.rs === 2) {
        this.bDung()
        setTimeout(this.handleOpenDung, 2000)
        setTimeout(this.handleCloseGame, 3000)
      } else {
        if(this.formGame.rs === 1) {
          this.aDung()
          setTimeout(this.handleOpenSai, 2000)
          setTimeout(this.handleCloseGame, 3000)
        } else {
          this.cDung()
          setTimeout(this.handleOpenSai, 2000)
          setTimeout(this.handleCloseGame, 3000)
        }
      }
    },
    async handleSelect3() {
      if (this.formGame.rs === 3) {
        this.cDung()
        setTimeout(this.handleOpenDung, 2000)
        setTimeout(this.handleCloseGame, 3000)
      } else {
        if(this.formGame.rs === 1) {
          this.aDung()
          setTimeout(this.handleOpenSai, 2000)
          setTimeout(this.handleCloseGame, 3000)
        } else {
          this.bDung()
          setTimeout(this.handleOpenSai, 2000)
          setTimeout(this.handleCloseGame, 3000)
        }
      }
    },
    handleCloseGame() {
      this.game = false
    },
    handleOpenSai() {
      this.sai = true;
    },
    afterShareSai() {
      this.game = true;
    },
    fanpage() {
      window.open("https://www.facebook.com/MarC.Marketertalks");
    },
    aDung() {
      this.cA = "chondung"
      this.cB = "chonsai"
      this.cC = "chonsai"
    },
    bDung() {
      this.cA = "chonsai"
      this.cB = "chondung"
      this.cC = "chonsai"
    },
    cDung() {
      this.cA = "chonsai"
      this.cB = "chonsai"
      this.cC = "chondung"
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
</script>

<style>
  .luat{
    font-family: Work Sans;
    font-size: 30px;
    color: white;
  }
  .choncau{
    background: radial-gradient(farthest-corner at 0px 1px,white 1%, #FF9DE9 100%);
  }
  .cauB{
    background: radial-gradient(farthest-corner at 0px 1px,white 1%, #FFC3F2 100%);
  }
  .chondung{
    background: radial-gradient(farthest-corner at 0px 1px,white 1%, #007AFF 100%);
  }
  .chonsai{
    background: radial-gradient(farthest-corner at 0px 1px,white 1%, #FF0000 100%);
  }
  .hoi{
    font-family: Work Sans;
    font-size: 20px;
    background-color: white;
  }
  .mo{
    font-family: Work Sans;
    font-size: 25px;
    color: white;
  }
  .ses1{
    background:url('~assets/background.png');
    position:relative;
    width: 100vw;
    z-index: 1;
    background-repeat: no-repeat; 
    background-size: cover;
  }
  .ses2{
    background-image:url('~assets/bg2.png');
    position:relative;
    height:120vh;
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
    height: 50vh;
  }
  .prize{
    font-family: Montserrat;
    font-size: 14px;
  }
  .themluot{
    font-family: Montserrat;
    font-size: 25px;
  }
</style>