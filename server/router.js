const router = require('express').Router();
const userCtrl = require('./controllers/userCtrl');

router.route('/userSignup').post((req, res) => {
	userCtrl.createUser(req, res);
})

router.route('/userLogin').get((req, res) => {
	userCtrl.getUser(req, res);
})

router.route('/employeeSignUp').post((req, res) => {
	userCtrl.createEmployee(req, res);
})

router.route('/emplyeeLogin').get((req, res) => {
	userCtrl.getEmployee(req, res);
})

router.route('/addItem').post((req, res) => {
	userCtrl.addItem(req, res);
})

module.exports.router = router;