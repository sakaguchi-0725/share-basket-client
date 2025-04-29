<script setup lang="ts">
import { EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'
import { computed, ref } from 'vue'

defineProps<{
  id: string
  placeholder?: string
}>()

const isShow = ref(false)
const toggleShow = () => isShow.value = !isShow.value

const icon = computed(() => isShow.value ? EyeIcon : EyeSlashIcon)
</script>

<template>
  <div class="flex flex-col">
    <label :for="id" class="text-gray-800 mb-1">
      <slot></slot>
    </label>
    <div class="relative">
      <input
        :id="id"
        :type="isShow ? 'text' : 'password'"
        class="border border-gray-400 p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full"
        :placeholder="placeholder"
      />
      <button @click="toggleShow" class="absolute inset-y-0 end-0 flex items-center px-3 cursor-pointer text-gray-400 focus:text-orange-500">
        <component :is="icon" class="size-6" />
      </button>
    </div>
  </div>
</template>
