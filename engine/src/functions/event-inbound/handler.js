'use strict';

const BbPromise = require('bluebird');
const Joi = require('joi');
const validateAsync = BbPromise.promisify(Joi.validate);

const httpResponse = require('../../common/http-response.lib');
const EventSchema = require('./event-schema');

module.exports.handler = BbPromise.coroutine(function* (event, context, callback) {
    console.log(event);
    const payload = JSON.parse(event.body);
    console.log('Received event: ', JSON.stringify(payload, null, 2));

    // Validate the event
    try {
        try {
            yield validateAsync(payload, EventSchema);
        } catch (validationException) {
            console.log(validationException);
            callback(null, httpResponse.badRequest(validationException));
        }

        const preparedEvent = Object.assign({}, payload, {
            createdTimestamp: new Date().getTime(),
        });

        // Save to dynamo

        callback(null, httpResponse.ok(preparedEvent));
    } catch (exception) {
        console.log('exception caught');
        console.log(exception.message);
        console.log(exception.stack);
        callback(httpResponse.internalServerError(exception));
    }
});
