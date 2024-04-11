const SanPham = require("../../../models/SanPham");


require('rootpath')()
module.exports = {
    getQLSP: async (req, res) => {
        const all = await SanPham.find().populate('IdLoaiSP').exec();
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
        res.render("ADMINQL/QuanLy/QL_SanPham/homeSanPham.ejs",
            {
                all, getRelativeImagePath, formatCurrency, rootPath: '/'
            })
    },

}