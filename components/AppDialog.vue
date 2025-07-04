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
const dialog = ref(false);
const persistent = ref(false);
const { t } = useI18n();

let title = t('dialog.title');
let message = '';
let cancleText = t('dialog.cancel');
let confirmText = t('dialog.confirm');

let cancleCallback: (() => void) | null = null;
let confirmCallback: (() => void) | null = null;

const payLoad = ref<PayLoadDialog | null>(null);

const init = (payload: PayLoadDialog) => {
  dialog.value = true;
  payLoad.value = payload;
  title = payload.title || t('dialog.title');
  persistent.value = payload.backdrop || false;
  message = payload.message || '';
  cancleText = payload.cancle || t('dialog.cancel');
  confirmText = payload.confirm || t('dialog.confirm');
  cancleCallback = payload.onCancle || null;
  confirmCallback = payload.onConfirm || null;
  dialog.value = true;
}

const removeAllCallbacks = () => {
  cancleCallback = null;
  confirmCallback = null;
}

onMounted(() => {
  useDialog().on(init);
});

onBeforeUnmount(() => {
  useDialog().off();
});

const close = () => {
  if (cancleCallback) {
    cancleCallback();
  }
  dialog.value = false;
  removeAllCallbacks();
}

const confirm = () => {
  if (confirmCallback) {
    confirmCallback();
  }
  dialog.value = false;
  removeAllCallbacks();
}

const enter = () => {
  if (confirmCallback) {
    confirm();
  } else {
    close();
  }
}


</script>

<style></style>