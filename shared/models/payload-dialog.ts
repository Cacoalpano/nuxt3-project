export interface PayloadDialog {
    type: 'info' | 'confirm';
    message: string;
    cancel: string;
    confirm?: string;
    backdrop: boolean;
    onCancel?: () => void;
    onConfirm?: () => void;
}