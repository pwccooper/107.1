var http = require('http');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send("You are on my home page");
});

app.get('/about', function (req, res){
    res.send('<h1>Paul Cooper</h1>');
});

app.listen(8080, function () {
    console.log("Server running on http://localhost:8080");
});