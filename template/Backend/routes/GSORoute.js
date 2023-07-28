const express = require('express');
const { addGSOrder, GetAllGSOrders } = require('../controllers/GSOController');

const GSORoute = express.Router()

GSORoute.post('/createGSOrder', addGSOrder)
GSORoute.get('/getAllGSOrders', GetAllGSOrders)


module.exports = GSORoute;