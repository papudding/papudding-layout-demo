import type { InjectionKey } from "vue"
import { createStore, Store } from "vuex"

interface AppState {
  // 应用级状态
  app: {
    language: 'zh-CN' | 'en-US'
  },
}


// 创建 store 实例
export const store = createStore<AppState>({
  state: () => ({
    app: {
      language: 'zh-CN',
    },
  }),
  mutations: {
    // 添加 app 状态的 mutations
    setLanguage(state, language: 'zh-CN' | 'en-US') {
      state.app.language = language
    }
  },
  actions: {
    // 添加 app 状态的 actions
    setLanguage({ commit }, language: 'zh-CN' | 'en-US') {
      commit('setLanguage', language)
    }
  }
})

export const key: InjectionKey<Store<AppState>> = Symbol()