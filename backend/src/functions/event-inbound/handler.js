'use strict';

const BbPromise = require('bluebird');
const Joi = require('joi');
const uuid = require('uuid/v4');
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

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

            const preparedEvent = Object.assign({}, payload, {
                id: uuid(),
                createdTimestamp: new Date(),
            });

            // Save to dynamo
            const params = {
                TableName: process.env['EVENT_STREAM_TABLE'],
                Item: {
                    "id": preparedEvent.id,
                    "name": preparedEvent.name,
                    "data": preparedEvent.data,
                    "createdTimestamp": preparedEvent.createdTimestamp.toISOString(),
                },
            }

            const putResponse = yield dynamodb.put(params).promise();

            console.log('putResponse: ', JSON.stringify(putResponse, null, 2));

            callback(null, httpResponse.ok(preparedEvent));
        } catch (validationException) {
            console.log(validationException);
            callback(null, httpResponse.badRequest(validationException));
        }
    } catch (exception) {
        console.log('exception caught');
        console.log(exception.message);
        console.log(exception.stack);
        callback(httpResponse.internalServerError(exception));
    }
});
