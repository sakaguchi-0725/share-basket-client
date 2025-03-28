<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
  title?: string
}>()

defineEmits<{
  onClose: []
}>()
</script>

<template>
  <Teleport to="body">
    <div v-if="props.isOpen" class="modal-overlay" @click.self="$emit('onClose')">
      <div class="modal-content">
        <h2 v-if="props.title" class="modal-title">{{ title }}</h2>
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<style lang="css" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px 16px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.modal-title {
  margin-bottom: 26px;
  font-size: 20px;
}
</style>