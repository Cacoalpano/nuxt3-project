import mitt from 'mitt';
export const useDialog = () => {
    const emitter = mitt<EventDialog>();
    const emit = (payLoad: PayLoadDialog) => emitter.emit('payLoad', payLoad);
    const on = (method: (payLoad: PayLoadDialog) => void) => emitter.on('payLoad', method);
    const off = () => emitter.off('payLoad');
    return {
        emit,
        on,
        off,
    };
};

type EventDialog = {
    payLoad: PayLoadDialog;
};

export interface PayLoadDialog {
    type: 'info' | 'confirm';
    message: string;
    cancle: string;
    confirm?: string;
    backdrop: boolean;
    onCancle?: () => void;
    onConfirm?: () => void;
}
