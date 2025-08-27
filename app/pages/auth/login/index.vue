<template>
  <div>
    <v-btn round color="primary" dark @click="fetchData">Load Dữ liệu</v-btn>
  </div>
</template>

<script lang="ts" setup>
const coreStore = useCoreStore();
const loading = useLoadingIndicator();

const fetchData = async () => {
  coreStore.openDialog({
    type: 'info',
    message: 'Bạn có chắc chắn muốn tải dữ liệu không?',
    cancle: 'dialog.cancel',
    confirm: 'dialog.confirm',
    backdrop: true,
    onCancle: () => {
      console.log('Hủy tải dữ liệu');
    },
    onConfirm: async () => {
      console.log('Bắt đầu tải dữ liệu');
      loading.start();
      try {
        // Simulate data fetching
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Dữ liệu đã được tải thành công');
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
      } finally {
        loading.finish();
      }
    }
  })
};
</script>

<style></style>