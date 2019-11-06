<template>
    <div class="container"> 
        <!-- 抬头 -->
        <div class="title">
            <img src="../../../assets/product_detail_fanhui.png" alt="" class="title_img" @click="$router.push('/tabbaricon1')">
            <span>商品详情</span>
        </div>
        <!-- 大图 -->
        <div>
            <van-swipe >
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 信息 -->
        <div class="intro">
            <div class="intro_head">
                <span>￥48</span>
                <span>花加水培绿植套装</span>
            </div>
            <div class="fengxiang">
                <img src="../../../assets/product_detail_fenxian.png" alt="">
                <span>分享</span>
            </div>
        </div>
        <div class="countAll">
            <span>销量: 0件</span>
            <span>库存: 291件</span>
            <span>浏览量: 5</span>
        </div>
         <div style="height:0.8rem;width:100%;background-color:#ddd;margin:0"></div>
         <div class="spec">
             <span>请选择 尺寸 状态</span>
             <!-- <span >尺寸 状态</span> -->
             <img src="../../../assets/product_detail_right.png" class="spec_img" alt="">
         </div>
        <div style="height:0.8rem;width:100%;background-color:#ddd;margin:0"></div>
        <div class="tabbar" >
            <mt-button @click.native.prevent="active = 'tab1'">
                商品详情
            </mt-button>
            <mt-button @click.native.prevent="active = 'tab2'">
                商品评论
            </mt-button>
        </div>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab1" class="product_xiangqin">
                <img src="../../../assets/detail_pinglun1.jpg" alt="">
                <img src="../../../assets/detail_pinglun3.jpg" alt="">
                <img src="../../../assets/detail_pinglun2.jpg" alt="">
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <div>
                    <ul  class="product_pinglun">
                        <li v-for="(item,i) of items" :key="i"  @click="change" >
                            <span>{{item.name}}</span>
                        </li>
                    </ul>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部导航 -->
        <div  style="position:fixed;bottom:0;width:100%;z-index:999;">
            <ul class="fix_last">
                <li class="fix_last_shouye">
                    <img src="../../../assets/detail_last_zhuye.png" alt="">
                    <span>首页</span>
                </li>
                <li class="fix_last_shoucan">
                    <img src="../../../assets/personal_last3.png" alt="">
                    <span >收藏</span>
                </li>
                <li class="fix_last_buy">
                    <span >加入购物车</span>
                    <span @click="select">立即购买</span>
                </li>
            </ul>
        </div>
        <div class="select_spec" v-show="show_spec">
            <!-- <van-button type="primary" text="显示遮罩层" @click="show = true"  />
            <van-overlay :show="show" @click="show = false" /> -->
            <div class="mask" @click="cancel"></div>
                <div class="Spec">
                    <div class="spec_list">
                    <img :src="list.img_url">
                    <!-- <img :src="'http://127.0.0.1:5050//'+list.img_url" alt=""> -->
                    <div v-text="`￥${list.price}`"></div>
                    <div class="Repertory">库存
                        <span v-text="list.repertory" style="color:green"></span>件
                    </div>
                    </div>
                <div class="Spec_select">
                    <div class="size" v-for="(task,t) of tasks" :key="t">
                        <span class="size_name"> {{task.name}}</span>
                        <div class="size_select">
                            <span v-for="(Item,index) of task.Items" :key="index">{{Item.names}}</span>
                        </div>
                    </div>
                </div>
                <div class="count">
                    <span class="count_left">数量</span>
                    <div class="Input">
                        <span @click="addNum(-1)">-</span>
                        <input type="text" v-model="number">
                        <span @click="addNum(+1)">+</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: "tab1",
      images: [
        "https://img.youpin.mi-img.com/goods/51a5a631db5b1f08a60e6d612a10f507.jpg@base@tag=imgScale&F=webp&h=166&w=166",
        "https://img.youpin.mi-img.com/goods/7433d726a96fc88f381a67e699ac67c9.jpg@base@tag=imgScale&F=webp&h=166&w=166",
        "https://img.youpin.mi-img.com/goods/661d44f342c089bbae2eade004e03f1e.jpg@base@tag=imgScale&F=webp&h=166&w=166",
        "https://img.youpin.mi-img.com/goods/cceda0459b5589cfae8b324e5e73ad8d.jpg@base@tag=imgScale&F=webp&h=166&w=166"
      ],
      items: [
        { name: "全部 (2)" },
        { name: "有图 (2)" },
        { name: "好评 (2)" },
        { name: "中评 (2)" },
        { name: "差评 (2)" }
      ],
      show_spec: false,
      number: 1,
      list: {
        img_url:
          "https://img.youpin.mi-img.com/goods/51a5a631db5b1f08a60e6d612a10f507.jpg@base@tag=imgScale&F=webp&h=166&w=166",
        price: 220,
        repertory: 120
      },
      tasks: [
        {
          name: "尺寸",
          Items: [
            {
              names: "5寸"
            },
            {
              names: "6寸"
            },
            {
              names: "7寸"
            }
          ]
        },
        {
          name: "系列",
          Items: [
            {
              names: "屏风"
            },
            {
              names: "水雾森林"
            },
            {
              names: "双子星"
            }
          ]
        }
      ]
    };
  },
  methods: {
    change(e) {
      console.log(e.target.parentElement.parentElement.children);
      var b = event.target.parentElement.parentElement.children;
      for (var i = 0; i < b.length; i++) {
        console.log(b[i].children);
        b[i].children[0].style.color = "";
      }
      event.target.style.color = "#f00";
    },
    //点击遮罩层退出选择规格选择
    cancel() {
      this.show_spec = false;
    },
    select() {
      // if(this.$store.getters.getIslogin){
      this.show_spec = true;
      // }else{
      //     this.$toast("请先登录")
      // }
    },
    addNum(i){
        if(i == -1&&this.number==1){
            this.number=1;
        }else{
            var number =Number(this.number);
            this.number=number+i;
        }
    }
  }
};
</script>

