const express = require('express');
const countTickets = require('./3-count_tickets_async');

const app = express();

app.get('/', (req, res) => {
  res.send('BiletAZ API işləyir!');
});

app.get('/tickets', (req, res) => {
  try {
    const report = countTickets('database.csv');
    res.send(`This is the ticket report\n${report}`);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(1245);

module.exports = app;