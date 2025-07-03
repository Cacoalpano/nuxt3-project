<template>
  <v-app>
    <v-main>
      Login
      <slot> </slot>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'default',
});
</script>

<style type="scss"></style>