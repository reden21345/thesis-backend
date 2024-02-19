const EmKit = require('../models/emKit');

//Create New Emergency Item
exports.newEmkit = async (req, res, next) => {

    const emKit = await EmKit.create(req.body);

    res.status(201).json({
        success: true,
        emKit
    })
    
}

// Get All Emergency Items
exports.getEmkits = async (req, res, next) => {

    const emkits = await EmKit.find();

    res.status(200).json({
        success: true,
        count: emkits.length,
        emkits
    })
}

//Get single Emergency Item detail
exports.getSingleEmKit = async (req, res, next) => {

    const emkit = await EmKit.findById(req.params.id);

    if (!emkit) {
        return res.status(404).json({
            success: false,
            message: "Emergency Item not found"
        })
    }

    res.status(200).json({
        success: true,
        emkit
    })
}