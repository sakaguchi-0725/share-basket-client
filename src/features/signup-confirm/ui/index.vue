<script setup lang="ts">
import { ErrorBind, PrimaryButton, TextInput } from '@/shared/ui'
import { useInteraction } from '../lib/use-interaction'

const { email, defineField, errors, errorMessage, onSubmit } = useInteraction()

const [confirmationCode, confirmationCodeProps] = defineField('confirmationCode')
</script>

<template>
  <div class="space-y-4">
    <div class="flex flex-col">
      <label class="text-gray-800 mb-1">
        メールアドレス
      </label>
      <p class="p-2">{{ email }}</p>
    </div>
    <TextInput
      id="confirmationCode"
      type="text"
      v-model="confirmationCode"
      v-bind="confirmationCodeProps"
      :error-message="errors.confirmationCode"
    >確認コード
    </TextInput>

    <ErrorBind v-if="errorMessage">
      {{ errorMessage }}
    </ErrorBind>

    <div class="flex flex-col space-y-4 mt-5">
      <PrimaryButton size="full" @on-click="onSubmit">登録</PrimaryButton>
      <!-- TODO: 確認コード再送機能を追加する -->
    </div>
  </div>
</template>