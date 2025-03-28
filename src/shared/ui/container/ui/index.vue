<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  bgColor?: 'white' | 'gray'
}>()

const classes = computed(() => {
  return {
    'p-page--white': !props.bgColor || props.bgColor === 'white',
    'p-page--gray': props.bgColor === 'gray',
  }
})
</script>

<template>
  <div class="p-page" :class="classes">
    <slot></slot>
  </div>
</template>

<style scoped>
.p-page {
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  height: 100%;
}

.p-page--white {
  background-color: #ffffff;
}

.p-page--gray {
  background-color: #f2f3f0;
}
</style>
