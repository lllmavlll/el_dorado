const express = require('express');
const { addCustOrd, getAllOrders,getIQ, GetOrderNo,UpdateIQ,getSpecificLineItem,testCFO, getAllByCust, getAllCustomersFromOrders, GlobalGetforNewDB, newPost, getAllCustOrdByorderRefNo, updateSpecificCustOrd} = require('../controllers/CustomerOrderFromController');

const CustOrdFormRouter = express.Router();

CustOrdFormRouter.post('/createCustomerOrder', addCustOrd)
CustOrdFormRouter.post('/createCustomerOrdernew', testCFO)
CustOrdFormRouter.get('/getAllOrders', getAllOrders)
CustOrdFormRouter.get('/getAllFromNew', GlobalGetforNewDB)
CustOrdFormRouter.get('/getIQ/:OrderNo', getIQ)
CustOrdFormRouter.get('/getAllByCust/:customerName', getAllByCust)
CustOrdFormRouter.get('/getAllCustomersFromOrders', getAllCustomersFromOrders)
CustOrdFormRouter.get('/getOrderNo/:OrderNo', GetOrderNo)
CustOrdFormRouter.put('/updateItemQuantity/:OrderNo/:orderRefNo', UpdateIQ)
CustOrdFormRouter.get('/getSpecificLineItem/:orderRefNo/:itemIndex', getSpecificLineItem)

//================|| new DATA base ||=================//
CustOrdFormRouter.post('/newCustOrdModel/newPost', newPost)
CustOrdFormRouter.get('/newCustOrdModel/getAllCustOrdByorderRefNo/:orderRefNo', getAllCustOrdByorderRefNo)
CustOrdFormRouter.put('/newCustOrdModel/updateSpecificCustOrd/:orderRefNo', updateSpecificCustOrd)


module.exports = CustOrdFormRouter;