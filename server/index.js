const newRelic = require('newrelic');
const express = require('express');
require('dotenv').config();
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const client = require('./db/index.js');
const cassandra = require('cassandra-driver');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/images/:restaurantId', (req, res) => {
  const id = parseInt(req.params.restaurantId);

  const query = `select * from images where id=${id}`;

  client.execute(query)
    .then(result => res.status(200).send(result.rows[0]))
    .catch(error => {
      console.log(error);
      res.status(404).end();
    });
});

const port = process.env.PORT || 9042;

app.listen(port, console.log(`Server running on port: ${port}`));