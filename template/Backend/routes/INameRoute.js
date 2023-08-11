const express = require('express');
const { addIname, getIname } = require('../controllers/InameController');
const iNameRouter = express.Router();

iNameRouter.post('/createIname', addIname)
iNameRouter.get('/getIname', getIname)
iNameRouter.get('/getSKU/:FinalIname', async(req,res)=>{
    const FinalIname =req.params.FinalIname
    if(FinalIname){
        try {
            const jewelrie = await inameModel.find()
            res.status(200).json({ jewelrie })
        } catch (error) {
            console.error('Error fetching IName:', error);
            res.status(500).json({ error: 'Failed to fetch IName' });
        }
    }

})

module.exports = iNameRouter;