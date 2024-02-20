const EmKit = require('../models/emKit');
const ErrorHandler = require('../utils/errorHandler');

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
        return next(new ErrorHandler('Emergency Item not Found', 400));
    }

    res.status(200).json({
        success: true,
        emkit
    })
}

//Update emKit Details
exports.updateEmKit = async (req, res, next) => {

    let emkit = await EmKit.findById(req.params.id);

    if (!emkit) {
        return res.status(404).json({
            success: false,
            message: "Em Item not found"
        })
    };

    emkit = await EmKit.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        emkit
    })
}

//Delete EmKit
exports.deleteEmkit = async (req, res, next) => {

    const emkit = await EmKit.findByIdAndDelete(req.params.id);

    if (!emkit) {
        return res.status(404).json({
            success: false,
            message: "Emergency Item not found"
        })
    };

    res.status(200).json({
        success: true,
        message: "Emergency Item is deleted."
    })
}