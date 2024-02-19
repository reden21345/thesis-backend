const EmKit = require('../models/emKit');

//Create New Emergency Supply
exports.newEmkit = async (req, res, next) => {

    const emKit = await EmKit.create(req.body);

    res.status(201).json({
        success: true,
        emKit
    })
}

// Get All Emergency Supply
exports.getEmkits = (req, res, next) => {
    res.status(200).json({
        success: true,
    })
}