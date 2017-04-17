'use strict';

const utils = require('api-gateway-policy-gen').utils;
const policyGenerator = require('api-gateway-policy-gen').policyGenerator;
const env = require('@a-cloud-guru/kms-secrets').env;

module.exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));

    const authToken = event.authorizationToken;
    const authInfo = utils.getAuthInfo(event.methodArn);

    env.getEncryptedEnvVar('ENC_SECRET')
        .then(function (secret) {
            if (authToken === secret) {
                callback(null, policyGenerator.generatePolicy('user', authInfo, [{
                    allow: true,
                    methods: [{
                        verb: '*',
                        resource: '*',
                    }],
                }]));
            } else {
                callback("Unauthorized");
            }
        })
        .catch(function (error) {
            callback(error);
        });
};
