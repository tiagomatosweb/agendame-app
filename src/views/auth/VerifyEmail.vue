<script setup>
import Logo from '@/layouts/full/logo/Logo.vue';
import LoginForm from '@/components/auth/LoginForm.vue';
</script>

<template>
    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center py-4">
                                <Logo />
                            </div>

                          <v-alert
                            color="error"
                            class="mb-2">
                            Error
                          </v-alert>

                          <v-alert
                            color="success"
                            class="mb-2">
                            Success
                          </v-alert>

                          <div class="text-center">
                            <v-progress-circular
                              indeterminate
                              color="primary"
                            ></v-progress-circular>
                          </div>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
