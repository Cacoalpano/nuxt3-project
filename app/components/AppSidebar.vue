import { menuItems } from '../utils/menu';
<template>
  <v-navigation-drawer v-model="drawer" app class="" :permanent="true" width="80">
    <v-list density="compact" nav  class="pt-2 pl-0 pr-0">
     <v-list-item class="pa-0 pt-4 pb-4 ma-0" v-for="(item, index) in menuFiltered" :key="index">
      <v-list-item-title class="d-flex justify-center align-center">
        <v-icon class="" size="x-large">{{isDark ? item.icon.dark : item.icon.light }}</v-icon>
      </v-list-item-title>
      <v-list-item-subtitle class="text-center pt-1" style="font-size: 0.675rem;">{{ $t(item.title) }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
const drawer = defineModel<boolean>('drawer', { default: true })
const menuLists = menuItems();

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const { isLoggedIn } = useAuthStore();
const menuFiltered = computed(() => {
  return menuLists.filter(item => item.public || (isLoggedIn && !item.public));
});
</script>

<style></style>