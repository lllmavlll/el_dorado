const mongoose = require('mongoose');
const CustOrdSchema = mongoose.Schema({

    customerName: {
        type: String,
    },
    OrderNo: {
        type: String,
    },
    placedOrderDate: {
        type: String,
    },
    requiredDate: {
        type: String,
    },
    customerOrderTouch: {
        type: Number,
    },
    targetTouch: {
        type: Number,
    },
    seal: {
        type: String,
    },
    qualitySeries: {
        type: String,
    },
    // Item: String,
    lineItem: [{
        finalIname: String,
        saleName: String,
        itemStage: String,
        noOfDesign: String,
        QuantityPerDesign: String,
        itemQuantity: String,
        unitWT_UL: String,
        unitWT_LL: String,
        estimatedWeight: String,
        ScrewMake: String,
        screwSize: String,
        cuttingType: String,
        cuttingDesign: String,
        stoneBrand: String,
        polishType: String,
        dimmyColType: String,
        SILSURColouringType: String,
        surfaceFinish: String,
        Coat: String,
        cardType: String,
        cfPlan: String,
        stoneSettingType: String,
        remarks: String
    }]
}, { timestamps: true });

module.exports = mongoose.model("Customer Order", CustOrdSchema);