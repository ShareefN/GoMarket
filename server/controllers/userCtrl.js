const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Employee } = require('../../database/db');

exports.createUser = function(req, res){
	const password = req.body.password;
	const hashedPass = bcrypt.hashSync(password, 10);

	User.findAll({ where: {
		email: req.body.email,
	}}).then(user => {
		res.send(user)
	})

	User.create({
		email: req.body.email,
		username: req.body.username,
		password: hashedPass,
		phoneNumber: req.body.phoneNumber
	}).then(user => {
		return res.send(user);
		}).catch(err => {
			res.status(401).send(err)
		})
}

exports.getUser = function(req, res){
	User.findOne({ where: { 
		email: req.body.email,
	}}).then(user => {
		// console.log(user)
		bcrypt.compare(req.body.password, user.password).then(function(isMatching){
			if(isMatching){
					const token = jwt.sign({
						email: user.email,
						userId: user.id
					}, "JWT_KEY", {expiresIn: 4000});
					return res.send({token: token});
			} else {
					return res.status(401).send({error: 'Wrong password'});
			}
	});
});
};

exports.createEmployee = function(req, res){
	const password = req.body.password;
	const hashedPass = bcrypt.hashSync(password, 10);

	Employee.findAll({ where: {
		email: req.body.email,
	}}).then(employee => {
		res.send(employee)
	})

	Employee.create({
		email: req.body.email,
		username: req.body.username,
		password: hashedPass,
		phoneNumber: req.body.phoneNumber
	}).then(employee => {
		return res.send(employee);
		}).catch(err => {
			res.status(401).send(err)
		})
}

exports.getEmployee = function(req, res){
	Employee.findOne({ where: { 
		email: req.body.email,
	}}).then(employee => {
		bcrypt.compare(req.body.password, employee.password).then(function(isMatching){
			if(isMatching){
					const token = jwt.sign({
						email: employee.email,
						employeeId: employee.id
					}, "JWT_KEY", {expiresIn: 4000});
					return res.send({token: token});
			} else {
					return res.status(HTTP_UNAUTHORIZED).send({error: 'Wrong password'});
			}
	});
});
}

