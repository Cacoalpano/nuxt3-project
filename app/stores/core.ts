import { defineStore } from 'pinia';
const defaultState: { dialog: { status: boolean; data: PayLoadDialog | null } } = {
    dialog: {
        status: false,
        data: {
            type: 'info',
            message: '',
            cancle: 'Cancel',
            confirm: 'Confirm',
            backdrop: true,
            onCancle: undefined,
            onConfirm: undefined,
        },
    },
};

export const useCoreStore = defineStore('core', {
    state: () => ({ ...defaultState }),
    getters: {
        isDialogOpen: (state) => state.dialog.status,
        getDialogPayload: (state) => state.dialog.data,
    },
    actions: {
        openDialog(data: PayLoadDialog | null) {
            this.dialog = {
                status: true,
                data: data
            };
        },
        closeDialog() {
            this.dialog.status = false;
        },
    },
});
