const express = require('express');
const sendMessage = require('../controllers/messageController')
const getMessage = require('../controllers/messageController')
const isAuthenticated = require('../middleware/isAuthenticated')

const router = express.Router();

router.route('/send/:id').post(isAuthenticated,sendMessage);
router.route('/:id').get(isAuthenticated,getMessage);


module.exports = router;