'use strict';

module.exports.handler = function (event, context, callback) {
    console.log('event', JSON.stringify(event, null, 2));
    console.log('context', context);
    callback(null);
};
