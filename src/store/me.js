import {defineStore} from 'pinia';
import axios from "axios";

export const useMeStore = defineStore('me', {
  state: () => ({}),

  actions: {
    getMe() {
      return axios.get('api/me')
    }
  },
})
