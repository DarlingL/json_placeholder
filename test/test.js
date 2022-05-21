"use strict";

// Importaçao frameworks
var request = require("supertest");
var expect = require("chai").expect;
var joiAssert = require("joi-assert");

// Payloads e Variaveis
const {

} = require("../data/data");

// Schemas
const {

} = require("../schemas/schema");

// Config
const request_timeout = 200000;
const URL = process.env.NODE_ENV;

// Paths
const PATH_POST = ""
