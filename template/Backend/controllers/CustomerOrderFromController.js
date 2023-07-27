const CustOrdModel = require('../models/CustomerOrderFormDBModel')

const addCustOrd = async (req, res) => {
    const { customerId, placedOrderDate, requiredDate, customerOrderTouch, targetTouch, seal, qualitySeries, category, groupName, subGroupName, coreProductName, modelNo, noOfStones, sizeofStone, stoneColourPattern, screwType, saleName, itemStage, SKUNo, noOfDesign, QuantityPerDesign, itemQuantity, unitWT_UL, unitWT_LL, estimatedWeight, ScrewMake, screwSize, cuttingType, cuttingDesign, stoneBrand, polishType, dimmyColType, SILSURColouringType, surfaceFinish, Coat, cardFitting, cardType, cfPlan, stoneSettingType } = req.body;

    try {

        const result = await CustOrdModel.create({
            customerId, placedOrderDate, requiredDate, customerOrderTouch, targetTouch, seal, qualitySeries, category, groupName, subGroupName, coreProductName, modelNo, noOfStones, sizeofStone, stoneColourPattern, screwType, saleName, itemStage, SKUNo, noOfDesign, QuantityPerDesign, itemQuantity, unitWT_UL, unitWT_LL, estimatedWeight, ScrewMake, screwSize, cuttingType, cuttingDesign, stoneBrand, polishType, dimmyColType, SILSURColouringType, surfaceFinish, Coat, cardFitting, cardType, cfPlan, stoneSettingType
        })
        res.status(201).json({ CustomerOrders: result });
    } catch (error) {
        console.log(error);
        res.status(500);
    }

}
const getCustOrd = async (req, res) => {
    const { customerId } = req.body
    try {
        const orders = await CustOrdModel.find({ customerId: CustomerName })
        res.status(200).json(orders)
    } catch (error) {
        console.log(error);
        res.status(500);
    }

}

module.exports = {
    addCustOrd,
    getCustOrd
};