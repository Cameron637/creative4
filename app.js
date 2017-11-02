'use strict';

const express = require('express');
const favicon = require('serve-favicon');
const fetch = require('node-fetch');
const path = require('path');
const pug = require('pug');
const swearjar = require('swearjar');
const app = express();

app.set('view engine', 'pug');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use('/static', express.static(path.join(__dirname, 'public')));

const apiBaseUrl = 'http://api.flutrack.org/';

app.get('/', (req, res, next) => {
  if (req.query.q) {
    fetch(`${apiBaseUrl}?s=${req.query.q}&time=7`)
      .then((response) => response.json())
      .then((tweets) => res.render('index.pug', {
        listTitle: `Total reports of ${req.query.q}:`,
        tweets: tweets.map((tweet => swearjar.censor(tweet.tweet_text)))
      }))
      .catch(next);
  } else {
    fetch(`${apiBaseUrl}?time=7`)
      .then((response) => response.json())
      .then((tweets) => res.render('index.pug', {
        listTitle: 'Total reports of flu-like symptoms over the last 7 days:',
        tweets: tweets.map((tweet => swearjar.censor(tweet.tweet_text)))
      }))
      .catch(next);
  }
});

app.use((req, res) => res.status(404).render('404.pug'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500.pug');
});

app.listen(3007);