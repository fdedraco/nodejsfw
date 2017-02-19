/*
code written by fathin luqman tantowi
license: MIT



*/
var express = require('express');
var app = require('express')();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
