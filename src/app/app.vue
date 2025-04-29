<script setup lang="ts">
import '@/app/assets/css/index.css'
import { AppProvider } from './providers'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const layout = computed(() => {
  return route.meta.layout
})
</script>

<template>
  <AppProvider>
    <component :is="layout">
      <RouterView />
    </component>
  </AppProvider>
</template>
