const express = require('express');
const router = express.Router();
const instituteController = require('../controllers/instituteController');

router.post('/register', instituteController.registerInstitute);

router.get('/', instituteController.getInstitutes);

module.exports = router;

