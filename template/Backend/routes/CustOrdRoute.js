const express = require('express');
const { addCustOrd, getAllOrders, getiname } = require('../controllers/CustomerOrderFromController');

const CustOrdFormRouter = express.Router();

CustOrdFormRouter.post('/createCustomerOrder', addCustOrd)
CustOrdFormRouter.get('/getAllOrders', getAllOrders)
CustOrdFormRouter.get('/getAllOrders/:ItemNamedId', getiname)


module.exports = CustOrdFormRouter;