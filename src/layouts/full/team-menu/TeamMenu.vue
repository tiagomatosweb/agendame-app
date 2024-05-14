<template>
  <div class="text-center">
    <v-btn color="primary" variant="outlined">
      {{ meStore.currentTeam?.name }} <SelectorIcon size="20" stroke-width="1.5" class="ml-2"/>

      <v-menu activator="parent">
        <v-card min-width="250">
          <v-list>
            <v-list-item
              v-for="team in meStore.user.teams"
              :key="team.token"
              @click="changeTeam(team)"
            >
              <v-list-item-title>{{ team.name }}</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-divider class="border-opacity-100" />

          <v-list>
            <v-list-item>
              <v-btn
                :to="{ name: 'teams' }"
                variant="outlined"
                color="primary"
                block
              >Gerenciar times</v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-btn>
  </div>
</template>

<script setup>
import {SelectorIcon} from 'vue-tabler-icons';
import {useMeStore} from '@/store/me';

const meStore = useMeStore()

function changeTeam(team) {
  meStore.changeTeam(team.token)
}
</script>
