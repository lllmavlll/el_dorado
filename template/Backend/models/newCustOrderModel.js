const mongoose = require('mongoose');
const NewCustOrdSchema = mongoose.Schema({

    customerName: String,
    orderNo: String,
    orderRefNo: String,
    placedOrderDate: String,
    requiredDate: String,
    customerOrderTouch: Number,
    targetTouch: Number,
    seal: String,
    qualitySeries: String,
    finalIname: String,
    saleName: String,
    itemStage: String,
    noOfDesign: Number,
    quantityPerDesign: Number,
    itemQuantity: Number,
    availQuantity: Number,
    unitWT_UL: Number,
    unitWT_LL: Number,
    estimatedWeight: Number,
    screwMake: String,
    screwSize: String,
    cuttingType: String,
    cuttingDesign: String,
    stoneBrand: String,
    polishType: String,
    dimmyColType: String,
    SILSURColouringType: String,
    surfaceFinish: String,
    coat: String,
    cardType: String,
    cfPlan: String,
    stoneSettingType: String,
    remarks: String
}, { timestamps: true });

module.exports = mongoose.model("Brand_new_Cust_Ords", NewCustOrdSchema);