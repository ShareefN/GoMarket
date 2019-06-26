const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const Nexmo = require('nexmo')
const users = require('./router');
const port = process.env.PORT || 6060;
const app = express().use('*', cors());

app.use(express.static(__dirname + '../build/static/js'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	 next();
  });

app.use('/', users.router)
app.get("/home", (req, res) => {
	res.send("hi")
})

const nexmo = new Nexmo({
	apiKey: '4a1dcce6',
	apiSecret: 'ZnAI64DyUHDSa4fv'
}, {debug: true});

app.post('/sendMsg', (req, res) => {
	const from = 'Nexmo'
	const number = "962780049003";
	const text = 'Expect to receive your order in 45min, our team are on the way!';

	nexmo.message.sendSms(
		from, number,  text, { type: 'unicode' },
		(err, responseData) => {
			if(err){
				console.log(err)
			}else{
				console.log(responseData)
			}
		}
		);
})

app.listen(port, () => {
	console.log(`Conneceted to port ${port}`);
});