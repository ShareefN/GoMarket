const bcrypt = require('bcrypt');
const { User, Employee } = require('../../database/db');

exports.createUser = function(req, res){
	const password = req.body.password;
	let hashedPass = bcrypt.hashSync(password, 10);

	User.create({
		email: req.body.email,
		username: req.body.username,
		password: hashedPass,
		phoneNumber: req.body.phoneNumber
	}).then(user => {
		return res.send(user);
		}).catch(err => {
			console.log('Error: ', err)
		})
}

exports.getUser = function(req, res){
	const statusCode = 401;
	User.findAll({ where: { 
		email: req.body.email,
		password: req.body.password,
	}}).then(user => {
		if(bcrypt.compareSync(req.body.password, user.password)){
			res.send(user)
		}else{
			res.send('User does not exist')
		}
	}).catch(err => {
		res.status(statusCode).send('Error: ', err)
	})
}

exports.createEmployee = function(req, res){
    // const password = req.body.password;
    // const hashedPass = bcrypt.hashSync(password, 10);
	const statusCode = 401;

    Employee.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        // imgUrl: req.body.imgUrl,
        // cv: req.body.cv
    }).then(employee => {
		return res.send(employee);
	}).catch(err => {
		res.status(statusCode).send('Error: ', err)
	})
}

exports.getEmployee = function(req, res){
	User.findAll({ where: { 
		email: req.body.email,
		password: req.body.password,
	}}).then(user => {
		if(bcrypt.compareSync(req.body.password, user.password)){
			res.send(user)
		}else{
			res.send('User does not exist')
		}
	}).catch(err => {
		res.status(401).send('Error: ', err)
	})
}

