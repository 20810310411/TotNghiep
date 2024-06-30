const SanPham = require("../../models/SanPham");
const LoaiSP = require("../../models/LoaiSP");

require('rootpath')()
module.exports = {
    TrangSanPham: async (req, res) => {
        // định dạng tiền
        function formatCurrency(amount) {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
        }

        // edit file img
        function getRelativeImagePath(absolutePath) {
            const rootPath = '<%= rootPath.replace(/\\/g, "\\\\") %>';
            const relativePath = absolutePath ? absolutePath.replace(rootPath, '').replace(/\\/g, '/').replace(/^\/?images\/upload\//, '') : '';
            return relativePath;
        }
        // hiển thị kiểu phân loại
        let loaiSP = await LoaiSP.find().exec();
        const tongSL = [];
        for (const loaiSp of loaiSP) {
            const soLuongSanPham = await SanPham.countDocuments({ IdLoaiSP: loaiSp._id });
            tongSL.push({ TenLoaiSP: loaiSp.TenLoaiSP, soLuongSanPham, IDLoaiSP: loaiSp._id });
        }
        
        let idPL = req.query.idPL
        req.session.idPL = idPL;
        let allsp = await SanPham.find({IdLoaiSP: idPL}).exec()
        
        res.render("HOME/Layouts/TrangSP/TrangSP.ejs", {
            allsp, tongSL, tongSLcon, formatCurrency, getRelativeImagePath, rootPath: '/'
        })
    },

}