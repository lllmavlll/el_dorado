const mongoose = require('mongoose');
const NewCustOrdSchema = mongoose.Schema({

    customerName: String,
    orderNo: String,
    orderRefNo: String,
    placedOrderDate: String,
    requiredDate: String,
    customerOrderTouch: String,
    targetTouch: String,
    seal: String,
    qualitySeries: String,
    finalIname: String,
    saleName: String,
    itemStage: String,
    noOfDesign: String,
    quantityPerDesign: String,
    itemQuantity: String,
    availQuantity: String,
    unitWT_UL: String,
    unitWT_LL: String,
    estimatedWeight: String,
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