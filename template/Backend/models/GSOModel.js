const mongoose = require('mongoose');
const GSOSchema = mongoose.Schema({
    GSOrderNo: {
        type: String,
        // required: true
    },
    OrderNo: {
        type: String,
        // required: true
    },
    GSName: {
        type: String,
        // required: true
    },
    ItemName: {
        type: String,
        // required: true
    },
    OrderedQty: {
        type: String,
        // required: true
    },
    allocdQty: {
        type: String
    },
    QtyToBeAllocd: {
        type: String,
    },
    allocdWt: {
        type: String
    },
    WtToBeAllocd: {
        type: String,
    }
}, { timestamps: true });
module.exports = mongoose.model("GoldSmith Order", GSOSchema);