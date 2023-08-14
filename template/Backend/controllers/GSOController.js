const GSOModel = require('../models/GSOModel')

const addGSOrder = async (req, res) => {
    const { OrderNo, OrderedQty, subOrder } = req.body
    try {
        const result = await GSOModel.create({
            OrderNo, OrderedQty, subOrder
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
        res.json(orders);
    } catch (error) {
        console.error('Error fetching Goldsmith Orders:', error);
        res.status(500).json({ error: 'Failed to fetch Goldsmith Orders' });
    }
}
module.exports = { addGSOrder, GetAllGSOrders }