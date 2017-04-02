'use strict';

const BbPromise = require('bluebird');

const HelloService = require('../../common/hello.service');

module.exports.handler = BbPromise.coroutine(function* (event, context, cb) {
    const message = yield* HelloService.sayHello();

    const response = {
        statusCode: 200,
        body: message,
    };

    cb(null, response);
});