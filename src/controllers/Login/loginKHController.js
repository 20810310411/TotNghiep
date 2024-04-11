const TaiKhoan_KH = require("../../models/TaiKhoan_KH")

module.exports = {

    getFormLoginKH: async (req, res) => {
        res.render("HOME/Layouts/LoginKH/loginKH.ejs")
    },
}