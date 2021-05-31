var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
  extended:true,
}))
app.use(bodyParser.json());

module.exports = app;
