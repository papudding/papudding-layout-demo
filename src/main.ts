import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue'
import router from './router'

import './variables.css'
import 'papudding-layout/dist/style.css'
import { store as layoutStore } from './store/papuddingLayout.ts'
import { key as layoutKey } from 'papudding-layout'
import { store as appStore, key as appKey } from './store/index.ts'
import { useDark } from '@vueuse/core'

useDark()

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(layoutStore, layoutKey)
app.use(appStore, appKey)
app.use(ElementPlus, { locale: zhCn })
app.mount('#app')