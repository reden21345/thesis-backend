const Curriculum = require('../models/curriculum');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

//Create New Curriculum
exports.newCurriculum = catchAsyncErrors (async (req, res, next) => {

    const curriculum = await Curriculum.create(req.body);

    res.status(201).json({
        success: true,
        curriculum
    })
    
})

// Get All Curriculum
exports.getCurriculum = catchAsyncErrors (async (req, res, next) => {

    const curriculum = await Curriculum.find();

    res.status(200).json({
        success: true,
        count: curriculum.length,
        curriculum
    })
})