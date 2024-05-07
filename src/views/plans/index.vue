<template>
  <v-container>
    <h2 class="text-h2 text-center pt-10">Planos flexíveis</h2>

    <div
      v-if="isLoading"
      class="pa-5 text-center"
    >
      <v-progress-circular
        indeterminate
        color="primary"
      />
    </div>

    <template v-else>
      <v-row justify="center" class="mt-1 mb-sm-10 mb-5">
        <v-col cols="auto">
          <div class="d-flex items-center justify-center">
            <v-label class="text-subtitle-1 ma-none">Mensal</v-label>
            <v-switch
              v-model="frequency"
              color="primary"
              true-value="yearly"
              false-value="monthly"
              class="mx-4"
              hide-details
            />
            <v-label class="text-subtitle-1">Anual</v-label>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="plan in plans"
          :key="plan.id"
          cols="6"
        >
          <v-card elevation="10" border class="pa-sm-8 pa-4">
            <div class="d-flex justify-space-between">
              <h4 class="text-body-2 text-medium-emphasis text-uppercase">{{ plan.name }}</h4>
            </div>

            <div class="d-flex align-center mt-4">
              <h2
                v-if="plan.name === 'Freemium'"
                class="display-3">
                Gratuito para sempre! :)
              </h2>

              <template v-else>
                <sup class="text-h6 mt-n3 pr-2">R$</sup>
                <h2 class="display-1">{{isMonthly ? plan.price_monthly : plan.price_yearly}}</h2>
                <span class="text-medium-emphasis font-weight-medium mt-4 ml-2">
                  {{isMonthly ? '/mês' : '/ano'}}
                  </span>
              </template>
            </div>

            <div class="description pt-5 pb-2">
              {{ plan.description }}
            </div>

            <v-btn block flat color="primary" size="large">Selecione</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script setup>
import {useAsyncState} from '@vueuse/core';
import axios from 'axios';
import {computed, ref} from 'vue';

const {isLoading, state: plans} = useAsyncState(
  axios.get('api/plans').then(r => r.data.data)
)

const frequency = ref('monthly')
const isMonthly = computed(() => frequency.value === 'monthly')
</script>

<style scoped>
.description {
  font-size: 14px;
}

.description ul {
  list-style: none;
  font-weight: 500;
}
</style>
