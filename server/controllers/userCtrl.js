const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Employee, Cart, Orders } = require('../../database/db');

exports.createUser = function(req, res){
	// const password = req.body.password;
	// const hashedPass = bcrypt.hashSync(password, 10);

		User.create(req.body).then(user => {
			return res.send(user);
			}).catch(err => {
				console.log("Error: ", err)
			})
}

exports.getUser = function(req, res){
	User.findOne({ where: { 
		email: req.body.email,
	}}).then(user => {
		bcrypt.compare(req.body.password, user.password).then(function(isMatching){
			if(isMatching){
					const token = jwt.sign({
						email: user.email,
						userId: user.id
					}, "JWT_KEY", {expiresIn: 4000});
					return res.send({token: token});
			} else {
					return res.status(401).send('Wrong password');
			}
	});
});
};

exports.createEmployee = function(req, res){
	// const password = req.body.password;
	// const hashedPass = bcrypt.hashSync(password, 10);
console.log(req.body, 'emp ctrl')
			Employee.create(req.body).then(employee => {
				return res.send(employee);
				}).catch(err => {
					console.log('Error: ', err)
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
					return res.status(401).send({error: 'Wrong password'});
			}
	});
});
}

exports.addItem = function(req, res){
	Cart.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}