'use strict';

const BbPromise = require('bluebird');
const AWS = require('aws-sdk');
const uuid = require('uuid/v4');

const docClient = new AWS.DynamoDB.DocumentClient()

module.exports.handler = BbPromise.coroutine(function* (event, context, callback) {
    console.log('event', JSON.stringify(event, null, 2));
    if (!event.name === 'VOTE') {
        return callback('Event was not of type VOTE');
    }

    let recordId = null;

    try {
        const queryParams = {
            TableName: process.env['AGGREGATE_TABLE'],
            KeyConditionExpression: '#eventName = :hkey and eventuid = :rkey',
            ExpressionAttributeNames: {
                '#eventName': 'name',
            },
            ExpressionAttributeValues: {
                ':hkey': 'USER_VOTE_SUM',
                ':rkey': event.data.userId,
            },
        };

        const result = yield docClient.query(queryParams).promise();

        if (result.Count === 1) {
            console.log('found', JSON.stringify(result));
            recordId = result.Items[0].id;
        } else if (result.Count === 0) {
            recordId = uuid();
        } else {
            throw new Error('Count should only be 0 or 1', result);
        }
    } catch (e) {
        callback(e);
    }

    console.log('Finished check for existing element', recordId);

    const params = {
        TableName: process.env['AGGREGATE_TABLE'],
        Key: {
            name: 'USER_VOTE_SUM',
            eventuid: event.data.userId,
        },
        UpdateExpression: `
            SET #sum = if_not_exists(#sum, :zero) ${event.data.upvote ? '+' : '-'} :one,
            #id = :id, 
            #updatedTimestamp = :updatedTimestamp,
            #createdTimestamp = if_not_exists(#createdTimestamp, :updatedTimestamp)`,
        ExpressionAttributeNames: {
            '#sum': 'sum',
            '#createdTimestamp': 'createdTimestamp',
            '#updatedTimestamp': 'updatedTimestamp',
            '#id': 'id',
        },
        ExpressionAttributeValues: {
            ':id': recordId,
            ':updatedTimestamp': new Date().getTime(),
            ':one': 1,
            ':zero': 0,
        },
    };

    try {
        yield docClient.update(params).promise();
        callback(null);
    } catch (e) {
        console.error(e.message);
        console.error(e.stack);
        callback(e);
    }
});
