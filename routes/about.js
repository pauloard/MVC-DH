const express = require('express');
let router = express.Router();

let aboutController = require('../controllers/aboutController');

router.get('/', aboutController.about);


module.exports = router;