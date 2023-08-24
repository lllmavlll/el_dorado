const mongoose = require('mongoose');
const GSOSchema = mongoose.Schema({
    OrderNo: {
        type: String,
        required: true
    },
    OrderedQty: {
        type: String,
        required: true
    },
    GSOrderNo: {
        type: String
    },
    subOrder: [{
        ItemName: String,
        subOrder: String,
        allocdQty: String,
        allocdWt: String,
        QtyToBeAllocd: String,
        WtToBeAllocd: String,
        GSName: String,
    }]
}, { timestamps: true });
module.exports = mongoose.model("GoldSmith_Order", GSOSchema);