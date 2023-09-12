const CustOrdModel = require('../models/CustomerOrderFormDBModel');
const newCustOrderModel = require('../models/newCustOrderModel');

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
const testCFO = async (req, res) => {
    const { customerName, lineItem } = req.body;

    const skuno = ()=>{
        const characters = '0123456789';
        let result = '';

        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
    const OrderNO = skuno();

        const lineItemWithrefNO = lineItem.map((item,index) => ({
            ...item,
            orderRefNo: `${OrderNO}-${index+1}`,
            itemIndex:index+1
          }));
    
    try {
        const jewelries = await CustOrdModel.create({
            customerName, OrderNo:OrderNO, lineItem:lineItemWithrefNO
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
        // const data = await CustOrdModel.find({ OrderNo: OrderNo })
        const data = await CustOrdModel.find().where('OrderNo').equals(OrderNo)
        res.json(data.lineItem);
    } catch (error) {
        console.error('Error fetching Order Forms:', error);
        res.status(500).json({ error: 'Failed to fetch Order Forms' });
    }
}
const GetOrderNo =async (req, res) => {

    const OrderNo = req.params.OrderNo

    try {
        const data = await CustOrdModel.findOne({ OrderNo: OrderNo })
        // res.json({ key: data.lineItem[1].itemQuantity });
        //res.json({ key: data.lineItem });
        res.json( data );
    }
    catch (error) {
        console.error('Error finding product by FinalIname:', error);
    }
}
const UpdateIQ =async (req, res) => {

    const orderRefNo = req.params.orderRefNo

    try {
        const data = await CustOrdModel.findOneAndUpdate(
            { 'lineItem.orderRefNo': orderRefNo },  // grab the specific lineitem, which will return the order
            { $set: { 'lineItem.$': req.body } },  //this will set the new value
            { new: true }
        );
        console.log(data);
        if (data) {
            res.json(data)
        } else {
            res.status(404).json({ error: 'errors' })
        }
    } catch (error) {
        console.error('Error fetching Order Forms:', error);
        res.status(500).json({ error: 'Failed to fetch Order Forms' });
    }
    

        
    }

    const getAllByCust = async (req, res) => {
        const customerName = req.params.customerName
        try {
            // const data = await CustOrdModel.find({ customerName: customerName })
            const data = await CustOrdModel.find().where('customerName').equals(customerName)
            res.json(data);
        } catch (error) {
            console.error('Error fetching Order Forms:', error);
            res.status(500).json({ error: 'Failed to fetch Order Forms' });
        }
    
    }

    const getSpecificLineItem = async (req, res) => {
        // const OrderNo = req.params.OrderNo
        // const index = req.params.index
        const orderRefNo = req.params.orderRefNo
        const itemIndex = req.params.itemIndex
    
        try {
            const data = await CustOrdModel.findOne({ "lineItem.orderRefNo": orderRefNo })
            res.json( data.lineItem[itemIndex -1] )
            // res.json({ data })
        } catch (error) {
            console.error('Error ', error);
        }
    }

    const getAllCustomersFromOrders = async (req, res) => {
        const data = await CustOrdModel.find({}, 'customerName');
        // const customerNames = data.map(data => data.customerName);
        res.json(data)
    }


// from new DATABASE to set ordeerform View
//==================||from new DATA base ||=====================//

const GlobalGetforNewDB = async (req, res) => {
    try {
        const jewelries = await newCustOrderModel.find();
        res.status(200).json(jewelries);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}


const newPost = async (req, res) => {

    try {
        //req.body
        const orderArray = req.body
        //orderArray number generator
        const orderNoGen = () => {
            const characters = '0123456789';
            let result = '';

            for (let i = 0; i < 4; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }
            return result;
        }
        const OrderNO = orderNoGen()
        const test = orderArray.map((value, index) => ({
            orderNo: OrderNO,
            orderRefNo:`${OrderNO}-${index + 1}`,
            ...value
        }));
        // console.log(test);
        //orderRefNo generator
        //post request
        const jewelries = await newCustOrderModel.insertMany(test)

        // const jewelries = await newCustOrdModel.insertMany(req.body)

        res.status(201).json(jewelries);
    } catch (error) {
        console.log(error);
        res.status(500);
    }

}

const getAllCustOrdByorderRefNo = async (req, res) => {

    const orderRefNo = req.params.orderRefNo
    try {
        const data = await newCustOrderModel.findOne({orderRefNo})
        // const data = await newCustOrdModel.find({ OrderNo })
        res.status(201).json(data);
    } catch (error) {
        console.log(error);
        res.status(500);
    }

}

const updateSpecificCustOrd = async (req, res) => {

    const orderRefNo = req.params.orderRefNo
    const { availQuantity } = req.body

    try {
        const jewelries = await newCustOrderModel.findOneAndUpdate({ orderRefNo }, { availQuantity }, { useFindAndModify: false })
        // const jewelries = await newCustOrdModel.find({ OrderNo })
        res.status(200).json(jewelries);
    } catch (error) {
        console.log(error);
        res.status(500);
    }

}

const getAllOrderBelongingToOneCustomer = async (req, res) => {
    try {
        const customerName = req.params.customerName
        const data = await newCustOrderModel.find().where('customerName').equals(customerName);
        res.json(data)
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

module.exports = {
    addCustOrd,
    getAllOrders,
    getIQ,
    GetOrderNo,
    UpdateIQ,
    getSpecificLineItem,
    testCFO,
    getAllByCust,
    getAllCustomersFromOrders,
    GlobalGetforNewDB,
    newPost,
    getAllCustOrdByorderRefNo,
    updateSpecificCustOrd,
    getAllOrderBelongingToOneCustomer,
};