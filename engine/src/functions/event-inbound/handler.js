'use strict';

const BbPromise = require('bluebird');
const Joi = require('joi');
const uuid = require('uuid/v4');
const AWS = require('aws-sdk');
AWS.config.setPromisesDependency(BbPromise);
const dynamodb = new AWS.DynamoDB();

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
            id: uuid(),
            createdTimestamp: new Date().getTime(),
        });

        // Save to dynamo
        const params = {
            Item: {
                "id": {
                    S: preparedEvent.id,
                },
                "name": {
                    S: preparedEvent.name,
                },
                "data": {
                    S: JSON.stringify(preparedEvent.data),
                },
                "createdTimestamp": {
                    N: preparedEvent.createdTimestamp.toString(),
                },
            },
            ReturnConsumedCapacity: "TOTAL",
            TableName: process.env['EVENT_STREAM_TABLE'],
        }

        const putResponse = yield dynamodb.putItem(params).promise();

        console.log('putResponse: ', JSON.stringify(putResponse, null, 2));

        callback(null, httpResponse.ok(preparedEvent));
    } catch (exception) {
        console.log('exception caught');
        console.log(exception.message);
        console.log(exception.stack);
        callback(httpResponse.internalServerError(exception));
    }
});
