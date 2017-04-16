'use strict';

const BbPromise = require('bluebird');
const AWS = require('aws-sdk');

const reducerRegistry = require('../functions/reducers/registry');

const lambda = new AWS.Lambda();

const servicePrefix = `gamification-engine-${process.env.SERVICE_STAGE}`;

const invokeLambda = (lambdaName, event, opts) => {
    const fullLambdaName = `${servicePrefix}-${lambdaName}`;

    const options = Object.assign({
        rawResult: false,
        async: false,
    }, opts)

    const params = {
        FunctionName: fullLambdaName,
        InvocationType: options.async ? 'Event' : 'RequestResponse',
        Payload: JSON.stringify(event),
    };

    console.log(JSON.stringify(event, null, 2));

    return new BbPromise((resolve, reject) => {
        lambda.invoke(params, (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            console.log('Received result: ', result);

            if (result.FunctionError) {
                reject(new Error(`Error on ${fullLambdaName}`));
                return;
            }

            if (options.rawResult) {
                resolve(result);
            } else {
                const data = JSON.parse(result.Payload);
                resolve(data);
            }
        });
    });
}

const invokeReducersForEvent = (eventName, event) => {
    const reducers = reducerRegistry.getReducersForEvent(eventName);

    const options = {
        async: true,
        rawResult: true,
    };

    if (!Array.isArray(reducers)) {
        throw new Error('There are no reducers for this event');
    }

    return BbPromise.map(reducers, (reducerLambda) => {
        return invokeLambda(reducerLambda, event, options)
            .then(result => {
                console.log('Reducer invoked successfully');
                console.log(JSON.stringify(result, null, 2));
                return result;
            })
            .catch(error => {
                console.error(JSON.stringify(error, null, 2));
            });
    });
}

module.exports = {
    invokeLambda,
    invokeReducersForEvent,
};
