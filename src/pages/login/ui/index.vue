<script setup lang="ts">
import { TextInput, PrimaryButton, PasswordInput } from '@/shared/ui'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-full mt-4">
    <h2 class="text-xl font-bold text-center mb-5">ログイン</h2>
    <div class="space-y-4">
      <TextInput id="email" type="email" placeholder="test@example.com">
        メールアドレス
      </TextInput>
      <PasswordInput id="password">
        パスワード
      </PasswordInput>
      <div class="flex flex-col space-y-4 mt-5">
        <PrimaryButton size="full">ログイン</PrimaryButton>
        <p class="text-center text-gray-800">
          アカウントをお持ちではないですか？<br />
          <RouterLink
            :to="{ name: 'signup' }"
            class="text-orange-500"
          >会員登録する</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>