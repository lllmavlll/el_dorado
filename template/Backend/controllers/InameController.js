const inameModel = require('../models/InamesDBModel')

const addIname = async (req, res) => {
    const { coreProductName, classs, category, group, subGroup, saleName, stickerName, commonName, appName, numberOfStones, modelNo, defaultScrewType,screwSizesApplicable, screwTypesApplicable, defaultCardType, cardTypesApplicable, defaultStoneSchemeNo, stoneSchemeNosApplicable, defaultStoneSize, stoneSizesApplicable, defaultFinalColour, unitWeightUpperLimit, unitWeightLowerLimit, image, defaultStoneSettingType, stoneSettingTypesApplicable, defaultCuttingPattern, cuttingPatternsApplicable, defaultSurfaceFinish, surfaceFinishesApplicable, noOfDesign, dyeNo, defaultQualitySeries, qualitySeriesApplicable, defaultScrewSize, makingType, SparesInvolved } = req.body;
    try {
        // === fill all filelds validation === //
        // if (!Category || !Group || !SubGroup || !CoreProductName || !ModelNo || !Nstone || !Size || !StoneColourPattern || !ScrewType) {
        //     return res.status(422).json({ error: "please fill all the fields" })
        // }

        // === sku creation === //
        function skuno() {
            const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let result = '';

            for (let i = 0; i < 9; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }
            return result;
        }
        const SKU = skuno();

        // === //
        const values = [category, subGroup, coreProductName, modelNo, numberOfStones, defaultStoneSize, defaultStoneSettingType, defaultScrewType, SKU]
        const FinalIname = values.join('_');

        const existingItem = await inameModel.findOne({ FinalIname: FinalIname })
        if (existingItem) {
            return res.status(400).json({ message: "Item already exists" });
        }

        const result = new inameModel({
            coreProductName, classs, category, group, subGroup, saleName, stickerName, commonName, appName, numberOfStones, modelNo, defaultScrewType,screwSizesApplicable, screwTypesApplicable, defaultCardType, cardTypesApplicable, defaultStoneSchemeNo, stoneSchemeNosApplicable, defaultStoneSize, stoneSizesApplicable, defaultFinalColour, unitWeightUpperLimit, unitWeightLowerLimit, image, defaultStoneSettingType, stoneSettingTypesApplicable, defaultCuttingPattern, cuttingPatternsApplicable, defaultSurfaceFinish, surfaceFinishesApplicable, noOfDesign, dyeNo, defaultQualitySeries, qualitySeriesApplicable, defaultScrewSize, makingType, SparesInvolved, SKUNo: SKU, FinalIname: FinalIname
        })
        await result.save();
        res.status(201).json({ Iname: result });

    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

const getIname = async (req, res) => {

    try {
        const jewelrie = await inameModel.find()
        res.status(200).json({ jewelrie })
    } catch (error) {
        console.error('Error fetching IName:', error);
        res.status(500).json({ error: 'Failed to fetch IName' });
    }
}

const getAllDefaults = async (req, res) => {
    try {
        const data = await inameModel.find().where()
    } catch (error) {
        console.error('Error fetching IName:', error);
        res.status(500).json({ error: 'Failed to fetch IName' });
    }
}

const getViaFinalIname = async (req, res) => {

    // const FinalIname = req.params.FinalIname

    // try {
    //     const data = await inameModel.findOne({ FinalIname: FinalIname })
    //     res.json({ data });
    // }
    // catch (error) {
    //     console.error('Error finding product by FinalIname:', error);
    // }
    const FinalIname =req.params.FinalIname

    try {
        const data = await inameModel.findOne({ FinalIname: FinalIname })
        res.json({ data });
    }
    catch (error) {
        console.error('Error finding product by FinalIname:', error);
    }
}

//NOT WORKING FIX LATER ->

const ArrayOfGroupNames = async (req, res) => {

    // const OrderNo = req.params.OrderNo

    try {
        const data = await inameModel.find()
        const arrayOfGroupNames = []
        data.forEach((item) => {
            // console.log(JSON.stringify(item))
            arrayOfGroupNames.push(item.Group)
        });
        res.json({ GroupNames: arrayOfGroupNames });
    }
    catch (error) {
        console.error('Error finding product by FinalIname:', error);
    }
}
const iNameTrial = async (req, res) => {
    try {

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to fetch' });
    }
}

module.exports = { addIname, getIname, getViaFinalIname, ArrayOfGroupNames, iNameTrial };