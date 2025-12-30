import { createMemoryHistory, createRouter, type RouteRecordRaw } from 'vue-router'
import { PapuddingSkeleton } from 'papudding-layout'

export const pagesRoutes: RouteRecordRaw[] = [
  {
    path: '/home',
    component: () => import('./pages/HelloWorld.vue'),
    meta: {
      icon: 'nav/home.svg',
      title: '首页'
    }
  },
  {
    path: '/tools',
    meta: {
      icon: 'nav/work.svg',
      title: '工作'
    },
    children: [
      {
        path: '/task',
        component: () => import('./pages/TestPage.vue'),
        meta: {
          icon: 'nav/work_task.svg',
          title: '工作任务'
        }
      },
      {
        path: '/log',
        component: () => import('./pages/TestTablePage.vue'),
        meta: {
          icon: 'nav/work_log.svg',
          title: '工作日志'
        }
      },
    ]
  }
]

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: PapuddingSkeleton,
    children: pagesRoutes
  },
  {
    path: '/login',
    component: () => import('./pages/Login.vue'),
    meta: {
      title: '登录'
    }
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router