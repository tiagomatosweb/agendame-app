<script setup>
import axios from 'axios'
import {ref} from 'vue';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const email = ref('');
const password = ref('');

const rules = {
  required: value => !!value || 'Required.',
    email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
  },
}

function login() {
  axios.get('http://localhost:8000/sanctum/csrf-cookie')
    .then(() => {
      axios.post('http://localhost:8000/api/login', {
        email: email.value,
        password: password.value
      })
    })
}
</script>

<template>
  <v-row class="d-flex mb-3">
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">E-mail</v-label>
      <v-text-field v-model="email" :rules="[rules.required, rules.email]" variant="outlined" color="primary"></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-label class="font-weight-bold mb-1">Senha</v-label>
      <v-text-field v-model="password" :rules="[rules.required]" variant="outlined" type="password" color="primary"></v-text-field>
    </v-col>
    <v-col cols="12" class="pt-0">
      <div class="d-flex flex-wrap align-center ml-n2">
        <div class="ml-sm-auto">
          <RouterLink to="/"
                      class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Esqueceu sua senha?
          </RouterLink>
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="pt-0">
      <v-btn @click="login()" color="primary" size="large" block flat>Entrar</v-btn>
    </v-col>
  </v-row>
</template>
