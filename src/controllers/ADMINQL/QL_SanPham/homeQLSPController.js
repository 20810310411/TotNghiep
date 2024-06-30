const LoaiSP = require("../../../models/LoaiSP");
const SanPham = require("../../../models/SanPham");
const NhomLoaiSP = require("../../../models/NhomLoaiSP");


require('rootpath')()
module.exports = {
    getQLSP: async (req, res) => {
        var sessions = req.session;
        let taikhoan = sessions.tk
        let loggedIn = sessions.loggedIn
        let loaisp1 = await LoaiSP.find().populate('IdNhomLoaiSP');
        console.log("loại sản phẩm 1:", loaisp1)

        // const all = await SanPham.find({})
        //     .populate({
        //         path: 'IdLoaiSP',
        //         populate: {
        //             path: 'IdNhomLoaiSP',
        //             model: 'NhomLoaiSP'
        //         }
        //     })
        // let tenNhomLoaiSP = {}
        // // Lặp qua từng đối tượng SanPham trong mảng 'all'
        // all.forEach((sanPham) => {
        //     // Truy cập thông tin TenNhomLoaiSP từ mỗi đối tượng SanPham
        //     tenNhomLoaiSP = sanPham.IdLoaiSP.IdNhomLoaiSP.TenNhomLoaiSP;
        //     console.log(tenNhomLoaiSP); // hoặc sử dụng thông tin này theo cách bạn muốn
        // });

        // console.log("all:", all)
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

        let all = await SanPham.find({})
            .populate({
                path: 'IdLoaiSP',
                populate: {
                    path: 'IdNhomLoaiSP',
                    model: 'NhomLoaiSP'
                }
            })

        const data = all.map((sanPham) => {
            // Kiểm tra xem có dữ liệu được populate hay không
            if (sanPham.IdLoaiSP && sanPham.IdLoaiSP.IdNhomLoaiSP && sanPham.IdLoaiSP.IdNhomLoaiSP.TenNhomLoaiSP) {
                // Trả về dữ liệu mong muốn nếu tồn tại
                return {
                    tenNhomLoaiSP: sanPham.IdLoaiSP.IdNhomLoaiSP.TenNhomLoaiSP,
                    // Các thông tin khác của sản phẩm có thể được thêm vào đây
                };
            } else {
                // Trả về một đối tượng trống nếu không có dữ liệu
                return {};
            }
        });
        let data1 = data.map(item => item.tenNhomLoaiSP)
        console.log("data:", data);
        console.log("data1:", data1);
        // Render view và truyền dữ liệu vào view
        res.render("ADMINQL/QuanLy/QL_SanPham/homeSanPham.ejs",
            {
                all, loaisp1, loggedIn, taikhoan, getRelativeImagePath, formatCurrency, rootPath: '/', data1
            })

        // res.render("ADMINQL/QuanLy/QL_SanPham/homeSanPham.ejs",
        //     {
        //         all, loaisp1, loggedIn, taikhoan, getRelativeImagePath, formatCurrency, rootPath: '/'
        //     })
    },

}