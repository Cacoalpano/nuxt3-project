export class Response<T> {
    status: number;
    message: string;
    result: T | null;

    constructor(status: number, message: string, result?: T | null) {
        this.status = status;
        this.message = message;
        this.result = result ?? null;
    }
}
