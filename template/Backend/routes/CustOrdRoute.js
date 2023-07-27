const express = require('express');
const { addCustOrd, getCustOrd, deleteCustOrd, updateCustOrd } = require('../controllers/CustomerOrderFromController');

const CustOrdFormRouter = express.Router();

CustOrdFormRouter.post('/createCustomerOrder', addCustOrd)
CustOrdFormRouter.get('/getCustomerOrder', getCustOrd)
// CustOrdFormRouter.delete('/:id', deleteCustOrd)
// CustOrdFormRouter.put('/:id', updateCustOrd)

module.exports = CustOrdFormRouter;