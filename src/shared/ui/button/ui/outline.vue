<script setup lang="ts">
import BaseButton from './index.vue'

const props = defineProps<{
  type?: 'button' | 'submit'
  size: 'full'
}>()

defineEmits<{
  onClick: []
}>()
</script>

<template>
  <BaseButton
    design="outline"
    :type="props.type"
    :size="props.size"
    @on-click="$emit('onClick')"
  >
    <slot></slot>
  </BaseButton>
</template>