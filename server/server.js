const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const users = require('./router');
const path = require("path")

const port = process.env.PORT || 6060;
const app = express().use('*', cors());

app.use('/static', express.static(path.join(__dirname, '../build//static')));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); 
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 next();
  });
 
app.use('/', users.router)
app.get("/*", (req, res) => {
	res.sendFile('index.html', {root: path.join(__dirname, '../build/')});
})

app.listen(port, () => {
	console.log(`Conneceted to port ${port}`);
});