"use strict";

 // Importaçao frameworks
 const { faker } = require('@faker-js/faker');


// Dados Faker
var userId_ = faker.random.numeric(1);
var body_ = faker.commerce.productDescription();
var title_ = faker.internet.userName();
var id_ = faker.random.numeric(2);


// Body Criaçao usuario
const novo_registro = {
    title: title_,
    body: body_,
    userId: userId_,
};

module.exports = {
    novo_registro,
    id_,
};