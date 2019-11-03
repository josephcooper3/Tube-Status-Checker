const express = require('express');
var path = require('path');
const serveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 3000;
app.listen(port);
console.log('App server started on port ' + port);

const fetch = require('node-fetch');

const cors = require("cors");
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();
const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;

app.get('/api', async function (req, res) {
  fetch(`https://api.tfl.gov.uk/Line/Mode/tube/Status?detail=true&app_id=${ appId }&app_key=${ appKey }`)
  .then(result => result.json())
  .then(statusDetails => res.json(statusDetails))
  .catch(console.error);      
});