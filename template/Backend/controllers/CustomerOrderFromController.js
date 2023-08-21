const CustOrdModel = require('../models/CustomerOrderFormDBModel')

const addCustOrd = async (req, res) => {
    const { customerName, OrderNo, lineItem } = req.body;
    // if (!customerName || !OrderNo || !placedOrderDate || !requiredDate || !customerOrderTouch || !targetTouch || !seal || !qualitySeries || !category || !groupName || !subGroupName || !coreProductName || !modelNo || !noOfStones || !sizeofStone || !stoneColourPattern || !screwType || !saleName || !itemStage || !SKUNo || !noOfDesign || !QuantityPerDesign || !itemQuantity || !unitWT_UL || !unitWT_LL || !estimatedWeight || !ScrewMake || !screwSize || !cuttingType || !cuttingDesign || !stoneBrand || !polishType || !dimmyColType || !SILSURColouringType || !surfaceFinish || !Coat || !cardType || !cfPlan || !stoneSettingType || !remarks) {
    //     return res.status(422).json({ error: "please fill all the fields" })
    // }
    //category, groupName, subGroupName, coreProductName, modelNo, noOfStones, sizeofStone, stoneColourPattern, screwType, saleName, itemStage, SKUNo,
    try {
        const jewelries = await CustOrdModel.create({
            customerName, OrderNo, lineItem
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

const getIQ = async (req, res) => {

    const OrderNo = req.params.OrderNo

    try {
        const data = await CustOrdModel.findOne({ OrderNo: OrderNo })
        res.json({ key: data.lineItem });
    }
    catch (error) {
        console.error('Error finding product by FinalIname:', error);
    }
}
const GetOrderNo =async (req, res) => {

    const OrderNo = req.params.OrderNo

    try {
        const data = await CustOrdModel.findOne({ OrderNo: OrderNo })
        // res.json({ key: data.lineItem[1].itemQuantity });
        //res.json({ key: data.lineItem });
        res.json({ data });
    }
    catch (error) {
        console.error('Error finding product by FinalIname:', error);
    }
}
const UpdateIQ =async (req, res) => {

    const {orderRefNo, OrderNo} = req.params.orderRefNo
    const { availQuantity} = req.body

    try {
        const updateQty = await CustOrdModel.findOneAndUpdate(
            {OrderNo:OrderNo, "lineItem.orderRefNo":orderRefNo },
            {
                $set:{
                    "lineItem.$.availQuantity":availQuantity
                }
            },
            { returnOriginal: false }
        )
        res.json({message:"item quantity updated successfully", updateQty})
        
    } catch (error) {
        console.log(error);
    }

//     try {
        
        
//         // const ordertoUpdate = await CustOrdModel.findOneAndUpdate({ OrderNo },{$set:{customerName}}, { returnOriginal: false })
//         const ordertoUpdate = await CustOrdModel.find().then ((orno) =>{ 
//             console.log(orno);
//             orno.OrderNo === OrderNo
//             console.log(orno.OrderNo);
//         });
//     if (!ordertoUpdate) {
//         return res.status(404).json({ message: `order not found of Order number: ${OrderNo}` });
//       }

//     // const lineItemToUpdate = ordertoUpdate.lineItem.findOneAndUpdate({ orderRefNo },{$set:{availQuantity}}, { returnOriginal: false });
//     const lineItemToUpdate = ordertoUpdate.lineItem.find().then ((item) =>{ item.orderRefNo===orderRefNo});
//     if (!lineItemToUpdate) {
//       return res.status(404).json({ message: `lineItem not found in the order ${OrderNo}`  });
//     }
//     lineItemToUpdate.availQuantity = availQuantity
    
//     res.json({ message: "Player score updated successfully", team: ordertoUpdate });
// } catch (error) {
//     console.log(error);    
// }
    // try {
    //     const orderNo = await CustOrdModel.findOne({ OrderNo: OrderNo })
    //     console.log(orderNo.lineItem)
    //     res.json({ orderNo });
    //     // const refNO =await CustOrdModel.findOne({orderRefNo:orderRefNo})
    //     // res.json({ refNO });

    //     // await newAvailQty.save();
    //     // res.status(200).json(newNote)
    // } catch (error) {
        //     console.log(error)
        //     res.status(500).json({message:"something went wrong!"})
        
        
        // }
        
    }

module.exports = {
    addCustOrd,
    getAllOrders,
    getIQ,
    GetOrderNo,
    UpdateIQ
};