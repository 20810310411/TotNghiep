const express = require('express');
const { getHomeAdmin} = require("../controllers/ADMIN/Home/homeAdmin");
const { getHomeHienThi2, getTrangChu } = require("../controllers/homeController");
const { getFormLoginKH } = require('../controllers/Login/loginKHController');


const router = express.Router();
//  -------------------------------------------

// ADMIN 
router.get("/ADMIN", getHomeAdmin)



// TRANG CHU
router.get("/", getTrangChu)
router.get("/hien-thi-2-home", getHomeHienThi2)


// LOGIN Tai Khoan Khach Hang
router.get("/login-tk-kh", getFormLoginKH)


module.exports = router;