const EmKit = require('../models/emKit');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

//Create New Emergency Item
exports.newEmkit = catchAsyncErrors (async (req, res, next) => {

    const emKit = await EmKit.create(req.body);

    res.status(201).json({
        success: true,
        emKit
    })
    
})

// Get All Emergency Items
exports.getEmkits = catchAsyncErrors (async (req, res, next) => {

    const emkits = await EmKit.find();

    res.status(200).json({
        success: true,
        count: emkits.length,
        emkits
    })
})

//Get single Emergency Item detail
exports.getSingleEmKit = catchAsyncErrors (async (req, res, next) => {

    const emkit = await EmKit.findById(req.params.id);

    if (!emkit) {
        return next(new ErrorHandler('Emergency Item not Found', 400));
    }

    res.status(200).json({
        success: true,
        emkit
    })
})

//Update emKit Details
exports.updateEmKit = catchAsyncErrors (async (req, res, next) => {

    let emkit = await EmKit.findById(req.params.id);

    if (!emkit) {
        return next(new ErrorHandler('Emergency Item not Found', 400));
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
})

//Delete EmKit
exports.deleteEmkit = catchAsyncErrors (async (req, res, next) => {

    const emkit = await EmKit.findByIdAndDelete(req.params.id);

    if (!emkit) {
        return next(new ErrorHandler('Emergency Item not Found', 400));
    };

    res.status(200).json({
        success: true,
        message: "Emergency Item is deleted."
    })
})