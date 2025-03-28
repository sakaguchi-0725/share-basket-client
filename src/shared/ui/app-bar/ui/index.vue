<script setup lang="ts">
import { useRoute } from 'vue-router'
import { House, ShoppingCart } from 'lucide-vue-next'

const route = useRoute()

const navItem = [
  { label: 'Home', to: '/home', icon: House },
  { label: 'Basket', to: '/basket', icon: ShoppingCart },
]

const isActive = (to: string) => route.path === to
</script>

<template>
  <div class="app-bar">
    <div class="app-bar__content">
      <div
        class="app-bar__nav"
        v-for="(item, index) in navItem"
        :key="index"
      >
        <RouterLink :to="item.to" class="app-bar__link" :class="{ active: isActive(item.to) }">
          <component class="app-bar__nav-icon" :is="item.icon" />
          <span class="app-bar__nav-label">{{ item.label }}</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 74px;
  background-color: white;
  box-shadow: 0 -2.5px 1px rgb(242, 243, 240, 0.8);
  z-index: 1000;
}

.app-bar__content {
  display: flex;
  justify-content: space-around;
  align-items: start;
  padding: 0.4rem 0;
}

.app-bar__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: black;
}

.app-bar__nav-icon {
  width: 30px;
  height: 30px;
  margin-bottom: 4px;
}

.app-bar__nav-label {
  font-size: 10px;
  font-weight: 900;
}

.app-bar__link.active {
  color: #ff3e00;
}
</style>
