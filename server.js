const express = require('express');
const serveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 3000;
app.listen(port);
console.log('App server started on port ' + port);

const fetch = require('node-fetch');
const dotenv = require('dotenv').config()

const cors = require("cors");
app.use(cors());

app.get('/tflLineStatus', async function (req, res) {
  const appId = process.env.APP_ID;
  const appKey = process.env.APP_KEY;
  fetch(`https://api.tfl.gov.uk/Line/Mode/tube/Status?detail=true&app_id=${ appId }&app_key=${ appKey }`)
  .then(result => result.json())
  .then(statusDetails => res.json(statusDetails))
  .catch(console.error);      
});