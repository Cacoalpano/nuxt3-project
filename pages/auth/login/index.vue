<template>
  <div>
  <v-btn round color="primary" dark @click="fetchData">Load Dữ liệu</v-btn> 
  </div>
</template>

<script lang="ts" setup>
const loading = useLoadingIndicator();

const fetchData = async () => {
  loading.start();
  await new Promise(resolve => setTimeout(resolve, 2000));
  loading.finish();
};
</script>

<style></style>