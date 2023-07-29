const CustOrdModel = require('../models/CustomerOrderFormDBModel')
const CustModel = require('../models/CustomerDBModel')

const addCustOrd = async (req, res) => {
    const { customerName, OrderNo, placedOrderDate, requiredDate, customerOrderTouch, targetTouch, seal, qualitySeries, category, groupName, subGroupName, coreProductName, modelNo, noOfStones, sizeofStone, stoneColourPattern, screwType, saleName, itemStage, SKUNo, noOfDesign, QuantityPerDesign, itemQuantity, unitWT_UL, unitWT_LL, estimatedWeight, ScrewMake, screwSize, cuttingType, cuttingDesign, stoneBrand, polishType, dimmyColType, SILSURColouringType, surfaceFinish, Coat, cardType, cfPlan, stoneSettingType,remarks } = req.body;
    try {

        const result = new CustOrdModel({
            customerName, OrderNo, placedOrderDate, requiredDate, customerOrderTouch, targetTouch, seal, qualitySeries, category, groupName, subGroupName, coreProductName, modelNo, noOfStones, sizeofStone, stoneColourPattern, screwType, saleName, itemStage, SKUNo, noOfDesign, QuantityPerDesign, itemQuantity, unitWT_UL, unitWT_LL, estimatedWeight, ScrewMake, screwSize, cuttingType, cuttingDesign, stoneBrand, polishType, dimmyColType, SILSURColouringType, surfaceFinish, Coat, cardType, cfPlan, stoneSettingType,remarks
        })
        await result.save()
        res.status(201).json({ CustomerOrders: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"something went wrong"});
    }

}
const getAllOrders = async (req, res) => {
    // const { customerName, OrderNo, placedOrderDate, requiredDate, customerOrderTouch, targetTouch, seal, qualitySeries, category, groupName, subGroupName, coreProductName, modelNo, noOfStones, sizeofStone, stoneColourPattern, screwType, saleName, itemStage, SKUNo, noOfDesign, QuantityPerDesign, itemQuantity, unitWT_UL, unitWT_LL, estimatedWeight, ScrewMake, screwSize, cuttingType, cuttingDesign, stoneBrand, polishType, dimmyColType, SILSURColouringType, surfaceFinish, Coat, cardFitting, cardType, cfPlan, stoneSettingType } = req.body;
    try {
        const jewelrie = await CustOrdModel.find();
        res.json({jewelrie});
    } catch (error) {
        console.error('Error fetching jewelries:', error);
        res.status(500).json({ error: 'Failed to fetch jewelries' });
    }
}

module.exports = {
    addCustOrd,
    getAllOrders
};