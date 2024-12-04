const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete');

const NhomLoaiSP_Schema = new mongoose.Schema(
    {
        TenNhomLoaiSP: { type: String, required: false },
    },
);

// Override all methods
NhomLoaiSP_Schema.plugin(mongoose_delete, { overrideMethods: 'all' });

const NhomLoaiSP = mongoose.model('NhomLoaiSP', NhomLoaiSP_Schema);

module.exports = NhomLoaiSP;