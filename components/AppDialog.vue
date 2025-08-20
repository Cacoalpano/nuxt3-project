<template>
  <v-dialog v-model="dialog" max-width="500px" :persistent="persistent" @keydown.enter="enter">
    <v-card>
      <v-card-title class="text-h5 flex justify-center">{{ title }}</v-card-title>
      <v-card-text>
        <p>
          {{ message }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="secondary" @click="close()">{{ cancleText }}</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="confirm()">{{ confirmText }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const coreStore = useCoreStore();
const title = computed(() => {
  return coreStore.dialog.data?.type === 'info' ? t('dialog.info') : t('dialog.confirm');
});

const message = computed(() => {
  return coreStore.dialog.data?.message || '';
});

const persistent = computed(() => {
  return coreStore.dialog.data?.backdrop || false;
});

const cancleText = computed(() => {
  return coreStore.dialog.data?.cancle ? t(coreStore.dialog.data?.cancle) : t('dialog.cancel');
});

const confirmText = computed(() => {
  return coreStore.dialog.data?.confirm ? t(coreStore.dialog.data?.confirm) : t('dialog.confirm');
});

const dialog = computed( () => {
  return coreStore.dialog.status || false;
})

const close = () => {
  if (coreStore.dialog.data?.onCancle) {
    coreStore.dialog.data.onCancle(); 
  }
  coreStore.closeDialog();
}

const confirm = () => {
  if (coreStore.dialog.data?.onConfirm) {
    coreStore.dialog.data?.onConfirm();
  }
  coreStore.closeDialog();
}

const enter = () => {
  coreStore.dialog.data?.onConfirm ? confirm() : close();
}


</script>

<style></style>