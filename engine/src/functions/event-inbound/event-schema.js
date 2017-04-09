'use strict';

const Joi = require('joi');

const eventSchema = Joi.object().keys({
    name: Joi.string().regex(/^[A-Z_]+$/).required(),
    data: Joi.object().required(),
});

module.exports = eventSchema;
