const express = require('express');
const router = express.Router();
const controller = require('../Controllers/videogameController');


router.get('/videogames', controller.getAllVideogames);


module.exports = router;