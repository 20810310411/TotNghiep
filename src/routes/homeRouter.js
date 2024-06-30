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
// QL_NhomLoaiSP
const { getQLNhomLoaiSP, } = require("../controllers/ADMINQL/QL_NhomTheLoai/homeQLNhomTheLoai");
const { formInsertNhomTL, nutThemNhomTL, } = require("../controllers/ADMINQL/QL_NhomTheLoai/createNhomTL");
const { formUpdateNhomTLSP, nutSuaNhomTLSP, } = require("../controllers/ADMINQL/QL_NhomTheLoai/editNhomTL");
// QL_TheLoaiSP
const { getQLTheLoaiSP, } = require("../controllers/ADMINQL/QL_TheLoai/homeQLTheLoai");
const { formInsertTheLoaiSP, nutThemTheLoaiSP, } = require("../controllers/ADMINQL/QL_TheLoai/createTheLoai");
// const { formUpdateNhomTLSP, nutSuaNhomTLSP, } = require("../controllers/ADMINQL/QL_TheLoai/editTheLoai");



//  -------------------------------------------
// HOME
// HomeTrangChuController
const { getTrangChu, } = require("../controllers/HomeTrangChu/homeController");
// TrangSPController
const { TrangSanPham, } = require("../controllers/TrangSP/TrangSPController");
// Trang Chi tiết sản phẩm controller
const { TrangChiTietSP, } = require("../controllers/ChiTietSP/chitietSPController");

// Login khách hàng
const { getFormLoginKH, DangKyKH, DangNhapKH } = require('../controllers/Login/loginKHController');

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

// Quản lý nhóm loại sản phẩm
router.get("/trangQLNhomLoaiSP", getQLNhomLoaiSP)
router.get("/formThemNhomTLSP", formInsertNhomTL)
router.post("/ThemNhomTLSP", nutThemNhomTL)
router.get("/formSuaNhomTLSP", formUpdateNhomTLSP)
router.put("/SuaNhomTLSP/:idSuaNhomTLSP", nutSuaNhomTLSP)

// Quản lý loại sản phẩm
router.get("/trangQLTheLoaiSP", getQLTheLoaiSP)
router.get("/formThemTLSP", formInsertTheLoaiSP)
router.post("/ThemTLSP", nutThemTheLoaiSP)
router.get("/formSuaTLSP", formUpdateNhomTLSP)
router.put("/SuaTLSP/:idSuaTLSP", nutSuaNhomTLSP)


//  -------------------------------------------
// TRANG CHU
router.get("/", getTrangChu)

// SAN PHAM
router.get("/TrangSP", TrangSanPham)
router.get("/ChiTietSP", TrangChiTietSP)



// LOGIN Tai Khoan Khach Hang
router.get("/loginKH", getFormLoginKH)
router.post("/DangKyKH", DangKyKH)
router.post("/DangNhapKH", DangNhapKH)


module.exports = router;