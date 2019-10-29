<template>

    <div>
            <!-- 2面板 切换不同内容 -->
            <mt-tab-container v-model="active">
                 <!-- 子面板 -->
                <mt-tab-container-item id="tab">
                    <!-- 调用子组件 -->
                    <TitileBar></TitileBar>
                </mt-tab-container-item>
            </mt-tab-container>
                <!-- 3底部导航条 -->
        <mt-tabbar fixed v-model="active">
                <!-- 第一个按钮 微信 -->
                <!-- 因为mt-tab-item不支持@click点击事件，所以加个.native变成原生事件 -->
             <mt-tab-item id="tab" @click.native="change(0)">
                <TabbarIcon :seletedImg="require('../../assets/mianban1_active.png')"
                :normalImg="require('../../assets/mianban1.png')" :focused="currentIndex[0].isSelected"></TabbarIcon>首页 
            </mt-tab-item>
            <mt-tab-item id="tab1" @click.native="change(1)">
                <TabbarIcon :seletedImg="require('../../assets/mianban2_active.png')"
                :normalImg="require('../../assets/mianban2.png')" :focused="currentIndex[1].isSelected"></TabbarIcon>分类  
            </mt-tab-item>
            <mt-tab-item id="tab2" @click.native="change(2)">
                <TabbarIcon :seletedImg="require('../../assets/mianban3_active.png')"
                :normalImg="require('../../assets/mianban3.png')" :focused="currentIndex[2].isSelected"></TabbarIcon>品味  
            </mt-tab-item>
            <mt-tab-item id="tab3" @click.native="change(3)">
                <TabbarIcon :seletedImg="require('../../assets/mianban4_active.png')"
                :normalImg="require('../../assets/mianban4.png')" :focused="currentIndex[3].isSelected"></TabbarIcon>购物车  
            </mt-tab-item>
            <mt-tab-item id="tab4" @click.native="change(4)">
                <TabbarIcon :seletedImg="require('../../assets/mianban5_active.png')"
                :normalImg="require('../../assets/mianban5.png')" :focused="currentIndex[4].isSelected"></TabbarIcon>个人 
            </mt-tab-item>
        </mt-tabbar> 
        <!-- 底部导航条end
        <TabbarIcon :a1="require('../../assets/ic_weixin_normal.png')" :b1="require('../../assets/ic_contacts_normal.png')"
        :c1="require('../../assets/ic_find_normal.png')" :d1="require('../../assets/ic_me_normal.png')"
        ></TabbarIcon> -->
    </div>
</template>



<script>
import TabbarIcon from "./TabbarIcon.vue";
import TitileBar from "./TitileBar.vue";
export default {
  data() {
    return {
      active: "tab",
      currentIndex: [
        { isSelected: true },
        { isSelected: false },
        { isSelected: false },
        { isSelected: false },
        { isSelected: false }
      ]
    };
  },
  methods: {
    change(n) {
      for (var i = 0; i < this.currentIndex.length; i++) {
        if (n == i) {
          this.currentIndex[i].isSelected = true;
        } else {
          this.currentIndex[i].isSelected = false;
        }
      }
    }
  },
  components: {
    "TabbarIcon": TabbarIcon,
    "TitileBar":TitileBar
  }
};
</script>

<style scoped>
/*1:修改tabbar中默认 灰和选中文字 绿*/
/*文字颜色*/
.mint-tabbar > .mint-tab-item {
  color: #000;
}
/*选中文字颜色*/
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
  color: #aa9271;
}
</style>



