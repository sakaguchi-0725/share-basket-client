<script setup lang="ts">
import BaseButton from './base-button.vue'
import type { ButtonSize } from '../model'

defineProps<{
  size?: ButtonSize
  disabled?: boolean
}>()
</script>

<template>
  <BaseButton
    :size="size"
    variant="primary"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot></slot>
  </BaseButton>
</template>
