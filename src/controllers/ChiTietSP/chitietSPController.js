const SanPham = require("../../models/SanPham");
const LoaiSP = require("../../models/LoaiSP");

module.exports = {
    TrangChiTietSP: async (req, res) => {
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
        let id = req.query.id
        let allsp = await SanPham.find().exec()
        const ctsp = await SanPham.findById(id).populate("IdLoaiSP")
        res.render("HOME/Layouts/ChiTietSP/ChiTietSP.ejs", {
            ctsp, allsp, formatCurrency, getRelativeImagePath, rootPath: '/'
        })
    },
}