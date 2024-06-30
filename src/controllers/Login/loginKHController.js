const TaiKhoan_KH = require("../../models/TaiKhoan_KH")

module.exports = {

    getFormLoginKH: async (req, res) => {
        res.render("HOME/Layouts/LoginKH/loginKH.ejs")
    },
    DangKyKH: async (req, res) => {
        let TenDangNhap = req.body.acc
        let MatKhau = req.body.pass
        let HoTen = req.body.name

        const kt = await TaiKhoan_KH.findOne({ TenDangNhap: TenDangNhap });
        if (kt) {
            return res.status(400).json({ success: false, message: 'Tài Khoản Đã Tồn Tại' });
        }
        if (!MatKhau) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        let newKH = await TaiKhoan_KH.create({
            TenDangNhap,
            MatKhau,
            HoTen
        });

        return res.status(201).json({ success: true, message: 'Đăng ký tài khoản thành công' });
    },

    DangNhapKH: async (req, res) => {
        let taikhoan = req.body.taikhoan
        let matkhau = req.body.matkhau
        var sessions

         // Mặc định đặt loggedIn là false
        req.session.loggedIn = false;

        // Check if the user exists
        const user = await TaiKhoan_KH.findOne({ TenDangNhap: taikhoan, MatKhau: matkhau });
        if (!user) {            
            return res.status(401).json({ message: 'Sai tài khoản hoặc mật khẩu' });
        }                      

        req.session.loggedIn = true
        req.session.taikhoan = taikhoan
        req.session.hoten = user.HoTen
        req.session.userId = user._id
        req.user = { _id: user._id };

        sessions=req.session
        console.log("sessions:",sessions)
        return res.status(200).json({ success: true, message: 'Đăng nhập thành công' });
    },

}