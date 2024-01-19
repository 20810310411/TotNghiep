const express = require('express');
const { getHomeHienThi2, getHomeHienThi1 } = require("../controllers/homeController");
const { getFormLoginKH } = require('../controllers/Login/loginKHController');


const router = express.Router();
//  -------------------------------------------

// TRANG CHU
router.get("/", getHomeHienThi1)
router.get("/hien-thi-2-home", getHomeHienThi2)


// LOGIN Tai Khoan Khach Hang
router.get("/login-tk-kh", getFormLoginKH)


module.exports = router;