const express = require('express');
const { addCustOrd, getCustOrd, deleteCustOrd, updateCustOrd } = require('../controllers/CustomerOrderFromController');
const CustOrdModel = require('../models/CustomerOrderFormDBModel')


const CustOrdFormRouter = express.Router();
CustOrdFormRouter.get('/',(req,res)=>{
    res.send('helloooooo')
})
CustOrdFormRouter.post('/', async(req,res)=>{
    const { customerName, placedOrderDate, requiredDate, customerOrderTouch, targetTouch, seal, qualitySeries, category, groupName, subGroupName, coreProductName, modelNo, noOfStones, sizeofStone, stoneColourPattern, screwType, saleName, itemStage, SKUNo, noOfDesign, QuantityPerDesign, itemQuantity, unitWT_UL, unitWT_LL, estimatedWeight, ScrewMake, screwSize, cuttingType, cuttingDesign, stoneBrand, polishType, dimmyColType, SILSURColouringType, surfaceFinish, Coat, cardType, cfPlan, stoneSettingType,remarks } = req.body;

    try {

        const result = await CustOrdModel.create({
            customerName, placedOrderDate, requiredDate, customerOrderTouch, targetTouch, seal, qualitySeries, category, groupName, subGroupName, coreProductName, modelNo, noOfStones, sizeofStone, stoneColourPattern, screwType, saleName, itemStage, SKUNo, noOfDesign, QuantityPerDesign, itemQuantity, unitWT_UL, unitWT_LL, estimatedWeight, ScrewMake, screwSize, cuttingType, cuttingDesign, stoneBrand, polishType, dimmyColType, SILSURColouringType, surfaceFinish, Coat, cardType, cfPlan, stoneSettingType,remarks        })
        res.status(201).json({ CustomerOrders: result });
    } catch (error) {
        console.log(error);
        res.status(500);
    }
})


CustOrdFormRouter.get('/getCustomerOrder', getCustOrd)
// CustOrdFormRouter.delete('/:id', deleteCustOrd)
// CustOrdFormRouter.put('/:id', updateCustOrd)

module.exports = CustOrdFormRouter;