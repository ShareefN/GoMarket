const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Employee } = require('../../database/db');

exports.createUser = function(req, res){
	const password = req.body.password;
	const hashedPass = bcrypt.hashSync(password, 10);

	User.findAll({ where: {
		email: req.body.email,
	}}).then(user => {
		res.send('User already exist')
	})

	User.create({
		email: req.body.email,
		username: req.body.username,
		password: hashedPass,
		phoneNumber: req.body.phoneNumber
	}).then(user => {
		return res.send(user);
		}).catch(err => {
			console.log(err)
		})
}

exports.getUser = function(req, res){
	const statusCode = 401;
	User.findAll({ where: { 
		email: req.body.email,
	}}).then(user => {
		if(bcrypt.compareSync(req.body.password, user[0].password)){
			const token = jwt.sign({
				email: user[0].email,
				userId: user[0]._id
			}, 
				process.env.JWT_KEY,
			{
				expiresIn: '6h'
			})
			res.status(200).json({
				token
			})
		}else{
			res.send('User does not exist')
		}
	}).catch(err => {
		res.status(statusCode).send(err)
	})
}

exports.createEmployee = function(req, res){
    const password = req.body.password;
    const hashedPass = bcrypt.hashSync(password, 10);

	Employee.findAll({ where : {
		email: req.body.email,
	}}).then(user => {
		res.send('User already exist')
	})

    Employee.create({
        email: req.body.email,
        username: req.body.username,
        password: hashedPass,
        phoneNumber: req.body.phoneNumber,
        // imgUrl: req.body.imgUrl,
        // cv: req.body.cv
    }).then(employee => {
		return res.send(employee);
	}).catch(err => {
		res.status(401).send(err)
	})
}

exports.getEmployee = function(req, res){
	Employee.findAll({ where: { 
		email: req.body.email,
	}}).then(user => {
		if(bcrypt.compareSync(req.body.password, user[0].password)){
			res.send(user[0])
		}else{
			res.send('User does not exist')
		}
	}).catch(err => {
		res.status(401).send(err)
	})
}

