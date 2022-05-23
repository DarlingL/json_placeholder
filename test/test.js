"use strict";

// Importaçao frameworks
var request = require("supertest");
var expect = require("chai").expect;
var Joi = require("joi");


// Payloads e Variaveis
var id_user = "";
const {
    id_,
    novo_registro,
} = require("../data/data");


// Schemas
const {
    schemaRegistroCriado,
    schemaArrayRegistroCriado
} = require("../schemas/schema");


// Config
const request_timeout = 1000;
const URL = process.env.NODE_ENV;


// Paths
const PATH_POST = "/posts"
const PATH_POST_ID = `/posts?id=${id_}`
const PATH_POST_USERID = "/posts?userId="


describe("Cenários de Testes - Json Placeholder", function() {
    it("Criar Novo Registro", function(done) {
      this.timeout(request_timeout);
      request(URL)
      .post(PATH_POST)
      .send(novo_registro)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        expect(res.status).to.be.eql(201);
        Joi.assert(res.body, schemaRegistroCriado);
        id_user = (res.body.userId)
        done(err);
      });
    });

    it("Consultar Registro por User ID ", function(done) {
        this.timeout(request_timeout);
        request(URL)
        .get(PATH_POST_USERID + id_user)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          expect(res.status).to.be.eql(200);
          Joi.assert(res.body, schemaArrayRegistroCriado);
          done(err);
        });
    });

    it("Consultar Registro por ID ", function(done) {
        this.timeout(request_timeout);
        request(URL)
        .get(PATH_POST_ID)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          expect(res.status).to.be.eql(200);
          Joi.assert(res.body, schemaArrayRegistroCriado);
          done(err);
        });
    });

    it("Consultar Todos Registros ", function(done) {
        this.timeout(request_timeout);
        request(URL)
        .get(PATH_POST)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          expect(res.status).to.be.eql(200);
          Joi.assert(res.body, schemaArrayRegistroCriado);
          done(err);
        });
    });

    it("Permitir Criação mesmo sem Payload", function(done) {
        this.timeout(request_timeout);
        request(URL)
        .post(PATH_POST)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          expect(res.status).to.be.eql(201);
          done(err);
        });
      });
})
