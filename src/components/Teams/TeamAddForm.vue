<template>
  <v-alert
    v-if="feedbackMessage"
    color="error"
    class="mb-2">
    {{ feedbackMessage }}
  </v-alert>

  <v-form @submit.prevent="submit">
    <v-text-field
      v-model="name"
      :error-messages="errors.name"
      label="Nome"
      variant="outlined"
      color="primary"
    />

    <div class="text-right">
      <v-btn
        flat
        text="Cancelar"
        @click="emit('cancel')"
      />

      <v-btn
        type="submit"
        color="primary"
        flat
        :loading="isSubmitting"
        text="Adicionar"
      />
    </div>
  </v-form>
</template>

<script setup>
import {useField, useForm} from 'vee-validate';
import {object, string} from 'yup';
import {ref} from 'vue';
import {useTeamsStore} from '@/store/teams';

const teamsStore = useTeamsStore()

const emit = defineEmits(['cancel', 'add'])

const schema = object({
  name: string().required().label('Nome'),
})

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    name: ''
  }
})

const submit = handleSubmit(async (payload) => {
  await teamsStore.storeTeam(payload)
  emit('add')
})

const feedbackMessage = ref('')
const {value: name} = useField('name')
</script>
