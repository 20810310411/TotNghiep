const express = require('express');
const { getPageHome } = require('../controllers/ADMINQL/test');
const router = express.Router();

router.get("/", getPageHome)


module.exports = router;