const express = require('express');
const { addCustOrd, getAllOrders,getIQ, GetOrderNo} = require('../controllers/CustomerOrderFromController');

const CustOrdFormRouter = express.Router();

CustOrdFormRouter.post('/createCustomerOrder', addCustOrd)
CustOrdFormRouter.get('/getAllOrders', getAllOrders)
CustOrdFormRouter.get('/getIQ/:OrderNo', getIQ)
CustOrdFormRouter.get('/getOrderNo/:OrderNo', GetOrderNo)


module.exports = CustOrdFormRouter;