<template>
  <v-table class="border-opacity-100">
    <thead>
    <tr>
      <th class="text-left">
        Time
      </th>

      <th class="text-left">
        Cargo
      </th>

      <th></th>
    </tr>
    </thead>

    <tbody>
    <tr
      v-for="team in teams"
      :key="team.name"
    >
      <td>
        {{ team.name }}
        <v-chip
          v-if="team.default"
          size="small"
          variant="tonal"
          color="primary"
          class="ml-2"
        >
          Default
        </v-chip>
      </td>

      <td>
        <v-chip
          size="small"
          variant="tonal"
        >
          {{ team.role }}
        </v-chip>
      </td>

      <td class="text-right">
        <v-menu>
          <template #activator="{ props }">
            <v-btn
              flat
              icon
              size="small"
              class="text-muted"
              v-bind="props"
            >
              <DotsVerticalIcon size="20" />
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              @click="toEdit = team"
            >
              <template #prepend>
                <EditIcon stroke-width="1.5" size="20"/>
              </template>

              <v-list-item-title
                class="pl-2 text-body-1"
              >
                Editar
              </v-list-item-title>
            </v-list-item>

            <v-list-item
              @click="toDelete = team"
            >
              <template #prepend>
                <TrashIcon stroke-width="1.5" size="20"/>
              </template>

              <v-list-item-title
                class="pl-2 text-body-1"
              >
                Deletar
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </td>
    </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import {DotsVerticalIcon, EditIcon, TrashIcon} from 'vue-tabler-icons';
import {useTeamsStore} from '@/store/teams';
import {storeToRefs} from 'pinia';

const teamsStore = useTeamsStore()
const {teams, toEdit, toDelete} = storeToRefs(teamsStore)
</script>
