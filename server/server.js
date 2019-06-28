const express = require('express');
const cors = require('cors');
// const { createServer } = require('http');
// const compression = require('compression');
// const morgan = require('morgan');
// const path = require('path');
const bodyparser = require('body-parser');
const users = require('./router');

const port = process.env.PORT || 6060;

const app = express().use('*', cors());
// const dev = app.get('env') !== 'production'

// if(!dev){
// 	app.disable('x-powered-by')
// 	app.use(compression())
// 	app.use(morgan('common'))

// 	app.use(express.static(path.resolve(__dirname, 'build')))
// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
// 	})
// }

// if(dev){
// 	app.use(morgan('dev'))
// }

// const server = createServer(app)

// server.listen(port , err => {
// 	if(err) throw err;
// })

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 next();
  });
  app.use(express.static("../build"))

app.use('/', users.router)
app.get("/*", (req, res) => {
	res.send("index.html")
})

app.listen(port, () => {
	console.log(`Conneceted to port ${port}`);
});