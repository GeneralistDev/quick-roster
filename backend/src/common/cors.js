'use strict'

const _ = require('lodash');

const getHeaders = (headers) => (_.assign({}, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
    "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
}, headers))

module.exports = {
    getHeaders,
};
