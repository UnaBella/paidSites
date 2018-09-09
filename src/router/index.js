import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '@/components/AboutUs'
import PayNews from '@/components/PayNews'
import Home from '@/components/Home'
import Company from '@/components/Company'
import NewsDetail from '@/components/NewsDetail'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/payNews',
      name: 'payNews',
      component: PayNews,
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
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



