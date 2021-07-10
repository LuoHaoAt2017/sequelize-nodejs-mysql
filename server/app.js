const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const router = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(router);

app.use(function(req, res) {
  res.status(404).send({ error: 'Not found' });
});

app.listen(9090, 'localhost', () => {
  console.log('server listen on 9090');
});

module.exports = app;