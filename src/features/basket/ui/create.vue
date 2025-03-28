<script setup lang="ts">
import { categoryMap } from '@/entities/basket'
import { PrimaryButton } from '@/shared/ui';

</script>

<template>
  <form>
    <div class="form-item">
      <label class="form-item__label" for="name">商品名</label>
      <input class="form-item__input" type="text" id="name" />
    </div>
    <div class="form-item">
      <label class="form-item__label" for="category">カテゴリー</label>
      <select class="form-item__select" id="category">
        <option value="">選択してください</option>
        <option v-for="(val, key) in categoryMap" :key="key" :value="key">
          {{ val.label }}
        </option>
      </select>
    </div>
    <div class="btn-group">
      <PrimaryButton type="submit" size="full">登録する</PrimaryButton>
      <button class="cancel">キャンセル</button>
    </div>
  </form>
</template>

<style lang="css" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.form-item {
  display: flex;
  flex-direction: column;
}

.form-item__label {
  font-size: 14px;
  margin-bottom: 12px;
  font-weight: bold;
}

.form-item__input {
  border: 1px solid #c2c1bb;
  border-radius: 5px;
  padding: 15px 10px;
}

.form-item__input:focus {
  outline: none;
  border: 1.4px solid #ff3e00;
}

.form-item__select {
  border: 1px solid #c2c1bb;
  border-radius: 5px;
  padding: 15px 10px;
}

.form-item__select:focus {
  outline: none;
  border: 1.4px solid #ff3e00;
}

.btn-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.cancel {
  font-size: 14px;
}
</style>