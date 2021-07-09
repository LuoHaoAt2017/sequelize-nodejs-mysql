const express = require('express');
const cookieparser = require('cookie-parser');
const app = express();
const router = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());

app.use(router);

app.use(function(req, res) {
  res.status(404).send({ error: 'Not found' });
});

app.listen(9090, 'localhost', () => {
  console.log('server listen on 9090');
});

module.exports = app;