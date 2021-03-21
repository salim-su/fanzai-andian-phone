/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/login')
  },
  {
    path: '/device-alert',
    component: () => import('@/views/device-alert/device-alert')
  },
  {
    path: '/ship-more',
    component: () => import('@/views/ship/ship-more')
  },
  {
    path: '/andian-info',
    component: () => import('@/views/andian/andian-info')
  },
  {
    path: '/andian-overview',
    component: () => import('@/views/andian/andian-overview')
  },
  {
    path: '/ship-alarm-process',
    component: () => import('@/views/ship/ship-alarm-process')
  },
  {
    path: '/ship-index',
    component: () => import('@/views/ship/ship-index')
  },
  {
    path: '/device-register-info',
    component: () => import('@/views/device-register-info/device-register-info')
  },
  {
    path: '/add-select',
    component: () => import('@/views/add-select/add-select')
  },
  {
    path: '/add-code',
    component: () => import('@/views/add-code/add-code')
  },
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    // redirect: '/home',
    // meta: {
    //   title: '首页',
    //   keepAlive: false
    // },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false, requireAuth: true }
      },
      {
        path: '/count',
        name: 'Count',
        component: () => import('@/views/home/count'),
        meta: { title: '统计', keepAlive: false, requireAuth: false }
      },
      {
        path: '/alarm',
        name: 'Alarm',
        component: () => import('@/views/home/alarm'),
        meta: { title: '报警', keepAlive: false, requireAuth: false }
      }
    ]
  }
]
