<template>
    <div class="container">
        <div class="caption">
            <img src="../../assets/product_detail_fanhui.png" class="caption_img" alt="">
            <span>结算</span>
        </div>
        <div class="address_second">
            <span v-show="active">请选择收货地址</span>
            <span v-show="!active">收货地址为:</span>
            <span v-show="active">&gt;</span>
            <span v-show="!active" v-text="site"></span>
        </div>
        <div>
            <span>门店名称：××蛋糕</span>
            <span>门店电话:0000-00000000</span>
            <span>配送门店：1.地址：越秀区侨光路8号华厦大厦B座7楼达内 2.营业时间：8:30-18:00 每周一至周五公休</span>
        </div>
        <div>
            <span>商品详情</span>
        </div>
        <div>
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  overflow: hidden;
}
.caption {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px 0px 5px 10px;
  font-size: 18px;
}
.caption img {
  width: 5%;
  height: 5%;
}
.caption span{
    margin: 0 auto;
    padding-right: 8px;
}
</style>


