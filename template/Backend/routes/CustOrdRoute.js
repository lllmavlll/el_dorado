const express = require('express');
const { addCustOrd, getAllOrders,} = require('../controllers/CustomerOrderFromController');

const CustOrdFormRouter = express.Router();

CustOrdFormRouter.post('/createCustomerOrder', addCustOrd)
CustOrdFormRouter.get('/getAllOrders', getAllOrders)


module.exports = CustOrdFormRouter;