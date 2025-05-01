<script setup lang="ts">
import { ErrorBind, PasswordInput, PrimaryButton, TextInput } from '@/shared/ui'
import { useInteraction } from '../lib/use-interaction'
import { RouterLink } from 'vue-router'

const { defineField, errors, errorMessage, onSubmit } = useInteraction()

const [email, emailProps] = defineField('email')
const [password, passwordProps] = defineField('password')
</script>

<template>
  <div class="space-y-4">
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

    <ErrorBind v-if="errorMessage">
      {{ errorMessage }}
    </ErrorBind>

    <div class="flex flex-col space-y-4 mt-5">
      <PrimaryButton size="full" @on-click="onSubmit">ログイン</PrimaryButton>
      <p class="text-center text-gray-800">
        アカウントをお持ちではないですか？<br />
        <RouterLink
          :to="{ name: 'signup' }"
          class="text-orange-500"
        >会員登録する</RouterLink>
      </p>
    </div>
  </div>
</template>
