const jwt = require('jsonwebtoken');
const { User, Employee, Cart, Orders, Electronics, Gym, Groceries, Newarrivals, Hotdeals, Slider, HouseHold, Game, Messages } = require('../../database/db');

exports.createUser = function(req, res){

		User.create(req.body).then(user => {
			return res.send(user);
			}).catch(err => {
				console.log("Error: ", err)
			})
}

exports.getUser = function(req, res){

	User.findOne({ where: {
		email: req.body.email,
	}})
	.then(user => {
		if(req.body.email === user.email && req.body.password === user.password){
			const token = jwt.sign({
				email: user.email,
				userId: user.id
			}, "JWT_KEY", {expiresIn: 4000});
			console.log(token)
			 res.send({token: token});
		}
	}).catch(err => {
		res.send(err)
	})
}

exports.createEmployee = function(req, res){

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
		if(req.body.password === employee.password){
			const token = jwt.sign({
				email: req.body.email,
				employeeId: employee.id
			}, "JWT_KEY", {expiresIn: 4000});
			console.log(token)
		  res.send({token: token})
		}
	}).catch(err => {
		res.send(err)
	})
}

exports.user = function(req, res){
	User.findAll().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.Gym = function(req, res){
	Gym.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getGym = function(req, res){
	Gym.findAll().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.Groceries = function(req, res){
	Groceries.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getGroceries = function(req, res){
	Groceries.findAll().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.Electronics = function(req, res){
	Electronics.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getElectronics = function(req, res){
	Electronics.findAll().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.Newarrivals = function(req, res){
	Newarrivals.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getNewArrivals = function(req, res){
	Newarrivals.findAll().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.Hotdeals = function(req, res){
	Hotdeals.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getHotdeals = function(req, res){
	Hotdeals.findAll().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.addSlides = function(req, res){
	Slider.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err);
	})
}

exports.getSlides = function(req, res){
	Slider.findAll().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.addHouseAppliences = function(req, res){
	HouseHold.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getHousAppliences = function(req, res){
	HouseHold.findAll().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.addGames = function(req, res){
	Game.create(req.body).then(item => {
		return res.send(item)
	})
}

exports.getGames = function(req, res){
	Game.findAll().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.addToCart = function(req, res){
	Cart.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getCart = function(req, res){
	Cart.findAll().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.deleteCart = function(req, res){
	Cart.destroy({truncate: true}).then(data => {
		console.log(data, 'deleted')
	}).catch(err => {
		console.log(err)
	})
}

exports.sendMessage = function(req, res){
	Messages.create(req.body).then(message => {
		return res.send(message)
	}).catch(err => {
		console.log(err)
	})
}

exports.getMessages = function(req, res){
	Messages.findAll().then(message => {
		return res.send(message)
	}).catch(err => {
		console.log(err)
	})
}

exports.deleteMessgages = function(req, res){
	Messages.destroy({truncate: true}).then(data => {
		console.log(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.addToOrders = function(req, res){
	Orders.create(req.body).then(item => {
		return res.send(item)
	}).catch(err => {
		console.log(err)
	})
}

exports.getOrder = function(req, res){
	Orders.findAll().then(data => {
		return res.send(data)
	}).catch(err => {
		console.log(err)
	})
}

exports.deleteOrders = function(req, res){
	Orders.destroy({truncate: true}).then(data => {
		console.log(data, 'deleted')
	}).catch(err => {
		console.lof(err)
	})
}