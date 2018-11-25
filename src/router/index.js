import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '@/components/AboutUs'
import PayNews from '@/components/PayNews'
import PayNews2 from '@/components/PayNews2'
import Home from '@/components/Home'
import Company from '@/components/Company'
import NewsDetail from '@/components/NewsDetail'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'company',
      component: Company
    },
    {
      path: '/payNews',
      name: 'payNews',
      component: PayNews,
    },
    {
      path: '/payNews2',
      name: 'payNews2',
      component: PayNews2
    },{
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs
    },
    {
      path: '/newsDetail/:id',
      name: 'newsDetail',
      component: NewsDetail,
      props: true,
    },
    {
      path: '/login/:id',
      name: 'login',
      component: Login,
      props: true,
    }
  ]
})



