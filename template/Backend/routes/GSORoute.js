const express = require('express');
const { addGSOrder, GetAllGSOrders, GetSpecificGSOrder } = require('../controllers/GSOController');

const GSORoute = express.Router()

GSORoute.post('/createGSOrder', addGSOrder)
GSORoute.get('/getAllGSOrders', GetAllGSOrders)
GSORoute.get('/GetSpecificGSOrder/:GSOrderNo', GetSpecificGSOrder)


module.exports = GSORoute;