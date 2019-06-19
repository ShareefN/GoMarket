const router = require('express').Router();
const userCtrl = require('./controllers/userCtrl');

// Signup, Signin, Logout API'S
router.route('/userSignup').post((req, res) => {
	userCtrl.createUser(req, res);
})

router.route('/userLogin').post((req, res) => {
	userCtrl.getUser(req, res);
})

router.route('/employeeSignUp').post((req, res) => {
	userCtrl.createEmployee(req, res);
})

router.route('/employeeLogin').post((req, res) => {
	userCtrl.getEmployee(req, res);
})

router.route('/logout').get((req, res) => {
	userCtrl.logout(req, res);
})

// Adding items to store API'S
router.route('/addItemToCart').post((req, res) => {
	userCtrl.addItemToCart(req, res);
})

router.route('/gym').post((req, res) => {
	userCtrl.Gym(req, res);
})

router.route('/getGym').get((req, res) => {
	userCtrl.getGym(req, res);
})

router.route('/groceries').post((req, res) => {
	userCtrl.Groceries(req, res);
})

router.route('/getgroceries').get((req, res) => {
	userCtrl.getGroceries(req, res);
})

router.route('/electronics').post((req, res) => {
	userCtrl.Electronics(req, res);
})

router.route('/getelectronics').get((req, res) => {
	userCtrl.getElectronics(req, res);
})

router.route('/newarrivals').post((req, res) => {
	userCtrl.Newarrivals(req, res);
})

router.route('/getNewArrivals').get((req,res) => {
	userCtrl.getNewArrivals(req, res);
})

router.route('/hotdeals').post((req, res) => {
	userCtrl.Hotdeals(req, res);
})

router.route('/getHotDeals').get((req, res) => {
	userCtrl.getHotdeals(req, res);
})

router.route('/specialOffers').post((req, res) => {
	userCtrl.addSlides(req, res);
})

router.route('/getSpecialOffers').get((req, res) => {
	userCtrl.getSlides(req, res);
})

router.route('/houseAppliences').post((req, res) => {
	userCtrl.addHouseAppliences(req, res);
})

router.route('/gethouseappliences').get((req, res) => {
	userCtrl.getHousAppliences(req, res);
})

router.route('/addGames').post((req, res) => {
	userCtrl.addGames(req, res);
})

router.route('/getGames').get((req, res) => {
	userCtrl.getGames(req, res);
})

// Adding items to cart API'S
router.route('/addToCart').post((req, res) => {
	userCtrl.addToCart(req, res);
})

module.exports.router = router;