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
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">Senha</v-label>
        <v-text-field
          v-model="password"
          :error-messages="errors.password"
          variant="outlined"
          type="password"
          color="primary"/>
      </v-col>
      <v-col cols="12" class="pt-0">
        <div class="d-flex flex-wrap align-center ml-n2">
          <div class="ml-sm-auto">
            <RouterLink to="/"
                        class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Esqueceu sua
              senha?
            </RouterLink>
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="pt-0">
        <v-btn type="submit" :loading="isSubmitting" color="primary" size="large" block flat>Entrar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import {useForm, useField} from 'vee-validate';
import {object, string} from 'yup';
import {useAuthStore} from '@/store/auth';

const schema = object({
  email: string().required().email().label('E-mail'),
  password: string().required().label('Senha')
})

const {handleSubmit, errors, isSubmitting} = useForm({
  validationSchema: schema,
  initialValues: {
    email: 'test@example.com',
    password: 'password'
  }
})

const submit = handleSubmit(async (values) => {
  await login(values)
})

const {value: email} = useField('email')
const {value: password} = useField('password')

const feedbackMessage = ref('')

const authStore = useAuthStore()

const router = useRouter()

function login(values) {
  feedbackMessage.value = ''

  authStore
    .login(values.email, values.password)
    .then(() => {
      router.push({name: 'dashboard'})
    })
    .catch(() => {
      feedbackMessage.value = 'Seu e-mail ou senha estão inválidos.'
    })
}
</script>
