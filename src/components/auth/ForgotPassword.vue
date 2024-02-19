<template>
  <ForgotPasswordForm
    v-if="state === 'forgotPassword'"
    @after-request="state = 'resetPassword'"
  />

  <ResetPasswordForm
    v-if="state === 'resetPassword'"
    @after-reset="state = 'reset'"
  />

  <template v-if="state === 'reset'">
    <v-alert
      color="success"
      class="mb-2"
    >
      Sua senha foi redefinida com sucesso!
    </v-alert>

    <div class="text-center mt-5">
      <RouterLink
        :to="{ name: 'login'}"
        class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
      >
        Login
      </RouterLink>
    </div>
  </template>
</template>

<script setup>
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm.vue';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm.vue';
import {ref} from 'vue';

const state = ref('forgotPassword')
</script>
