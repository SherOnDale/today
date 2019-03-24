const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const pgClient = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});
pgClient.on('error', () => console.log('Lost PG connection'));
pgClient
  .query('CREATE TABLE IF NOT EXISTS values (number INT)')
  .catch(error => console.log(error));

app.get('/', (req, res) => {
  res.send('Hi');
});

app.listen(5000, error => {
  console.log('Listening');
});
