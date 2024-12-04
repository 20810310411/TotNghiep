const SanPham = require("../../models/SanPham")
require('rootpath')();

module.exports = { 

    getPageHome: async (req, res) => {
        let sp = await SanPham.find()
        res.send("hihihaha")
    }

}
