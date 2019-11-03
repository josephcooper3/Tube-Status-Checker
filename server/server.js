const express = require('express');
const app = express();
const async = require('express-async-await')
const fetch = require('node-fetch');
const Key = require('./key');

app.get('/', async function (req, res) {
  fetch(`https://api.tfl.gov.uk/Line/Mode/tube/Status?detail=true&app_id=${Key.app_id}&app_key=${Key.app_key}`)
  .then(result => result.json())
  .then(statusDetails => res.json(statusDetails))
  .catch(console.error);      
});

app.listen(3000, function () {
  console.log('App running on port 3000');
});