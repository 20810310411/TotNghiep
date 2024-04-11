const SanPham = require("../../models/SanPham");

require('rootpath')()
module.exports = {
    getTrangChu: async (req, res) => {
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
        let noibat = await SanPham.find({ NB_BC: "Nổi bật" }).exec()
        let banchay = await SanPham.find({ NB_BC: "Bán chạy" }).exec()
        res.render("home.ejs", {
            noibat, banchay, formatCurrency, getRelativeImagePath, rootPath: '/'
        })
    },

}