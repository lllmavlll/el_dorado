const GSOModel = require('../models/GSOModel')

const addGSOrder = async (req, res) => {
    const { GSName, subOrder } = req.body

    const GSO = ()=>{
        const characters = '0123456789';
        let result = '';

        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
    const GSOrderNo = GSO();

        const subOrderWithGSSO = subOrder.map((item,index) => ({
            ...item,
            subOrderNo: `GS_${GSOrderNo}-${index+1}`,
        }));

    try {
        const result = await GSOModel.create({
            GSOrderNo:`GS_${GSOrderNo}`,  GSName, subOrder:subOrderWithGSSO
        })
        res.status(201).json({ GSOrder: result });
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

const GetAllGSOrders = async (req, res) => {
    try {
        const orders = await GSOModel.find();
        res.status(200).json(orders );
    } catch (error) {
        console.error('Error fetching Goldsmith Orders:', error);
        res.status(500).json({ error: 'Failed to fetch Goldsmith Orders' });
    }
}

const GetSpecificGSOrder = async (req, res) => {

    const GSOrderNo = req.params.GSOrderNo
    try {
        const data = await GSOModel.findOne({ GSOrderNo: GSOrderNo });
        res.status(200).json({ GSOrders: data });
    } catch (error) {
        console.error('Error fetching Goldsmith Orders:', error);
        res.status(500).json({ error: 'Failed to fetch Goldsmith Orders' });
    }
}

module.exports = { addGSOrder, GetAllGSOrders, GetSpecificGSOrder }