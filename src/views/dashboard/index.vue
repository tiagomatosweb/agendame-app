<script setup>
import {useAuthStore} from '@/store/auth';

const authStore = useAuthStore()
</script>
<template>
  <div>
    Dashboard
    <br><br>
    <pre>{{ authStore.user }}</pre>
    <br>
    Tá logado jovem? {{ authStore.isLoggedIn }}
  </div>
</template>
