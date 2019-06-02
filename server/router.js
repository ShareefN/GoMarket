const router = require('express').Router();
const userCtrl = require('./controllers/userCtrl');
const employeeCtrl = require('./controllers/employeeCtrl');
const db = require('../database/db');

router.route('/userSignup').post((req, res) => {
	userCtrl.createUsers(req, res);
})

router.route('/userLogin').get((req, res) => {
	userCtrl.getUser(req, res);
})

router.route('/:username').put((req, res) => {
	userCtrl.updateOne(req, res);
})

router.route('/:username').delete((req, res) => {
	userCtrl.deleteUser(req, res);
})

router.route('/emplyeeSignUp').post((req, res) => {
	employeeCtrl.createEmployee(req, res);
})

router.route('emplyeeLogin').get((req, res) => {
	employeeCtrl.getEmployee(req, res);
})


module.exports.router = router;