<template>
  <v-app-bar class="app-header" :height="60" :fixed="true" :elevation="12">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>
    </template>

    <template v-slot:default>
      <v-app-bar-title>NHSV</v-app-bar-title>
      <v-spacer></v-spacer>
      <div class="d-flex justify-center">
        <span>Test</span>
      </div>
      <v-spacer></v-spacer>
      <v-select
        v-model="currentTheme"
        :items="themes"
        @update:model-value="switchTheme"
        density="compact"
        variant="outlined"
        class="mr-2"
        style="width: 20px;"
      ></v-select>
      <v-btn color="white" variant="text" to="/auth/login">Login</v-btn>
    </template>

  </v-app-bar>
</template>

<script lang="ts" setup>
const emit = defineEmits(['toggle-drawer']);
const { $vuetify } = useNuxtApp();
const themes = ['light', 'dark'];
const currentTheme = ref($vuetify.theme.global.name.value);

const toggleDrawer = () => {
  emit('toggle-drawer');
};

const switchTheme = (theme: string) => {
  $vuetify.theme.global.name.value = theme;
  currentTheme.value = theme;
};

</script>

<style type="scss" scoped></style>