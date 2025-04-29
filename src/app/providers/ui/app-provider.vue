<script setup lang="ts">
import { InternalServerError } from '@/pages/error'
import VErrorBoundary from 'vue-error-boundary'
</script>

<template>
  <VErrorBoundary :fall-back="InternalServerError">
    <template #boundary>
      <slot></slot>
    </template>
  </VErrorBoundary>
</template>