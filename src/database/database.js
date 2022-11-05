/* eslint-disable no-console */
const mongoose = require('mongoose');
const config = require('../../config');

mongoose
  .connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log(result))
  .catch(console.error);
