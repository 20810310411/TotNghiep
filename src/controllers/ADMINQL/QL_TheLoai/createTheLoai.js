
const LoaiSP = require("../../../models/LoaiSP");
const NhomLoaiSP = require("../../../models/NhomLoaiSP");



module.exports = {
    formInsertTheLoaiSP: async (req, res) => {
        var sessions = req.session;
        let taikhoan = sessions.tk
        let loggedIn = sessions.loggedIn
        let nhomloaiSP = await NhomLoaiSP.find({}).exec()
        let loaiSP = await LoaiSP.find({}).exec()
        res.render("ADMINQL/QuanLy/QL_TheLoai/createTheLoai.ejs",
            {
                loaiSP, nhomloaiSP, loggedIn, taikhoan
            })
    },

    nutThemTheLoaiSP: async (req, res) => {
        let TenLoaiSP = req.body.TenLoaiSP;
        let IdNhomLoaiSP = req.body.IdNhomLoaiSP;
        if (!req.files || Object.keys(req.files).length === 0) {
            // khong lam gi
        }
        else {
            console.log(">>> check kq: ", kq.path);
        }
        let SP = await LoaiSP.create({
            TenLoaiSP: TenLoaiSP,
            IdNhomLoaiSP: IdNhomLoaiSP
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
