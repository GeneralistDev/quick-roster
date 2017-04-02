'use strict';

const env = require('@a-cloud-guru/kms-secrets').env;

const HelloService = {
    * sayHello() {
        const message = yield env.getEncryptedEnvVar('ENC_MESSAGE');
        console.log(message);
        return message;
    },
};

module.exports = HelloService;
