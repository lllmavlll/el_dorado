const express = require('express');
const { addCustOrd, getAllOrders,getIQ} = require('../controllers/CustomerOrderFromController');

const CustOrdFormRouter = express.Router();

CustOrdFormRouter.post('/createCustomerOrder', addCustOrd)
CustOrdFormRouter.get('/getAllOrders', getAllOrders)
CustOrdFormRouter.get('/getIQ/:OrderNo', getIQ)


module.exports = CustOrdFormRouter;