<template>
  <div>
    <h1>Hello World</h1>
    <p>当前主题: {{ isDark }}</p>
    <el-button @click="toggleDark(!isDark)">切换主题</el-button>
    <p>当前语言: {{ appState.language }}</p>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store/index.ts'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
onMounted(() => {
  console.log(store)
  console.log(key)
})
const store = useStore(key)
const appState = computed(() => store.state.app)

</script>
<style scoped>
h1 {
  color: red;
}   
</style>