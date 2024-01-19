const SanPham = require("../models/SanPham")

module.exports = {
    getHomeHienThi1: async (req, res) => {
        res.render("home.ejs")
    },

    getHomeHienThi2: async (req, res) => {
        res.render("home2.ejs")
    },

}