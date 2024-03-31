<script setup>
import {useMeStore} from "@/store/me";
import axios from 'axios';

const meStore = useMeStore()

function test() {
  axios.get('api/test')
}
</script>
<template>
  <div>
    Dashboard
    <br><br>
    <pre>{{ meStore.user }}</pre>
    <br>
    Tá logado jovem? {{ meStore.isLoggedIn }} <br>
    <button @click="test">Test</button>
  </div>
</template>
