const express = require('express');
const register = require('../controllers/userController');
const login = require('../controllers/userController');
const logout = require('../controllers/userController');

const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logut').get(logout);


module.exports = router