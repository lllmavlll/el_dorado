const mongoose = require('mongoose');
const CustOrdSchema = mongoose.Schema({

    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    placedOrderDate: {
        type: String,
        required: true
    },
    requiredDate: {
        type: String,
        required: true
    },
    customerOrderTouch: {
        type: Number,
        required: true
    },
    targetTouch: {
        type: Number,
        required: true
    },
    seal: {
        type: String,
        required: true
    },
    qualitySeries: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    groupName: {
        type: String,
        required: true
    },
    subGroupName: {
        type: String,
        required: true
    },
    coreProductName: {
        type: String,
        required: true
    },
    modelNo: {
        type: String,
        required: true
    },
    noOfStones: {
        type: Number,
        required: false
    },
    sizeofStone: {
        type: String,
        required: false
    },
    stoneColourPattern: {
        type: String,
        required: false
    },
    screwType: {
        type: String,
        required: false
    },
    saleName: {
        type: String,
        required: true
    },
    itemStage: {
        type: String,
        required: true
    },
    SKUNo: {},
    noOfDesign: {
        type: String,
        required: false
    },
    QuantityPerDesign: {
        type: String,
        required: false
    },
    itemQuantity: {
        type: String,
        required: false
    },
    unitWT_UL: {
        type: String,
        required: true
    },
    unitWT_LL: {
        type: String,
        required: true
    },
    estimatedWeight: {
        type: String,
        required: true
    },
    ScrewMake: {
        type: String,
        required: false
    },
    screwSize: {
        type: String,
        required: false
    },
    cuttingType: {
        type: String,
        required: true
    },
    cuttingDesign: {
        type: String,
        required: true
    },
    stoneBrand: {
        type: String,
        required: true
    },
    polishType: {
        type: String,
        required: true
    },
    dimmyColType: {
        type: String,
        required: false
    },
    SILSURColouringType: {
        type: String,
        required: false
    },
    surfaceFinish: {
        type: String,
        required: true
    },
    Coat: {
        type: String,
        required: false
    },
    cardFitting: {
        type: String,
        required: false
    },
    cardType: {
        type: String,
        required: false
    },
    cfPlan: {
        type: String,
        required: false
    },
    stoneSettingType: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model("Customer Order", CustOrdSchema);