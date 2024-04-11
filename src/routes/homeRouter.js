const express = require('express');

// ADMINQL
// HomeAdminController
const { getTrangChuAdmin } = require("../controllers/ADMINQL/HomeAdmin/homeAdminController");
// LoginAdminController
const { formLoginAdmin, LoginAdmin } = require("../controllers/Login/loginAdminController");
// QL_SanPhamController
const { getQLSP, } = require("../controllers/ADMINQL/QL_SanPham/homeQLSPController");
const { formInsertSP, nutThemSP, } = require("../controllers/ADMINQL/QL_SanPham/createSPController");
const { formUpdateSP, nutSuaSP, } = require("../controllers/ADMINQL/QL_SanPham/editSPController");
// TrangSPController
const { TrangSanPham, } = require("../controllers/TrangSP/TrangSPController");
// Trang Chi tiết sản phẩm controller
const { TrangChiTietSP, } = require("../controllers/ChiTietSP/chitietSPController");
// HomeTrangChuController
const { getTrangChu, } = require("../controllers/HomeTrangChu/homeController");
//
const { getFormLoginKH } = require('../controllers/Login/loginKHController');

const router = express.Router();
//  -------------------------------------------

// ADMIN 
router.get("/loginAdmin", formLoginAdmin)
router.post("/login-Admin", LoginAdmin)
router.get("/TrangChuAdmin", getTrangChuAdmin)
// Quản lý sản phẩm
router.get("/trangQLSP", getQLSP)
router.get("/formThemSP", formInsertSP)
router.post("/ThemSP", nutThemSP)
router.get("/formSuaSP", formUpdateSP)
router.put("/SuaSP/:idSuaSP", nutSuaSP)




// TRANG CHU
router.get("/", getTrangChu)

// SAN PHAM
router.get("/TrangSP", TrangSanPham)
router.get("/ChiTietSP", TrangChiTietSP)



// LOGIN Tai Khoan Khach Hang
router.get("/loginKH", getFormLoginKH)


module.exports = router;