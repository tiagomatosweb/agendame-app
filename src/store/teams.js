import {defineStore} from 'pinia';
import axios from 'axios';

export const useTeamsStore = defineStore('teams', {
  state: () => ({
    teams: []
  }),

  actions: {
    async getTeams() {
      this.teams = await axios.get('api/teams').then(r => r.data.data)
    }
  }
})
