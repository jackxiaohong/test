<template>
    <div>
     <!-- 居家 -->
        <div class="jujia">
            <div class="jujia-item" v-for="(item,i) of items" :key="i">
                <router-link :to="`/product_detail/${item.pid}`">
                <img :src="'http://127.0.0.1:4000/'+item.img_url"  alt="">
                <div class="jujia_title">{{item.title}}</div>
                <div class="jujia_datail">
                    <div class="jujia_name">{{item.name}}</div>
                    <div class="jujia_price">
                        <span>¥</span>
                        <span>{{item.price}}</span>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            items:[]
        }
    },
    props:["cid"],
    methods:{
        load(){
            var cid = this.cid;
            this.axios.get("/series",{params:{cid:cid}})
            .then(result=>{
                if(result.data.code == 1){
                    this.items =result.data.data;
                }else{
                    this.items =[];
                }
            })
        }
    }
};
</script>

<style scoped>
/*居家*/
.jujia {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 4px;
  font-size: 13px;
}
.jujia-item {
  width: 49%; /*指定商品宽度*/
  border: 1px solid #ccc; /*灰色边*/
  border-radius: 5px; /*圆角*/
  margin: 2px 0; /*外边距*/
  padding: 2px; /*内边距*/
  box-sizing: border-box; /*计算宽度*/
  display: flex; /*弹性布局*/
  flex-direction: column; /*按列排*/
  min-height: 247px; /*最小高度*/
  margin: 0 auto;
}
.jujia-item img {
  width: 100%;
}

.jujia_title{
    padding: 10px 0px 10px 0px;
    color: #927154;
}

.jujia_datail{
    color:#000;
    background-color: #f8f8f8;
    padding: 10px;
}
.jujia_price{
    color: #f00;
}
/* .jujia-item:nth-last-child(2) img{
    height: 60%;
}
.jujia-item:nth-child(4) img{
    height: 67%;
} */
.jujia-item img{
  height:66%;
}
.jujia-item:nth-last-child(2) img{
  height: 60%;
}
</style>


