// Global import
const router = require('express').Router();

// Local import
const model = require('../../models/users');

router.get('/login', model.login);

module.exports = router;
