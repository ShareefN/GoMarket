const router = require('express').Router();
const userCtrl = require('./controllers/userCtrl');

router.route('/userSignup').post((req, res) => {
	userCtrl.createUsers(req, res);
})

router.route('/userLogin').get((req, res) => {
	userCtrl.getUser(req, res);
})


router.route('/emplyeeSignUp').post((req, res) => {
	employeeCtrl.createEmployee(req, res);
})

router.route('emplyeeLogin').get((req, res) => {
	employeeCtrl.getEmployee(req, res);
})


module.exports.router = router;