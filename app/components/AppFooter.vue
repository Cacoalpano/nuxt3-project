<template>
  <v-footer fixed class="app-footer" :elevation="12">
    <v-col class="text-center position-relative pa-0">
      <span class="position-absolute left-0">
        {{ date }}
      </span>
      <span>Giá x 1,000 VNĐ. Khối lượng x 10. Giá trị x 1,000,000 VNĐ.</span>
    </v-col>
  </v-footer>
</template>

<script lang="ts" setup>
const date = ref<String>();  

onMounted(() => {
  setInterval(() => {
    const now = new Date();
    date.value = now.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  }, 1000);
});
</script>

<style type="scss" scoped>
.app-footer {
  z-index: 1200 !important;
}
</style>