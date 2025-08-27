<template>
  <v-app>
    <app-header></app-header>
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
</script>

<style type="scss"></style>