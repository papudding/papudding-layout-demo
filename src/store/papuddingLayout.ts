import { createStore } from 'vuex'
import { actions, mutations, loadState, type LayoutState, saveState } from 'papudding-layout'
import { menuItemsBuilder } from '../utils/menuItemBuilder.ts'
import { pagesRoutes } from '../router.ts'

const layoutStateKey = 'papudding-layout-state'

// 定义默认状态
const defaultState: LayoutState = {
  tabList: [{
    path: '/home',
    title: '首页',
    tabPath: ['首页']
  }],
  activeTab: '/home',
  breadcrumbItemList: ['首页'],
  menuItems: menuItemsBuilder(),
  pagesRoutes: pagesRoutes,
  avatarUrl: 'https://avatars.githubusercontent.com/u/10262924?v=4',
}

// 创建 store 实例
export const store = createStore<LayoutState>({
  state: () => loadState(layoutStateKey, defaultState),
  mutations: {
    ...mutations,
  },
  actions: {
    ...actions
  }
})

saveState(layoutStateKey, store)