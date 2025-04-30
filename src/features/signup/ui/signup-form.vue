<script setup lang="ts">
import { PasswordInput, PrimaryButton, TextInput } from '@/shared/ui'
import { useInteraction } from '../lib/use-interaction'
import { RouterLink } from 'vue-router'

const { defineField, errors } = useInteraction()

const [name, nameProps] = defineField('name')
const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')
</script>

<template>
  <div class="space-y-4">
    <TextInput
      id="name"
      type="text"
      v-model="name"
      v-bind="nameProps"
      :error-message="errors.name"
      placeholder="山田 太郎"
    >ユーザー名
    </TextInput>
    <TextInput
      id="email"
      type="email"
      v-model="email"
      v-bind="emailProps"
      :error-message="errors.email"
      placeholder="test@example.com"
    >メールアドレス
    </TextInput>
    <PasswordInput
      id="password"
      v-model="password"
      v-bind="passwordProps"
      :error-message="errors.password"
    >パスワード</PasswordInput>
    <div class="flex flex-col space-y-4 mt-5">
      <PrimaryButton size="full">登録</PrimaryButton>
      <p class="text-center text-gray-800">
        すでにアカウントをお持ちですか？<br />
        <RouterLink
          :to="{ name: 'login' }"
          class="text-orange-500"
        >ログインする</RouterLink
        >
      </p>
    </div>
  </div>
</template>