<style scoped>
.container {
  overflow: hidden;
  position: relative;
}
/* .title img{
    width: 20%;
} */
.title {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 5px 0px 5px 10px;
  font-size: 18px;
}
.title img {
  width: 5%;
  height: 5%;
}
.title span {
  margin: 0 auto;
  padding-right: 8px;
}
/* .title_img{
   
} */
/* .van-swipe-item{
    width: 100%;
} */
.van-swipe-item img {
  width: 100%;
  height: 5%;
}
.intro {
  font-size: 15px;
  padding: 5px 5px 5px 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.intro .intro_head {
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  text-align: left;
  font-weight: 600;
}
.intro .intro_head :first-child {
  color: red;
  padding-bottom: 5px;
}
.intro .fengxiang {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro .fengxiang img {
  width: 30%;
}
.countAll {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 0 5px 5px 5px;
}
.spec {
  font-size: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* .spec :nth-child(2){

} */
.spec .spec_img {
  width: 2%;
  height: 2%;
}

.tabbar {
  display: flex;
  justify-content: space-around;
  background: #dddddd4d;
}
.tabbar :active {
  border-bottom: 2px solid #ea5454;
}
.product_xiangqin img {
  width: 100%;
}

.product_pinglun {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 300px;
}
/* .product_pinglun :active{
    color: red;
} */

.fix_last {
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* line-height: 60px; */
  border: 1px solid #ccc;
  /* text-align: center; */
  padding-top: 12px;
}

.fix_last_shouye {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  /* height: 50px; */
  /* height: 10px; */
  align-content: flex-start;
}

.fix_last_shouye span {
  font-size: 5px;
}
/* .fix_last_shouye img{
    display: block
}
.fix_last_shouye span{
    display: block;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 5px;
} */
/* .fix_last_shouye::after{
    content: "";
    display: block;
    clear:both;
} */

/* .fix_last_shouye::after{
  content:"";
  display:block;
  clear:both
} */
/* .fix_last_shouye span{
    height: 20px;
} */
.fix_last_shoucan {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 10px; */
  height: 50px;
  align-content: flex-start;
}
.fix_last_shoucan span {
  font-size: 5px;
}
/* .fix_last_shoucan span{
    display: block;
    font-size: 5px;
    height: 15px;
    line-height: 15px;
} */

/* .fix_last_shoucan::after{
  content:"";
  display:block;
  clear:both
} */
/* .fix_last_shoucan::after{
    content: "";
    display: block;
    clear:both;
} */
.fix_last li img {
  width: 25px;
  height: 25px;
}
/* .fix_last li span{
    font-size: 5px;
} */

.fix_last_buy span {
  border-radius: 5%;
  background-color: #fe7951;
  width: 140px;
  height: 40px;
  display: inline-block;
  line-height: 37px;
  border-radius: 5px 5px 5px 5px;
}

.select_spec {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
}
.mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.Spec {
  width: 100%;
  position: fixed;
  bottom: 4rem;
  background-color: #fff;
  z-index: 9;
}

.spec_list {
  width: 100%;
  height:60px;
  position: relative;
  border-bottom: 2px solid #f00;
}
.Spec img {
  position: absolute;
  top: -65px;
  left: 10px;
  width: 120px;
  height: 120px;
}

.Spec_select{
    padding: 15px 10px 10px 10px;
    border-bottom: 1px solid #ccc;
}

.Spec_select .size_select{
    margin-top: 10px;
    overflow: hidden;
}
.Spec_select .size{
    overflow: hidden;
    text-align: left;
}
.size_select span{
    border: 1px solid #000;
    border-radius: 5px;
    /* display: flex;
    justify-content: space-around;
    flex-wrap: wrap; */
    float: left;
    /* text-align: center; */
    padding: 0px 10px 0px 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    height: 35px;
    line-height: 35px;
}

.size_name{
    display: inline-table;
    /* margin-top: 10px; */
    text-align: left !important;
}

.count{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0px 8px 0px 4px;
}
.count_left{
    /* float: left; */
}
.Input{
    /* float: right; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

.Input span{
    width: 30px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    background-color: #ccc;
    margin-right: 5px;
    text-align: center;

}
.Input input{
    width: 30px;
    height: 25px;
    background-color: #ccc;
    outline: none;
    text-align: center;
    margin-right: 4px;
}


</style>


