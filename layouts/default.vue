<template>
  <v-app>
    <v-main>
      <slot> </slot>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});

</script>

<style type="scss"></style>