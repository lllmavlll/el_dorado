const express = require('express');
const { addItemMaster } = require('../controllers/ItemMasterController');
const IMasterRouter = express.Router();

IMasterRouter.post('/createItem', addItemMaster)

module.exports = IMasterRouter;