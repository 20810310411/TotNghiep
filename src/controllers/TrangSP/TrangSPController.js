const SanPham = require("../../models/SanPham");

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
        let allsp = await SanPham.find().exec()
        res.render("HOME/Layouts/TrangSP/TrangSP.ejs", {
            allsp, formatCurrency, getRelativeImagePath, rootPath: '/'
        })
    },

}