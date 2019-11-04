<template>
    <div v-cloak>
        <!-- <button @click="test">123213</button> -->
        <div class="not_login" v-if="!$store.getters.getIslogin"  @click="login">
            <div class="logo">
                <img src="../../assets/personal.png" alt="">
            </div>
            <div class="not_login_text">
                <span>未登录</span>
                <span>></span>
            </div>
        </div>
        <div class="is_login" v-if="$store.getters.getIslogin" v-cloak>
            <div class="logo">
                <img src="../../assets/personal.png" alt="">
            </div>
            <div class="not_login_text">
                <span v-text="phone"></span>
                <span @click="logout">></span>
            </div>
        </div>
    <div class="order">
      <div class="own">
           <div class="section_title">
              <span>我的订单</span>
              <div >
                  <span>全部订单</span>
                  <span>></span>
              </div>
          </div>
        <div class="section_text">
            <router-link to=""  class="router_img">
                <img src="../../assets/personal1.png" alt="">
                <span>待付款</span>
            </router-link>
             <router-link to=""  class="router_img">
                <img src="../../assets/personal2.png" alt="">
                <span>待发货</span>
            </router-link>
             <router-link to=""  class="router_img">
                <img src="../../assets/personal3.png" alt="">
                <span>待收货</span>
            </router-link>
             <router-link to="/OrderForm"  class="router_img">
                <img src="../../assets/personal4.png" alt="">
                <span>待评价</span>
            </router-link>
        </div>
      </div>
    </div>
      <div class="own">
          <router-link to="" class="section_last">
              <div class="section_img">
                   <img src="../../assets/personal_last1.png" alt="">
                   <span class="section_title_last">我的资产</span>
              </div>
            <span class="section_last_right">优惠券、积分等></span>
         </router-link>
         <router-link to="" class="section_last">
              <div class="section_img">
                   <img src="../../assets/personal_last2.png" alt="">
                   <span class="section_title_last">新人邀请</span>
              </div>
              <span class="section_last_right">></span>
         </router-link>
          <router-link to="" class="section_last">
              <div class="section_img">
                   <img src="../../assets/personal_last3.png" alt="">
                   <span class="section_title_last">我的收藏</span>
              </div>
            <span class="section_last_right">></span>
         </router-link>
          <router-link to="" class="section_last">
              <div class="section_img">
                   <img src="../../assets/personal_last4.png" alt="">
                   <span class="section_title_last">地址管理</span>
              </div>
            <span class="section_last_right">></span>
         </router-link>
          <router-link to="" class="section_last">
              <div class="section_img">
                   <img src="../../assets/personal_last5.png" alt="">
                    <span class="section_title_last">消息中心</span>
              </div>
            <span class="section_last_right">></span>
         </router-link>
          <router-link to="" class="section_last">
              <div class="section_img_second">
                   <img src="../../assets/personal_last6.png" alt="">
                   <span class="section_title_last">帮助与反馈</span>
              </div>
            <span class="section_last_right">></span>
         </router-link>
          <router-link to="" class="section_last">
              <div class="section_img_last">
                   <img src="../../assets/personal_last7.png" alt="">
                   <span class="section_title_last">设置</span>
              </div>
              <span class="section_last_right">></span>
         </router-link>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      phone: ""
    };
  },

  created() {
    this.load();
  },
  methods: {
    // test() {
    //   console.log(this.$store.getters.getIslogin);
    // },
    load() {
      this.axios.get("/personal").then(result => {
        if (result.data.code == 1) {
          this.phone = result.data.data[0].phone;
        }
      });
    },
    login() {
      this.$router.push("/Login");
    },
    logout(){
        this.$messagebox("","是否退出登录").then(action=>{
            this.phone="";
            this.$store.commit("setIslogin",false);
            this.$router.push("/tabbaricon1");
        })
    }
  }
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
.not_login {
  background-color: #845f3f;
  display: flex;
  align-items: center;
  padding: 40px 0 20px 10px;
}
.is_login{
  background-color: #845f3f;
  display: flex;
  align-items: center;
  padding: 40px 0 20px 10px;
}
.not_login_text {
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  width: 250px;
  font-size: 10px;
  color: #d7cbc2;
}
.logo img {
  width: 60%;
}
.section_title {
  border: 1px solid #d7cbc2;
  /* border-bottom: 0px; */
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: #5c5c5c;
  padding: 10px 10px 10px 10px;
}

.router_img {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 100px; */
  /* text-align: center; */
  color: #5c5c5c;
}
.router_img img {
  width: 35%;
}
.section_text {
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-size: 10px;
  padding: 10px 0 10px 0;
}
.section_last {
  border: 1px solid #d7cbc2;
  border-bottom: 0px;
  font-size: 12px;
  color: #686868;
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* height: 80px; */
  line-height: 50px;
  /* padding-left: 0px; */
}
.section_last a:last-child {
      border: 1px solid #d7cbc2;
}


.section_img{
    /* margin: 0; */
    width: 100px;
}
/* .section_title_last{
    border: 1px solid #d7cbc2;
    border-bottom: 0px;
    font-size: 12px;
    color: #686868;
    width: 100%;
} */
.section_img img{
  width: 15%;
}
.section_img span{
    padding-left: 7px;
}
.own{
    width: 100%;
}
.section_last_right{
    padding-right: 14px;
}
.section_img_second{
    padding-left: 3px;
    width: 100px;
}
.section_img_second img{
     width: 15%;
}

.section_img_second span{
    padding-left: 7px;
}
.section_img_last{
    /* padding-left: 3px; */
    width: 70px;
}
.section_img_last img{
     width: 21%;
}

.section_img_last span{
    padding-left: 7px;
}




/* .section_last{
    display: flex;

} */
</style>

