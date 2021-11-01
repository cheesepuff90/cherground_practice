"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
app.get('/', function (request, response, next) {
    response.send('hello world!');
});
app.listen(3000, function () {
    console.log('start');
});
