const express = require('express');
const bodyparser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = process.env.PORT || 3030;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
	
app.get('/', (req, res) => {
	res.send('index.html')
});

app.use('/', Router.router)

app.listen(port, () => {
	console.log(`Conneceted to port ${port}`);
});