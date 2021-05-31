
var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlenconded({
  extended:true,
}))
app.use(bodyparser.json());

var assets = require(".routes/assets")

app.use("/assets",assets);

module.exports=app;
