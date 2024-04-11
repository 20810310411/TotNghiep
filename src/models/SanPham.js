const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete');

const SanPham_Schema = new mongoose.Schema(
    {
        TenSP: { type: String, required: false },
        GiaBan: { type: Number, required: false },
        GiaCu: { type: Number },
        MoTa: { type: String, default: "Not thing" },
        ThuocTinh: {
            type: String,
            enum: ["New", "Hot", "Sale"],
            default: "New"
        },
        NB_BC: {
            type: String,
            enum: ["", "Nổi bật", "Bán chạy"],
            default: ""
        },
        SoLuongTon: { type: Number, required: false },
        SoLuongBan: { type: Number, required: false },
        SoLuotDanhGia: { type: Number, required: false, default: "1000" },
        Image: String,
        Image1: String,
        Image2: String,
        IdLoaiSP: { ref: "LoaiSP", type: mongoose.SchemaTypes.ObjectId },

    },
    {
        timestamps: true,   // createAt, updateAt
    },
);

// Override all methods
SanPham_Schema.plugin(mongoose_delete, { overrideMethods: 'all' });

const SanPham = mongoose.model('SanPham', SanPham_Schema);

module.exports = SanPham;