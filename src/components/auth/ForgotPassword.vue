<template>
  <ForgotPasswordForm
    v-if="state === 'forgotPassword'"
    @after-request="state = 'resetPassword'"
  />

  <ResetPasswordForm
    v-if="state === 'resetPassword'"
    @after-reset="state = 'reset'"
  />

  <v-alert
    v-if="state === 'reset'"
    color="success"
    class="mb-2"
  >
    Sua senha foi redefinida com sucesso!
  </v-alert>
</template>

<script setup>
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm.vue';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm.vue';
import {ref} from 'vue';

const state = ref('forgotPassword')
</script>
