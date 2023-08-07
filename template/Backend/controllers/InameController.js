const inameModel = require('../models/InamesDBModel')

const addIname = async (req, res) => {
    const { Category, Group, SubGroup, CoreProductName, ModelNo, Nstone, Size, StoneColourPattern, ScrewType ,FinalIname } = req.body;
    try {
        const existingItem = await inameModel.findOne({ CoreProductName: CoreProductName })
        // if (existingItem) {
        //     return res.status(400.).json({ message: "Item already exists" });
        // }
        // const values = [Category, SubGroup, CoreProductName, ModelNo, Nstone, Size, StoneColourPattern, ScrewType]
        // const FinalIname = values.join('_');
        const result = new inameModel({
            Category, Group, SubGroup, CoreProductName, ModelNo, Nstone, Size, StoneColourPattern, ScrewType, SKUNo:'DUMMY', FinalIname
        })
        await result.save();
        res.status(201).json({ Iname: result });

    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

const getIname = async (req, res) => {
    const { Category, Group, SubGroup, CoreProductName, ModelNo, Nstone, Size, StoneColourPattern, ScrewType, SKUNo } = req.body;
    try {
        const getInames = await inameModel({ Category: Category, Group: Group, SubGroup: SubGroup, CoreProductName: CoreProductName, ModelNo: ModelNo, Nstone: Nstone, Size: Size, StoneColourPattern: StoneColourPattern, ScrewType: ScrewType, SKUNo: SKUNo })
        res.status(200).json()
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

module.exports = { addIname };