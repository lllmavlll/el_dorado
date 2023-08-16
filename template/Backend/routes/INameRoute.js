const express = require('express');
const inameModel = require('../models/InamesDBModel');
const { addIname, getIname,getGname} = require('../controllers/InameController');
const iNameRouter = express.Router();

iNameRouter.post('/createIname', addIname)
iNameRouter.get('/getIname', getIname)
iNameRouter.get('/getGname', getGname)

iNameRouter.get('/getViaFinalIname/:FinalIname', async (req, res) => {

    const FinalIname =req.params.FinalIname

    try {
        const data = await inameModel.findOne({ FinalIname: FinalIname })
        res.json({ data });
    }
    catch (error) {
        console.error('Error finding product by FinalIname:', error);
    }
})


module.exports = iNameRouter;