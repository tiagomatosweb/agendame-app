<template>
  <v-alert v-if="feedbackMessage" color="error" class="mb-2">{{ feedbackMessage }}</v-alert>

  <v-form @submit.prevent="submit">
    <v-row class="d-flex mb-3">
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">E-mail</v-label>
        <v-text-field
          v-model="email"
          :error-messages="errors.email"
          variant="outlined"
          color="primary"/>
      </v-col>
      <v-col cols="12" class="pt-0">
        <v-btn type="submit" :loading="isSubmitting" color="primary" size="large" block flat>Recuperar senha</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import {useField, useForm} from 'vee-validate';
import {object, string} from 'yup';
import {ref} from 'vue';
import {useAuthStore} from '@/store/auth';

const emits = defineEmits(['after-request'])
const feedbackMessage = ref(null)
const authStore = useAuthStore()
const schema = object({
  email: string().required().email().label('E-mail')
})

const {handleSubmit, isSubmitting, errors} = useForm({
  validationSchema: schema,
  initialValues: {
    email: ''
  }
})

const submit = handleSubmit(async (values) => {
  feedbackMessage.value = null
  await authStore.forgotPassword(values.email)
    .then(() => {
      emits('after-request')
    })
    .catch((e) => {
      feedbackMessage.value = e.message
    })
})

const {value: email} = useField('email')
</script>
