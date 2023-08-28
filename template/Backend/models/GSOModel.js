const mongoose = require('mongoose');
const GSOSchema = mongoose.Schema({

    GSOrderNo: String,
    GSName: String,
    subOrder: [{
        OrderNo: String,
        subOrderNo: String,
        ItemName: String,
        availQuantity: String,
        allocdQty: String,
        allocdWt: String,
    }],
}, { timestamps: true });
module.exports = mongoose.model("GS_Order", GSOSchema);