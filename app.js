'use strict';

const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const pug = require('pug');
const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));

const apiBaseUrl = 'http://api.flutrack.org/';

app.get('/', (req, res) => {
  if (req.query.q) {
    fetch(`${apiBaseUrl}?s=${req.query.q}`)
      .then((response) => response.json())
      .then((tweets) => res.render('index.pug', {
        tweets
      }));
  } else {
    fetch(`${apiBaseUrl}?time=7`)
      .then((response) => response.json())
      .then((tweets) => res.render('index.pug', {
        tweets
      }));
  }
});

app.listen('3000');