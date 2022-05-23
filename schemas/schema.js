"use strict";

// Importaçao frameworks
const Joi = require('joi')


const schemaRegistroCriado = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().required(),
    userId: Joi.number().required(),
    id: Joi.number().required()
});

const schemaArrayRegistroCriado = Joi.array().items(schemaRegistroCriado)


module.exports = {

    schemaRegistroCriado,
    schemaArrayRegistroCriado
};