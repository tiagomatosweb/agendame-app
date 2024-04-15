import {defineStore} from 'pinia';
import axios from 'axios';

export const useTeamsStore = defineStore('teams', {
  state: () => ({
    teams: [],
    toEdit: {},
    toDelete: {},
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
    },

    async updateTeam(teamToken, payload) {
      const team = await axios.put(`api/teams/${teamToken}`, payload)
        .then(r => r.data.data)

      const idx = this.teams.findIndex(o => o.token === teamToken)
      this.teams.splice(idx, 1, team)
    },

    async deleteTeam(teamToken) {
      await axios.delete(`api/teams/${teamToken}`)
        .then(r => r.data.data)

      const idx = this.teams.findIndex(o => o.token === teamToken)
      this.teams.splice(idx, 1)
    }
  }
})
