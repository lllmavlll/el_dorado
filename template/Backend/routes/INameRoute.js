const express = require('express');
const { addIname } = require('../controllers/InameController');
const iNameRouter = express.Router();

iNameRouter.post('/createIname', addIname)

module.exports = iNameRouter;