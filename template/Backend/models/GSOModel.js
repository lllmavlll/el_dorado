const mongoose = require('mongoose');
const GSOSchema = mongoose.Schema({
    OrderNo: {
        type: String,
    },
    OrderedQty: {
        type: String,
    },
    subOrder: [{
        ItemName: String,
        GSOrderNo: String,
        allocdQty: String,
        allocdWt: String,
        QtyToBeAllocd: String,
        WtToBeAllocd: String,
        GSName: String,
    }]
}, { timestamps: true });
module.exports = mongoose.model("GoldSmith Order", GSOSchema);