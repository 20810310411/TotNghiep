
const NhomLoaiSP = require("../../../models/NhomLoaiSP");



module.exports = {
    formInsertNhomTL: async (req, res) => {
        var sessions = req.session;
        let taikhoan = sessions.tk
        let loggedIn = sessions.loggedIn
        let nhomloaiSP = await NhomLoaiSP.find({}).exec()
        res.render("ADMINQL/QuanLy/QL_NhomTheLoai/createNhomTheLoai.ejs",
            {
                nhomloaiSP, loggedIn, taikhoan
            })
    },

    nutThemNhomTL: async (req, res) => {
        let TenNhomLoaiSP = req.body.TenNhomLoaiSP;
        if (!req.files || Object.keys(req.files).length === 0) {
            // khong lam gi
        }
        else {
            console.log(">>> check kq: ", kq.path);
        }
        let SP = await NhomLoaiSP.create({
            TenNhomLoaiSP: TenNhomLoaiSP,
        })

        if (SP) {
            console.log(">>> check kq: ", SP);
            return res.status(200).json({
                message: "Bạn đã thêm mới sản phẩm thành công!",
                success: true,
                errCode: 0,
                data: SP
            })
        } else {
            return res.status(500).json({
                message: "Bạn thêm mới sản phẩm thất bại!",
                success: false,
                errCode: -1,
            })
        }
    },



}
