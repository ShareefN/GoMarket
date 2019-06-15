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

router.route('/addItemToCart').post((req, res) => {
	userCtrl.addItemToCart(req, res);
})

router.route('/gym').post((req, res) => {
	userCtrl.Gym(req, res);
})

router.route('/groceries').post((req, res) => {
	userCtrl.Groceries(req, res);
})

router.route('/electronics').post((req, res) => {
	userCtrl.Electronics(req, res);
})

router.route('/newarrivals').post((req, res) => {
	userCtrl.Newarrivals(req, res);
})

router.route('/hotdeals').post((req, res) => {
	userCtrl.Hotdeals(req, res);
})

module.exports.router = router;