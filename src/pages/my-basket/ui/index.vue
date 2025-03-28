<script setup lang="ts">
import { BasketList, CreateBasket } from '@/features/basket'
import type { BasketItemPresenter } from '@/features/basket/model'
import { PageContainer, BaseModal, useModal } from '@/shared/ui'
import { Plus } from 'lucide-vue-next';

const items = [
  { id: 1, name: '牛乳', category: 'foods', status: '未購入' },
  { id: 2, name: '卵', category: 'foods', status: '未購入' },
  { id: 3, name: 'お米', category: 'foods', status: '未購入' },
  { id: 4, name: '食器用洗剤', category: 'daily', status: '未購入' },
  { id: 5, name: 'トイレットペーパー', category: 'daily', status: '未購入' },
  { id: 6, name: '洗濯洗剤', category: 'daily', status: '未購入' },
  { id: 7, name: '靴下', category: 'clothes', status: '未購入' },
  { id: 8, name: 'ヒートテック', category: 'daily', status: '未購入' },
  { id: 9, name: 'マヨネーズ', category: 'foods', status: '未購入' },
  { id: 10, name: 'ティッシュ', category: 'daily', status: '未購入' },
] as BasketItemPresenter[]

const { isOpen, open, close } = useModal()
</script>

<template>
  <PageContainer>
    <div class="p-header">
      <h1 class="p-header__title">My Basket</h1>
      <button @click="open" class="p-header__btn">
        <Plus class="p-header__btn-icon" />
      </button>
    </div>
    <div class="scrollable-list">
      <BasketList :items="items" />
    </div>
  </PageContainer>
  <BaseModal :isOpen="isOpen" @close="close" title="買い物リスト登録">
    <CreateBasket />
  </BaseModal>
</template>

<style lang="css" scoped>
.p-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.p-header__title {
  font-size: 20px;
  font-weight: bold;
}

.p-header__btn {
  background-color: #ff3e00;
  padding: 5px;
  border-radius: 100%;
}

.p-header__btn:active {
  opacity: 0.8;
}

.p-header__btn-icon {
  width: 24px;
  height: 24px;
  stroke-width: 3px;
  color: #fff;
}

.scrollable-list {
  flex: 1;
  overflow-y: auto;
  scrollbar-width: none;
}

.scrollable-list::-webkit-scrollbar {
  display: none;
}
</style>