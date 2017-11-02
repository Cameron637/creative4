'use strict';

const express = require('express');
const pug = require('pug');
const request = require('request');
const app = express();

app.set('view engine', 'pug');

const apiBaseUrl = 'http://api.flutrack.org/';

app.get('/', (req, res) => {
  // if (req.query.q) {
  //   request.get(`${apiBaseUrl}?s=${req.query.q}`).pipe(res);
  // } else {
  //   request.get(`${apiBaseUrl}?time=7`).pipe(res);
  // }
  res.render('index.pug', {
    title: 'Hello, World!'
  })
});

app.listen('3000');