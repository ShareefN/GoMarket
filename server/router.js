const router = require('express').Router();
const userCtrl = require('./controllers/userCtrl');

router.route('/userSignup').post((req, res) => {
	userCtrl.createUser(req, res);
})

router.route('/userLogin').get((req, res) => {
	userCtrl.getUser(req, res);
})


router.route('/emplyeeSignUp').post((req, res) => {
	userCtrl.createEmployee(req, res);
})

router.route('/emplyeeLogin').post((req, res) => {
	userCtrl.getEmployee(req, res);
})


module.exports.router = router;