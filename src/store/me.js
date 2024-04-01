import {defineStore} from 'pinia';
import axios from "axios";
import {useStorage} from '@vueuse/core';

export const useMeStore = defineStore('me', {
  state: () => ({
    user: null,
    currentTeamToken: useStorage('team_id', ''),
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
      this.currentTeamToken = this.defaultTeam.token
    }
  },

  getters: {
    isLoggedIn: (state) => !!state?.user?.id,
    defaultTeam: (state) => state?.user?.teams.find(o => o.default),
    currentTeam: (state) => state?.user?.teams.find(o => o.token === state.currentTeamToken)
  }
})
