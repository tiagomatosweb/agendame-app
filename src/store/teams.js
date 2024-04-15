import {defineStore} from 'pinia';
import axios from 'axios';

export const useTeamsStore = defineStore('teams', {
  state: () => ({
    teams: [],
    toEdit: {}
  }),

  actions: {
    async getTeams() {
      this.teams = await axios.get('api/teams')
        .then(r => r.data.data)
    },

    async storeTeam(payload) {
      const team = await axios.post('api/teams', payload)
        .then(r => r.data.data)
      this.teams.push(team)
    }
  }
})
