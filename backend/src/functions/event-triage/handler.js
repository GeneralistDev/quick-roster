'use strict';

const BbPromise = require('bluebird');
const AWS = require('aws-sdk');

const lambdaInvoker = require('../../common/lambda-invoker.lib').invokeReducersForEvent;

module.exports.handler = BbPromise.coroutine(function* (event, context, callback) {
    console.log('event', JSON.stringify(event, null, 2));
    try {
        const newEvents = yield BbPromise.reduce(event.Records, (accum, record) => {
            const unmarshaled = AWS.DynamoDB.Converter.output({
                M: record.dynamodb.NewImage,
            });

            accum.push(unmarshaled);

            return accum;
        }, []);

        console.log('newEvents', JSON.stringify(newEvents, null, 2));

        BbPromise.map(newEvents, (newEvent) => {
            return lambdaInvoker(newEvent.name, newEvent);
        })
            .then(() => {
                console.log('All reducers invoked');
                callback(null);
            })
            .catch((err) => {
                console.error(err);
                callback(err);
            });
    } catch (e) {
        callback(e);
    }
});
