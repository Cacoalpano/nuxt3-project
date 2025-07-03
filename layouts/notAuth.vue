<template>
  <v-app>
    <v-main>
      NotAuth
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