const express = require('express');
const { addIname, getIname } = require('../controllers/InameController');
const iNameRouter = express.Router();

iNameRouter.post('/createIname', addIname)
iNameRouter.get('/getIname', getIname)

module.exports = iNameRouter;