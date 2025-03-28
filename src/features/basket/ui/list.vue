<script setup lang="ts">
import { ShoppingCart } from 'lucide-vue-next'
import { categoryIconMap, type BasketItemPresenter } from '../model'

defineProps<{
  items: BasketItemPresenter[]
}>()
</script>

<template>
  <div class="basket-list">
    <ul class="basket-list__ul">
      <li
        class="basket-list__item"
        v-for="item in items"
        :key="item.id"
      >
        <div class="item-title">
          <component :is="categoryIconMap[item.category]" class="item-icon" />
          <span class="item-name">{{ item.name }}</span>
        </div>
        <button class="item-btn"><ShoppingCart /></button>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.basket-list {
  margin-top: 16px;
}

.basket-list__ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.basket-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #c2c1bb;
  border-radius: 4px;
  padding: 8px 15px;
  gap: 16px;
}

.item-title {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.item-icon {
  width: 26px;
  height: 26px;
  stroke-width: 2px;
}

.item-name {
  color: black;
}

.item-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f2f2f2;
  border: none;
  cursor: pointer;
}
</style>