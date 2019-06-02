const bcrypt = require('bcrypt');
const db = require('../../database/db');

exports.createUsers = function(req, res){
	const password = req.body.password;
	const hashedPass = bcrypt.hashSync(password, 10);

	db.User.create({
		email: req.body.email,
		username: req.body.username,
		password: hashedPass,
		phoneNumber: req.body.phoneNumber,
	}).then(user => {
		return res.send('Registered!');
		}).catch(err => {
			console.log('Error: ', err)
		})
}

exports.getUser = function(req, res){
	db.User.findAll({ where: { 
		username: req.params.username,
		password: req.params.password,
	}}).then(user => {
		return res.send('LoggedIn!', user);
	}).catch(err => {
		res.status(401).send(err)
	})
}

exports.updateOne = function(req, res){
	db.User.update({ where: {
		email: req.body.email,
		username: req.body.username,
		phoneNumber: req.body.phoneNumber,
		location: req.body.location,
	}}).then(() => {
		return res.send('Updated');
	}).catch(err => {
		res.send(err)
	})
}

exports.deleteUser = function(req, res) {
	db.User.destroy({ where: {
		username: req.params.username,
		password: req.params.password
	}}).then(() => {
		return res.send('Deleted')
	}).catch(err => {
		res.send(err)
	})
}

