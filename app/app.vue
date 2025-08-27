<template>
  <NuxtLoadingIndicator color="#38bdf8" background-color="primary" :height="4" name="circle" > </NuxtLoadingIndicator>
  <NuxtLayout>
    <v-app>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<style lang="scss">
@use "@/assets/scss/styles.scss" as *;
</style>
