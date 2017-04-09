'use strict';

function createResponse(code, body) {
    return {
        statusCode: code,
        body: JSON.stringify(body),
    }
}

const httpResponse = {
    ok(body) {
        return createResponse(200, body);
    },
    badRequest(body) {
        return createResponse(400, body);
    },
    forbidden(body) {
        return createResponse(401, body);
    },
    internalServerError(body) {
        return createResponse(500, body);
    },
};

module.exports = httpResponse;
