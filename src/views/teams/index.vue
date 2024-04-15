<template>
  <div>
    <div class="mb-5 pb-5 border-b border-opacity-100">
      <v-row>
        <v-col>
          <h1 class="text-h3">Meus times</h1>
        </v-col>

        <v-col class="text-right">
          <v-dialog width="auto">
            <template #activator="{ props: activatorProps }">
              <v-btn
                flat
                color="primary"
                v-bind="activatorProps">Novo time
              </v-btn>
            </template>

            <template #default="{ isActive }">
              <v-card width="400">
                <v-card-title>Adicionar time</v-card-title>

                <v-card-text>
                  <TeamAddForm
                    @add="isActive.value = false"
                    @cancel="isActive.value = false"
                  />
                </v-card-text>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </div>

    <v-progress-circular
      v-if="isLoading"
      :width="3"
      color="primary"
      indeterminate
    />

    <template v-else>
      <TeamsTable/>

      <v-dialog
        v-model="isEditing"
        width="auto"
      >
        <template #default="{ isActive }">
          <v-card width="400">
            <v-card-title>Editar time</v-card-title>

            <v-card-text>
              <TeamEditForm
                :team="toEdit"
                @cancel="isActive.value = false"
                @edit="isActive.value = false"
              />
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>

      <v-dialog
        v-model="isDeleting"
        width="auto"
      >
        <template #default="{ isActive }">
          <v-card
            :prepend-icon="TrashIcon"
            title="Você tem certeza que deseja deletar este time?"
          >
            <template #actions>
              <v-spacer></v-spacer>

              <v-btn @click="isActive.value = false">
                Cancelar
              </v-btn>

              <v-btn
                @click="deleteTeam(toDelete)"
                variant="tonal"
                color="error"
                :loading="deleting"
              >
                Deletar
              </v-btn>
            </template>
          </v-card>
        </template>
      </v-dialog>
    </template>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import {TrashIcon} from 'vue-tabler-icons'
import {useTeamsStore} from '@/store/teams';
import {useAsyncState} from '@vueuse/core';
import TeamsTable from '@/components/Teams/TeamsTable.vue';
import TeamAddForm from '@/components/Teams/TeamAddForm.vue';
import {storeToRefs} from 'pinia';
import TeamEditForm from '@/components/Teams/TeamEditForm.vue';

const teamsStore = useTeamsStore();
const {toEdit, toDelete} = storeToRefs(teamsStore)

const {isLoading} = useAsyncState(
  teamsStore.getTeams(),
)

const isEditing = computed({
  get() {
    return !!Object.keys(toEdit.value).length
  },
  set(value) {
    if (!value) {
      toEdit.value = {}
    }
  },
})

const isDeleting = computed({
  get() {
    return !!Object.keys(toDelete.value).length
  },
  set(value) {
    if (!value) {
      toDelete.value = {}
    }
  },
})

const deleting = ref(false)
async function deleteTeam(team) {
  deleting.value = true
  await teamsStore.deleteTeam(team.token)
  toDelete.value = {}
  deleting.value = false
}
</script>
