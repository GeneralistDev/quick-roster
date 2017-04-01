'use strict';

const BbPromise = require('bluebird');
const env = require('@a-cloud-guru/kms-secrets').env;

module.exports.handler = BbPromise.coroutine(function* (event, context, cb) {
    const message = yield env.getEncryptedEnvVar('ENC_MESSAGE');
    cb(null, message);
});