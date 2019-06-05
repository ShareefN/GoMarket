const express = require('express');
const bodyparser = require('body-parser');
const db = require('../database/db');
var users = require('./router')
const app = express();
const port = process.env.PORT || 3030;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use('/', users.router)

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

app.listen(port, () => {
	console.log(`Conneceted to port ${port}`);
});