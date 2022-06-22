import Vue from 'vue'

import Layout from '@/layout'
import Router from 'vue-router'

Vue.use(Router)


export const currencyRoutes = [{
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    meta: {
      title: '登录页'
    },
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
    children: [{
      path: 'dashbord',
      name: 'Dashbord',
      component: () => import('@/views/dashbord'),
      meta: {
        title: '首页',
        icon: 'el-icon-s-data'
      }
    }]
  },
  {
    path: '/express',
    name: 'Express',
    component: Layout,
    redirect: '/express/trace',
    children: [{
        path: 'trace',
        name: 'Trace',
        component: () => import('@/views/express/trace'),
        meta: {
          title: '物流跟踪',
          icon: 'el-icon-s-data'
        }
      }
    ]
  },
  {
    path: '/analyze',
    name: 'Analyze',
    component: Layout,
    redirect: '/analyze/day',
    children: [{
        path: 'day',
        name: 'Day',
        component: () => import('@/views/analyze/day'),
        meta: {
          title: '日报',
          icon: 'el-icon-s-data'
        }
      },
      {
        path: 'month',
        name: 'Month',
        component: () => import('@/views/analyze/month'),
        meta: {
          title: '月报',
          icon: 'el-icon-s-data'
        }
      }
    ]
  },
  {
    path: '/printer',
    name: 'Printer',
    component: Layout,
    redirect: '/printer/list',
    children: [{
        path: 'list',
        name: 'List',
        component: () => import('@/views/printer/list'),
        meta: {
          title: '面单列表',
          icon: 'el-icon-s-data'
        }
      },
      {
        path: 'add',
        name: 'Add',
        component: () => import('@/views/printer/add'),
        meta: {
          title: '新增面单',
          icon: 'el-icon-s-data'
        }
      },
      {
        path: 'batch',
        name: 'Batch',
        component: () => import('@/views/printer/batch'),
        meta: {
          title: '批量导入',
          icon: 'el-icon-s-data'
        }
      }
    ]
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Layout,
    redirect: '/setting/template',
    children: [{
      path: 'template',
      name: 'Template',
      component: () => import('@/views/setting/template'),
      meta: {
        title: '快递单模版',
        icon: 'el-icon-s-data'
      }
    },
    {
      path: 'receiveMan',
      name: 'ReceiveMan',
      component: () => import('@/views/setting/receiveMan'),
      meta: {
        title: '常用收件人',
        icon: 'el-icon-s-data'
      }
    },
    {
      path: 'sendMan',
      name: 'SendMan',
      component: () => import('@/views/setting/sendMan'),
      meta: {
        title: '常用寄件人',
        icon: 'el-icon-s-data'
      }
    }
  ]
  },
  {
    path: '/system',
    name: 'System',
    component: Layout,
    redirect: '/system/user',
    children: [{
      path: 'user',
      name: 'User',
      component: () => import('@/views/system/user'),
      meta: {
        title: '用户管理',
        icon: 'el-icon-s-data'
      }
    }]
  }
]

const createRouter = () => {
  return new Router({
    routes: currencyRoutes
  })
}

const router = createRouter()

export default router
