const bcrypt = require('bcrypt');
const db = require('../../database/db');

exports.createUsers = function(req, res){
	// const password = req.body.password;
	// const hashedPass = bcrypt.hashSync(password, 10);

	db.User.createUser({
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
		phoneNumber: req.body.phoneNumber,
	}).then(user => {
		return res.send(user);
		}).catch(err => {
			console.log('Error: ', err)
		})
}

exports.getUser = function(req, res){
	db.User.findOne({ where: { 
		email: req.body.email,
		password: req.body.password,
	}}).then(user => {
		if(bcrypt.compareSync(req.body.password, user.password)){
			res.send(user)
		}else{
			res.send('User does not exist')
		}
	}).catch(err => {
		res.send('Error: ', err)
	})
}

exports.createEmployee = function(req, res){
    // const password = req.body.password;
    // const hashedPass = bcrypt.hashSync(password, 10);

    db.Employee.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        // imgUrl: req.body.imgUrl,
        // cv: req.body.cv
    })
}

exports.getEmployee = function(req, res){
	db.User.findOne({ where: { 
		email: req.body.email,
		password: req.body.password,
	}}).then(user => {
		if(bcrypt.compareSync(req.body.password, user.password)){
			res.send(user)
		}else{
			res.send('User does not exist')
		}
	}).catch(err => {
		res.send('Error: ', err)
	})
}

