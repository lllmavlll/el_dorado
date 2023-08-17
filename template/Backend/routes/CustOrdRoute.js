const express = require('express');
const { addCustOrd, getAllOrders,getIQ, GetOrderNo,UpdateIQ} = require('../controllers/CustomerOrderFromController');

const CustOrdFormRouter = express.Router();

CustOrdFormRouter.post('/createCustomerOrder', addCustOrd)
CustOrdFormRouter.get('/getAllOrders', getAllOrders)
CustOrdFormRouter.get('/getIQ/:OrderNo', getIQ)
CustOrdFormRouter.get('/getOrderNo/:OrderNo', GetOrderNo)
CustOrdFormRouter.get('/updateItemQuantity/:OrderNo', UpdateIQ)


module.exports = CustOrdFormRouter;