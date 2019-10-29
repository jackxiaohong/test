<template>
    <div>
        <div class="not_login" v-if="!$store.getters.getIslogin">
            <div class="logo">
                <img src="../../assets/personal.png" alt="">
            </div>
            <div>
                <span @click="login">未登录</span>
                <span>></span>
            </div>
        </div>
        <div class="is_login" v-if="$store.getters.getIslogin">
            <div class="logo">
                <img src="../../assets/personal.png" alt="">
            </div>
            <div>
                <span v-text="phone"></span>
                <span>></span>
            </div>
        </div>
    <div class="order">
      <div class="own">
        <p class="section_title">我的订单</p>
        <router-link to="/OrderForm">待付款</router-link>
        <router-link to="/OrderForm">待发货</router-link>
        <router-link to="/OrderForm">待收货</router-link>
        <router-link to="/OrderForm">待评价</router-link>
      </div>
    </div>
      <div class="own">
        <p class="section_title">我的资产</p>
        <a href="javascript:;" class="birth">新人邀请</a>
        <router-link to="/Infornation" class="detail">我的收藏</router-link>
        <a href="javascript:;" class="card">地址管理</a>
        <router-link to="/Save" class="shoucang">消息中心</router-link>
        <a href="javascript:;" class="online">帮助与反馈</a>
        <a href="javascript:;" class="ticket">设置</a>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            phone:""
        }
    }

};

</script>
