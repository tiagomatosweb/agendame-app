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
        text="Editar"
      />
    </div>
  </v-form>
</template>

<script setup>
import {useField, useForm} from 'vee-validate';
import {object, string} from 'yup';
import {ref} from 'vue';
import {useTeamsStore} from '@/store/teams';

const emit = defineEmits(['cancel', 'edit'])
const props = defineProps({
  team: {
    type: Object,
    required: true
  }
})

const teamsStore = useTeamsStore()

const schema = object({
  name: string().required().label('Nome'),
})

const { handleSubmit, errors, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    name: props.team.name
  }
})

const submit = handleSubmit(async (payload) => {
  await teamsStore.updateTeam(props.team.token, payload)
  emit('edit')
})

const feedbackMessage = ref('')
const {value: name} = useField('name')
</script>
