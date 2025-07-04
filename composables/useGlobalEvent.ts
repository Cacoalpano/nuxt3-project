import mitt from 'mitt';

export const useGlobalEvent = () => {
    const emitter = mitt<any>();
    const emit = emitter.emit;
    const on = emitter.on;
    const off = emitter.off;
    return {
        emit,
        on,
        off,
    };
};
