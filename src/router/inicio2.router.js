const express = require('express');
const { Mostrar, mandar } = require('../controller/inicio2.controller');

const router = express.Router();

router.get ('/', Mostrar)
router.post ('/', mandar)

module.exports = router