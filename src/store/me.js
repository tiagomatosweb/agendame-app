import {defineStore} from 'pinia';
import axios from "axios";
import {useStorage} from '@vueuse/core';

export const useMeStore = defineStore('me', {
  state: () => ({
    user: null,
  }),

  actions: {
    getMe() {
      return axios.get('api/me')
        .then((response) => {
          this.user = response.data.data
          this.saveTeamToLocalStorage()
        })
    },

    saveTeamToLocalStorage() {
      useStorage('team_id', this.defaultTeam.token)
    }
  },

  getters: {
    isLoggedIn: (state) => !!state?.user?.id,
    defaultTeam: (state) => state?.user?.teams.find(o => o.default)
  }
})
