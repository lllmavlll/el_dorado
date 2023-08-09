const CustOrdModel = require('../models/CustomerOrderFormDBModel')

const addCustOrd = async (req, res) => {
    const { customerName, OrderNo, placedOrderDate, requiredDate, customerOrderTouch, targetTouch, seal, qualitySeries, lineItem } = req.body;
    // if (!customerName || !OrderNo || !placedOrderDate || !requiredDate || !customerOrderTouch || !targetTouch || !seal || !qualitySeries || !category || !groupName || !subGroupName || !coreProductName || !modelNo || !noOfStones || !sizeofStone || !stoneColourPattern || !screwType || !saleName || !itemStage || !SKUNo || !noOfDesign || !QuantityPerDesign || !itemQuantity || !unitWT_UL || !unitWT_LL || !estimatedWeight || !ScrewMake || !screwSize || !cuttingType || !cuttingDesign || !stoneBrand || !polishType || !dimmyColType || !SILSURColouringType || !surfaceFinish || !Coat || !cardType || !cfPlan || !stoneSettingType || !remarks) {
    //     return res.status(422).json({ error: "please fill all the fields" })
    // }
    //category, groupName, subGroupName, coreProductName, modelNo, noOfStones, sizeofStone, stoneColourPattern, screwType, saleName, itemStage, SKUNo,
    try {
        const jewelries = await CustOrdModel.create({
            customerName, OrderNo, placedOrderDate, requiredDate, customerOrderTouch, targetTouch, seal, qualitySeries, lineItem
            //: [{ category, groupName, subGroupName, coreProductName, modelNo, noOfStones, sizeofStone, stoneColourPattern, screwType, saleName, itemStage, SKUNo }], 
        })
        res.status(201).json({ CustomerOrders: jewelries });
    } catch (error) {
        console.log(error);
        res.status(500);
    }

}
//to get all orders
const getAllOrders = async (req, res) => {
    try {
        const jewelries = await CustOrdModel.find();
        res.json({ jewelrie: jewelries });
    } catch (error) {
        console.error('Error fetching Order Forms:', error);
        res.status(500).json({ error: 'Failed to fetch Order Forms' });
    }
}

module.exports = {
    addCustOrd,
    getAllOrders,
};