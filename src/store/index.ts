import type { InjectionKey } from "vue"
import { createStore, Store, useStore as baseUseStore } from "vuex"

interface AppState {
  // 应用级状态
  app: {
    theme: 'light' | 'dark'
    language: 'zh-CN' | 'en-US'
  },
}


// 创建 store 实例
export const store = createStore<AppState>({
  state: () => ({
    app: {
      theme: 'light',
      language: 'zh-CN',
    },
  }),
  mutations: {
    // 添加 app 状态的 mutations
    setTheme(state, theme: 'light' | 'dark') {
      state.app.theme = theme
    },
    setLanguage(state, language: 'zh-CN' | 'en-US') {
      state.app.language = language
    }
  },
  actions: {
    // 添加 app 状态的 actions
    setTheme({ commit }, theme: 'light' | 'dark') {
      commit('setTheme', theme)
    },
    setLanguage({ commit }, language: 'zh-CN' | 'en-US') {
      commit('setLanguage', language)
    }
  }
})

export const key: InjectionKey<Store<AppState>> = Symbol()