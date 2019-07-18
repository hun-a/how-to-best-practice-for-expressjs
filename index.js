/* eslint-disable no-console */
const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello ExpressJS');
});

app.listen(3000, () => console.log('Server is running on 3000'));
