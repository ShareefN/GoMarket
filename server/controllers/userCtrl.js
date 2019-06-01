const bcrypt = require('bcrypt');
const db = require('../database/index');
// const fs = require('file-system');
// const formidable = require('formidable');
// const Sequelize = require("sequelize");

exports.createUsers = function(req, res){
		const password = req.user.password;
		const hashedPass = bcrypt.hashSync(password, 10);

		db.User.create({
				email: req.body.email,
				username: req.body.username,
				password: hashedPass,
				phoneNumber: req.body.phoneNumber,
		}).then(user => {
				res.send(user);
		}).catch(err => {
				console.log('Error: ', err)
		})
}

exports.getUser = function(req, res){
	db.User.findOne({ where: { 
		username: req.params.username,
		password: req.params.password,
	}}).then(user => {
			return res.redirect('/homePage');
	}).catch(err => {
		res.send('Error: ', err)
	})
}
