<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'BaseButton' })

const props = defineProps<{
  type?: 'button' | 'submit'
  design: 'primary' | 'outline'
  size: 'full'
}>()

defineEmits<{
  onClick: []
}>()

const classes = computed(() => ({
  'btn': true,
  [`btn--${props.design}`]: true,
  [`btn--${props.size}`]: true,
}))

const type = computed(() => props.type ?? 'button')
</script>

<template>
  <button :type="type" @click="$emit('onClick')" :class="classes">
    <slot></slot>
  </button>
</template>

<style lang="css" scoped>
.btn {
  padding: 12px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
}

.btn--full {
  width: 100%;
}

.btn--primary {
  background-color: #ff3e00;
  color: white;
}

.btn--outline {
  border: 1px solid #ff3e00;
  color: #ff3e00;
}
</style>