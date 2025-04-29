<script setup lang="ts">
import { TextInput, PrimaryButton, PasswordInput } from '@/shared/ui'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-full mt-4">
    <h2 class="text-xl font-bold text-center mb-5">会員登録</h2>
    <div class="space-y-4">
      <TextInput id="name" type="text" placeholder="山田 太郎">
        ユーザー名
      </TextInput>
      <TextInput id="email" type="email" placeholder="test@example.com">
        メールアドレス
      </TextInput>
      <PasswordInput id="password">
        パスワード
      </PasswordInput>
      <div class="flex flex-col space-y-4 mt-5">
        <PrimaryButton size="full">登録</PrimaryButton>
        <p class="text-center text-gray-800">
          すでにアカウントをお持ちですか？<br />
          <RouterLink
            :to="{ name: 'login' }"
            class="text-orange-500"
          >ログインする</RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>