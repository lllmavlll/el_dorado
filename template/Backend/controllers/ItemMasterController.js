const imasterModel = require('../models/ItemMasterDBModel')

const addItemMaster = async (req, res) => {
    const { CoreProductName, Class, Category, Group, SubGroup, SaleName, StickerName, CommonName, AppName, Nstone, ScrewTypesApplicable, DefaultCType, StoneSchemeNoApplicable, DefaultStoneBrand, DefaultStoneShape, DefaultStoneColour, DefaultStoneGirdle, DefaultFinalColour, UnitWeightRangeUL, UnitWeightRangeLL, DefaultStoneSettingType, DefaultCuttingPattern, DefaultSurfaceFinish, NoOfDesigns, DyeNo, DefaultQualitySeries, DefaultScrewSize, MakingType } = req.body;

    try {
        const result = await imasterModel.create({
            CoreProductName, Class, Category, Group, SubGroup, SaleName, StickerName, CommonName, AppName, Nstone, ScrewTypesApplicable, DefaultCType, StoneSchemeNoApplicable, DefaultStoneBrand, DefaultStoneShape, DefaultStoneColour, DefaultStoneGirdle, DefaultFinalColour, UnitWeightRangeUL, UnitWeightRangeLL, DefaultStoneSettingType, DefaultCuttingPattern, DefaultSurfaceFinish, NoOfDesigns, DyeNo, DefaultQualitySeries, DefaultScrewSize, MakingType
        })
        res.status(201).json({ ItemMaster: result });
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}
module.exports = { addItemMaster };