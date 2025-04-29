<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { PrimaryButton, OutlineButton } from '@/shared/ui/button'

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const router = useRouter()

const toLoginPage = () => {
  router.push({ name: 'login' })
}

const toSignUpPage = () => {
  router.push({ name: 'signup' })
}
</script>

<template>
  <header class="w-full relative shadow-md">
    <div class="flex items-center justify-between p-3">
      <h1 class="text-2xl font-bold">Share Basket</h1>
      <button 
        @click="toggleMenu"
        class="p-2 rounded-md hover:bg-gray-100"
        aria-label="メニューを開く"
      >
        <svg 
          class="w-8 h-8 text-gray-600" 
          :class="{ 'hidden': isMenuOpen }" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg 
          class="w-8 h-8 text-gray-600" 
          :class="{ 'hidden': !isMenuOpen }" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    
    <!-- メニュー -->
    <div 
      class="absolute inset-x-0 top-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
      :class="{ 'max-h-0': !isMenuOpen, 'max-h-96': isMenuOpen }"
    >
      <nav class="p-4">
        <div class="space-y-4">
          <PrimaryButton 
            size="full"
            @click="toSignUpPage"
          >
            会員登録
          </PrimaryButton>
          <OutlineButton 
            size="full"
            @click="toLoginPage"
          >
            ログイン
          </OutlineButton>
        </div>
      </nav>
    </div>
  </header>
</template>