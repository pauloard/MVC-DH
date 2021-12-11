const express = require('express');
let router = express.Router();

// Requerir controlador
let mainController = require('../controllers/mainController');

router.get('/', mainController.main);

//Exportar variable router
module.exports = router;
