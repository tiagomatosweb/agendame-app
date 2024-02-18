<template>
  <ForgotPasswordForm
    v-if="state === 'forgotPassword'"
  />

  <ResetPasswordForm
    v-if="state === 'resetPassword'"
  />

  <v-alert
    v-if="state === 'reset'"
    color="success"
    class="mb-2"
  >
    Sucesso
  </v-alert>
</template>

<script setup>
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm.vue';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm.vue';
import {ref} from 'vue';

const state = ref('forgotPassword')
</script>
