<script setup lang="ts">
import BaseButton from './base-button.vue'
import type { ButtonSize } from '../model'

defineProps<{
  size?: ButtonSize
  disabled?: boolean
}>()

defineEmits<{
  onClick: []
}>()
</script>

<template>
  <BaseButton
    :size="size"
    variant="primary"
    :disabled="disabled"
    v-bind="$attrs"
    @on-click="$emit('onClick')"
  >
    <slot></slot>
  </BaseButton>
</template>
