<template>
  <v-app>
    <app-header @toggle-drawer="toggleDrawer"></app-header>
    <app-sidebar v-model:drawer="drawer"></app-sidebar>
    <v-main>
      <v-container>
        <slot> </slot>
      </v-container>
    </v-main>
    <app-footer></app-footer>
    <app-dialog></app-dialog>
  </v-app>
</template>

<script lang="ts" setup>
const drawer = ref(true);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};
</script>

<style scoped lang="scss">
</style>