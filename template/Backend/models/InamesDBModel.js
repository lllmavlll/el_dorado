const mongoose = require('mongoose');
const InameSchema = mongoose.Schema({

    coreProductName: {
        type: String
    },
    mainClass: {
        type: String
    },
    category: {
        type: String,

    },
    group: {
        type: String,

    },
    subGroup: {
        type: String,

    },
    saleName: {
        type: String,
    },
    stickerName: {
        type: String,
    },
    commonName: {
        type: String,
    },
    appName: {
        type: String,
    },
    numberOfStones: {
        type: String,
    },
    modelNo: {
        type: String,
    },
    defaultScrewType: {
        type: String,
    },
    screwTypesApplicable: [],
    defaultCardType: {
        type: String,
    },
    cardTypesApplicable: [],
    defaultStoneSchemeNo: {
        type: String,
    },
    stoneSchemeNosApplicable: [],
    defaultStoneSize: {
        type: String,
    },
    stoneSizesApplicable: [],
    defaultFinalColour: {
        type: String,
    },
    unitWeightUpperLimit: {
        type: String,
    },
    unitWeightLowerLimit: {
        type: String,
    },
    image: {
        type: String,
    },
    defaultStoneSettingType: {
        type: String,
    },
    stoneSettingTypesApplicable: [],
    defaultCuttingPattern: {
        defaultCuttingPattern: String,
    },
    cuttingPatternsApplicable: [],
    defaultSurfaceFinish: {
        type: String,
    },
    surfaceFinishesApplicable: [],
    noOfDesign: {
        type: String,
    },
    dyeNo: {
        type: String,
    },
    defaultQualitySeries: {
        type: String
    },
    qualitySeriesApplicable: [],
    defaultScrewSize: {
        type: String,
    },
    screwSizesApplicable: [],
    makingType: {
        type: String,
    },
    SparesInvolved: [],
    SKUNo: {
        type: String
    },
    SKUVariants: [],
    FinalIname: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("testIname", InameSchema);