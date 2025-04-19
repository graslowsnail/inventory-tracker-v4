const express = require('express');
const router = express.Router();
const { helloWorld } = require('../controllers/hello.controller');

router.get('/', helloWorld);

module.exports = router; 