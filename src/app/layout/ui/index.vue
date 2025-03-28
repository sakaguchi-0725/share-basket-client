<script setup lang="ts">
import { AppHeader, AppBar } from '@/shared/ui'
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import type { CustomRouteMeta } from '../model';

const route = useRoute()
const meta = computed(() => route.meta as CustomRouteMeta)

const title = computed(() => meta.value.title ?? '')
const type = computed(() => meta.value.type ?? 'default')
</script>

<template>
  <AppHeader :title="title" :type="type" />
  <div class="container">
    <slot></slot>
  </div>
  <AppBar />
</template>

<style lang="css" scoped>
.container {
  position: fixed;
  top: 4rem;
  bottom: 4rem;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>