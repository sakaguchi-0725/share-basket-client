<script setup lang="ts">
defineProps<{
  id: string
  type: 'text' | 'email'
  placeholder?: string
}>()
</script>

<template>
  <div class="flex flex-col">
    <label :for="id" class="text-gray-800 mb-1">
      <slot></slot>
    </label>
    <input
      :id="id"
      :type="type"
      class="border border-gray-400 p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
      :placeholder="placeholder"
    />
  </div>
</template>