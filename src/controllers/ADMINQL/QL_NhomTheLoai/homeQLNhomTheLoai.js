const LoaiSP = require("../../../models/LoaiSP");
const NhomLoaiSP = require("../../../models/NhomLoaiSP");
const SanPham = require("../../../models/SanPham");


module.exports = {
    getQLNhomLoaiSP: async (req, res) => {
        var sessions = req.session;
        let taikhoan = sessions.tk
        let loggedIn = sessions.loggedIn
        const all = await NhomLoaiSP.find().exec();
        res.render("ADMINQL/QuanLy/QL_NhomTheLoai/homeNhomTheLoai.ejs",
            {
                all, loggedIn, taikhoan, 
            })
    },

}