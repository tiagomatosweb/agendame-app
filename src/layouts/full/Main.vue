<script setup lang="ts">
import {ref, shallowRef} from 'vue';
import sidebarItems from './vertical-sidebar/sidebarItem';
import NavGroup from './vertical-sidebar/NavGroup/index.vue';
import NavItem from './vertical-sidebar/NavItem/index.vue';
import ExtraBox from './vertical-sidebar/extrabox/ExtraBox.vue';
import Logo from './logo/Logo.vue';
// Icon Imports
import {Menu2Icon, BellRingingIcon, SelectorIcon} from 'vue-tabler-icons';
// import NotificationDD from './vertical-header/NotificationDD.vue';
import ProfileDD from './vertical-header/ProfileDD.vue';
import TeamMenu from '@/layouts/full/team-menu/TeamMenu.vue';

const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);
</script>

<template>
  <!------Sidebar-------->
  <v-navigation-drawer left elevation="0" app class="leftSidebar" v-model="sDrawer">
    <!---Logo part -->
    <div class="pa-5">
      <Logo/>
    </div>

    <TeamMenu />

<!--    <div class="text-center">-->
<!--      <v-btn color="primary" variant="outlined">-->
<!--        Time atual <SelectorIcon size="20" stroke-width="1.5" class="ml-2"/>-->

<!--        <v-menu activator="parent">-->
<!--          <v-card min-width="250">-->
<!--            <v-list>-->
<!--              <v-list-item>-->
<!--                <v-list-item-title>Team 1</v-list-item-title>-->
<!--              </v-list-item>-->
<!--              <v-list-item>-->
<!--                <v-list-item-title>Team 2</v-list-item-title>-->
<!--              </v-list-item>-->
<!--            </v-list>-->

<!--            <v-divider class="border-opacity-100" />-->

<!--            <v-list>-->
<!--              <v-list-item>-->
<!--                <v-btn variant="flat" color="primary" block="">Novo time</v-btn>-->
<!--              </v-list-item>-->
<!--            </v-list>-->
<!--          </v-card>-->
<!--        </v-menu>-->
<!--      </v-btn>-->
<!--    </div>-->

    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div>
      <v-list class="pa-6">
        <!---Menu Loop -->
        <template v-for="(item, i) in sidebarMenu">
          <!---Item Sub Header -->
          <NavGroup :item="item" v-if="item.header" :key="item.title"/>

          <!---Single Item-->
          <NavItem :item="item" v-else class="leftPadding"/>
          <!---End Single Item-->
        </template>
      </v-list>
      <div class="pa-4">
        <ExtraBox/>
      </div>
    </div>

  </v-navigation-drawer>
  <!------Header-------->
  <v-app-bar elevation="0" height="70">
    <div class="d-flex align-center justify-space-between w-100">
      <div>
        <v-btn class="hidden-lg-and-up ms-md-3 ms-sm-5 ms-3 text-muted" @click="sDrawer = !sDrawer" icon variant="flat"
               size="small">
          <Menu2Icon size="20" stroke-width="1.5"/>
        </v-btn>
        <!-- Notification -->
<!--        <NotificationDD/>-->
      </div>
      <div>
        <ProfileDD/>
      </div>
    </div>
  </v-app-bar>
</template>
