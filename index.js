'use strict';

var fs = require("fs");
var path = require("path");
var express = require("express");
var cors = require("cors");
var nodeStatic = require('node-static');
var https = require('https');

const options = {
  key: fs.readFileSync("./private.pem"),
  cert: fs.readFileSync("./public.pem"),
};

var app = express();

app.use("/", express.static(path.join(__dirname, "/")));
app.use(cors());

var fileServer = new(nodeStatic.Server)();
var app = https.createServer(options, app).listen(8080);
