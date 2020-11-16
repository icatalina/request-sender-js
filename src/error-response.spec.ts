import ErrorResponse, { ErrorResponseType } from './error-response';
import { getErrorResponse, getTimeoutResponse } from './responses.mock';

describe('ErrorResponse', () => {
    it('includes url as part of the error', () => {
        const response = getErrorResponse({ message: 'test' });
        const error = new ErrorResponse('https://google.com', response);

        expect(error.url).toEqual('https://google.com');
    });

    it('includes the response as part of the error', () => {
        const response = getErrorResponse({ message: 'test' });
        const error = new ErrorResponse('https://google.com', response);

        expect(error.response).toEqual(response);
    });

    it('includes the response status as part of the error', () => {
        const response = getErrorResponse({ message: 'test' });
        const error = new ErrorResponse('https://google.com', response);

        expect(error.status).toEqual(response.status);
    });

    it('sets the error type to ErrorResponseType', () => {
        const response = getTimeoutResponse();
        const error = new ErrorResponse('https://google.com', response);

        expect(error.type).toEqual(ErrorResponseType);
    });
});
