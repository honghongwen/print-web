import Vue from 'vue'

import Layout from '@/layout'
import Router from 'vue-router'

Vue.use(Router)


export const currencyRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    meta: {title: '登录页'},
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/dashbord',
    children: [
      {
        path: 'dashbord',
        name: 'Dashbord',
        component: () => import('@/views/dashbord'),
        meta: {title: '首页', icon: 'el-icon-s-data'}
      }
    ]
  },
  {
    path: '/analyze',
    name: 'Analyze',
    component: Layout,
    redirect: '/analyze/day',
    children: [
      {
        path: 'day',
        name: 'Day',
        component: () => import('@/views/analyze/day'),
        meta: {title: '日报', icon: 'el-icon-s-data'}
      },
      {
        path: 'month',
        name: 'Month',
        component: () => import('@/views/analyze/month'),
        meta: {title: '月报', icon: 'el-icon-s-data'}
      }
    ]
  },
  {
    path: '/biz',
    name: 'Biz',
    component: Layout,
    redirect: '/biz/print',
    children: [
      {
        path: 'print',
        name: 'Print',
        component: () => import('@/views/biz/print'),
        meta: {title: '面单打印', icon: 'el-icon-s-data'}
      },
      {
        path: 'trace',
        name: 'Trace',
        component: () => import('@/views/biz/trace'),
        meta: {title: '物流跟踪', icon: 'el-icon-s-data'}
      }
    ]
  }
]

const createRouter = () => {
  return new Router({
    routes: currencyRoutes
  })
}

const router = createRouter()

export default router