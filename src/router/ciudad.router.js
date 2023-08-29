const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

const router = express.Router();
const { mostrar, mandar} = require("../controller/ciudad.controller");


router.get('/agregar',isLoggedIn,mostrar);
router.post('/agregar/:id',isLoggedIn,mandar);


module.exports = router;