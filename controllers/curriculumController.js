const Curriculum = require('../models/curriculum');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

//Create New Curriculum => /api/v1/curriculum/new
exports.newCurriculum = catchAsyncErrors (async (req, res, next) => {

    const curriculum = await Curriculum.create(req.body);

    res.status(201).json({
        success: true,
        curriculum
    })
    
})

// Get All Curriculum => /api/v1/curriculums
exports.getCurriculum = catchAsyncErrors (async (req, res, next) => {

    const curriculum = await Curriculum.find();

    res.status(200).json({
        success: true,
        count: curriculum.length,
        curriculum
    })
})

//Get single Curriculum Details => /api/v1/curriculum/:id
exports.getSingleCurriculum = catchAsyncErrors (async (req, res, next) => {

    const curriculum = await Curriculum.findById(req.params.id);

    if (!curriculum) {
        return next(new ErrorHandler('Curriculum not Found', 400));
    }

    res.status(200).json({
        success: true,
        curriculum
    })
})

//Update Curriculum Details
exports.updateCurriculum = catchAsyncErrors (async (req, res, next) => {

    let curriculum = await Curriculum.findById(req.params.id);

    if (!curriculum) {
        return next(new ErrorHandler('Emergency Item not Found', 400));
    };

    curriculum = await Curriculum.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        curriculum
    })
})

//Delete Curriculum
exports.deleteCurriculum = catchAsyncErrors (async (req, res, next) => {

    const curriculum = await Curriculum.findByIdAndDelete(req.params.id);

    if (!curriculum) {
        return next(new ErrorHandler('Curriculum not Found', 400));
    };

    res.status(200).json({
        success: true,
        message: "Curriculum is deleted."
    })
})