const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const users = require('./router');
const port = process.env.PORT || 6060;
const app = express().use('*', cors());
const path = require("path")

//app.use(express.static(__dirname + '../build/static/js'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 next();
  });

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});


app.use('/', users.router)
app.get("/home", (req, res) => {
	res.send("hi")
})
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, () => {
	console.log(`Conneceted to port ${port}`);
});