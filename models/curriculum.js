const mongoose = require('mongoose');

const curriculumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter Curriculum name'],
        trim: true,
        maxLength: [100, 'Curriculum name cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter Curriculum description'],
    },
    category: {
        type: String,
        required: [true, 'Please select category for this Curriculum'],
        enum: {
            values: [
                'Fire',
                'Earthquake',
                'Typhoon',
                'Flood'
            ],
            message: 'Please select correct category for Curriculum'
        }
    },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('curriculums', curriculumSchema)