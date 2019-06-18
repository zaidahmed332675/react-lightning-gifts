// NPM Dependencies
import get from 'lodash/get';

class ApiError extends Error {
    constructor(error) {
        super(error);
        const { response, config } = error;

        this.code =
            get(response, 'data.error.code',
                get(response, 'data.status',
                    get(response, 'status', 0)));
        this.message =
            get(response, 'data.error.message',
                get(response, 'data.message',
                    get(response, 'message', 0)));
        this.endpoint = get(config, 'url');
        this.config = error.config;
    }
}

export default ApiError;
