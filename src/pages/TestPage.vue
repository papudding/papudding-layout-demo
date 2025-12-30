<template>
  <div>
    <h1>Hello World</h1>
    <p>当前主题: {{ appState.theme }}</p>
    <button @click="setTheme('dark')">切换为暗黑主题</button>
    <button @click="setTheme('light')">切换为亮色主题</button>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/index.ts'

onMounted(() => {
  console.log(store)
  console.log(key)
})
const store = useStore(key)
const appState = computed(() => store.state.app)
const setTheme = (theme: 'light' | 'dark') => {
  store.commit('setTheme', theme)
}
</script>
<style scoped>
h1 {
  color: red;
}   
</style>