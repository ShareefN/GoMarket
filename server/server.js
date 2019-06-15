const express = require('express');
const cors = require('cors');
const app = express().use('*', cors());
const bodyparser = require('body-parser');
const users = require('./router');
const port = process.env.PORT || 6060;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 next();
  });

app.use('/', users.router)
app.get("/", (req, res) => {
	res.send("hi")
})

app.listen(port, () => {
	console.log(`Conneceted to port ${port}`);
});