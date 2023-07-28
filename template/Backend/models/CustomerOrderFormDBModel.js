const mongoose = require('mongoose');
const CustOrdSchema = mongoose.Schema({

    customerName: {
        type: String    
    },
    OrderNo: {
        type: String    
    },
    placedOrderDate: {
        type: String    
    },
    requiredDate: {
        type: String    
    },
    customerOrderTouch: {
        type: String    
    },
    targetTouch: {
        type: String    
    },
    seal: {
        type: String    
    },
    qualitySeries: {
        type: String    
    },
    category: {
        type: String    
    },
    groupName: {
        type: String    
    },
    subGroupName: {
        type: String    
    },
    coreProductName: {
        type: String    
    },
    modelNo: {
        type: String    
    },
    noOfStones: {
        type: String    
    },
    sizeofStone: {
        type: String    
    },
    stoneColourPattern: {
        type: String    
    },
    screwType: {
        type: String    
    },
    saleName: {
        type: String    
    },
    itemStage: {
        type: String    
    },
    SKUNo: {
        type:String
    },
    noOfDesign: {
        type: String    
    },
    QuantityPerDesign: {
        type: String    
    },
    itemQuantity: {
        type: String    
    },
    unitWT_UL: {
        type: String    
    },
    unitWT_LL: {
        type: String    
    },
    estimatedWeight: {
        type: String    
    },
    ScrewMake: {
        type: String    
    },
    screwSize: {
        type: String    
    },
    cuttingType: {
        type: String    
    },
    cuttingDesign: {
        type: String    
    },
    stoneBrand: {
        type: String    
    },
    polishType: {
        type: String    
    },
    dimmyColType: {
        type: String    
    },
    SILSURColouringType: {
        type: String    
    },
    surfaceFinish: {
        type: String    
    },
    Coat: {
        type: String    
    },
    cardType: {
        type: String    
    },
    cfPlan: {
        type: String    
    },
    stoneSettingType: {
        type: String    
    },
    remarks: {
        type: String    
    }

}, { timestamps: true });

module.exports = mongoose.model("Customer Order", CustOrdSchema);