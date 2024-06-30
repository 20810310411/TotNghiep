
const NhomLoaiSP = require("../../../models/NhomLoaiSP");




module.exports = {
    formUpdateNhomTLSP: async (req, res) => {
        var sessions = req.session;
        let taikhoan = sessions.tk
        let loggedIn = sessions.loggedIn
        let idSuaNhomTLSP = req.query.idSuaNhomTLSP
        let nhomloaiSP = await NhomLoaiSP.find({}).exec()
        let nutSuaNhomTLSP = await NhomLoaiSP.findById(idSuaNhomTLSP).exec()
        console.log("nhomloaiSP: ", nhomloaiSP);
        res.render("ADMINQL/QuanLy/QL_NhomTheLoai/editNhomTheLoai.ejs",
            {
                loggedIn, taikhoan, nhomloaiSP, nutSuaNhomTLSP
            })
    },

    nutSuaNhomTLSP: async (req, res) => {
        let id = req.params.idSuaNhomTLSP 
        let TenNhomLoaiSP = req.body.TenNhomLoaiSP;
        if (!req.files || Object.keys(req.files).length === 0) {
            // khong lam gi
        }
        else {
            
        }
        let updateSP = await NhomLoaiSP.findByIdAndUpdate({ _id: id }, {
            TenNhomLoaiSP: TenNhomLoaiSP,
            
        })

        if (updateSP) {
            console.log(">>> check kq: ", updateSP);
            return res.status(200).json({
                message: "Bạn đã sửa sản phẩm thành công!",
                success: true,
                errCode: 0,
                data: updateSP
            })
        } else {
            return res.status(500).json({
                message: "Bạn sửa sản phẩm thất bại!",
                success: false,
                errCode: -1,
            })
        }
    },



}
