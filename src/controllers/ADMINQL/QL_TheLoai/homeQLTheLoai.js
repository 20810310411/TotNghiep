const LoaiSP = require("../../../models/LoaiSP");
const NhomLoaiSP = require("../../../models/NhomLoaiSP");



module.exports = {
    getQLTheLoaiSP: async (req, res) => {
        var sessions = req.session;
        let taikhoan = sessions.tk
        let loggedIn = sessions.loggedIn
        const all = await LoaiSP.find().exec();
        let loaisp1 = await NhomLoaiSP.find();
        res.render("ADMINQL/QuanLy/QL_TheLoai/homeTheLoai.ejs",
            {
                all, loggedIn, taikhoan, loaisp1
            })
    },

}