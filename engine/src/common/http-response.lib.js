'use strict';

const cors = require('./cors');

function createResponse(code, headers, body) {
    return {
        statusCode: code,
        headers: cors.getHeaders(headers),
        body: JSON.stringify(body),
    }
}

const httpResponse = {
    ok(body, headers) {
        return createResponse(200, headers, body);
    },
    badRequest(body, headers) {
        return createResponse(400, headers, body);
    },
    forbidden(body, headers) {
        return createResponse(401, headers, body);
    },
    internalServerError(body, headers) {
        return createResponse(500, headers, body);
    },
};

module.exports = httpResponse;
