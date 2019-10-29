import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Exam01 from '@/components/exam/Exam01.vue'
import Login from "@/components/exam/Login.vue"
import Product from '@/components/exam/Product.vue'
import register from '@/components/exam/register.vue'
import home from '@/components/home.vue'
import TitileBar from '@/components/exam/TitileBar.vue'
import pingwei from '@/components/exam/pingwei.vue'
import product_one from '@/components/exam/product_details/product_one.vue'
import product_three from '@/components/exam/product_details/product_three.vue'
import product_four from '@/components/exam/product_details/product_four.vue'
import tabbaricon1 from '@/components/exam/tabbaricon1.vue'
import personal from '@/components/exam/personal.vue'
// import TitleBar from '@/components/pagecomponent/TitileBar.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/personal',
      component: personal
    },
    {
      path: '/tabbaricon1',
      component: tabbaricon1
    },
    // {
    //   path: '/TabbarIcon',
    //   component: TabbarIcon
    // },
    {
      path: '/product_four',
      component: product_four
    },
    {
      path: '/product_three',
      component: product_three
    },
    {
      path: '/product_one',
      component: product_one
    },
    {
      path: '/Exam01',
      component: Exam01
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Product',
      component: Product
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/TitileBar',
      component: TitileBar
    },
    {
      path: '/pingwei',
      component: pingwei
    }
  ]
})
