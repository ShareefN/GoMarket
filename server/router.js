const router = require('express').Router();
const userCtrl = require('./controllers/userCtrl');
const db = require('../database/index');

router.route('/signup').post((req, res) => {
	userCtrl.createUsers(req, res)
})

router.route('/login').get((req, res) => {
	userCtrl.getUser(req, res)
})