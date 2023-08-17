const mongoose = require('mongoose');
const GSOSchema = mongoose.Schema({
    OrderNo: {
        type: String,
    },
    subOrder: [{
        orderQuantity:String,
        itemName: String,
        GSOrderNo: String,
        allocatedQuantity: String,
        allocatedWeight: String,
        quantityToBeAllocated: String,
        WeightToBeAllocated: String,
        goldSmithName: String,
    }]
}, { timestamps: true });
module.exports = mongoose.model("GoldSmith_Order", GSOSchema);