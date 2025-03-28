<script setup lang="ts">
import { defineProps } from 'vue'
import { Menu, Bell, ArrowLeft } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

defineProps<{
  title: string
  type: 'default' | 'backOnly'
}>()

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <header class="app-header">
    <div class="app-header__side">
      <button v-if="type === 'default'" class="icon-button">
        <Menu />
      </button>
      <button v-else-if="type === 'backOnly'" class="icon-button" @click="goBack">
        <ArrowLeft />
      </button>
    </div>

    <div class="app-header__title">{{ title }}</div>

    <div class="app-header__side">
      <button v-if="type === 'default'" class="icon-button">
        <Bell />
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgb(225, 226, 223);
  z-index: 1000;
  padding: 0 1rem;
}

.app-header__side {
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app-header__title {
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: black;
  font-size: 16px;
}

.icon-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: black;
}
</style>
