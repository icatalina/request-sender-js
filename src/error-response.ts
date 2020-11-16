import Response from './response';

export const ErrorResponseType = 'request_error';

export default class ErrorResponse<T> extends Error {
    status?: number;
    type = ErrorResponseType;

    constructor(public url: string, public response: Response<T>) {
        super(response.statusText);

        this.status = response.status;
    }
}
