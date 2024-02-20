const mongoose = require('mongoose');

const emKitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter Emergency item name'],
        trim: true,
        maxLength: [100, 'Em item name cannot exceed 100 characters']
    },
    percentage: {
        type: Number,
        required: [true, 'Please enter Emergency Item recommended percentage'],
        maxLength: [5, 'Em Item name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please enter Emergency Item description'],
    },
    images: {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
    },
    category: {
        type: String,
        required: [true, 'Please select category for this Emergency item'],
        enum: {
            values: [
                'Fire',
                'Earthquake',
                'Typhoon',
                'Flood'
            ],
            message: 'Please select correct category for Emergency item'
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

module.exports = mongoose.model('emKits', emKitSchema)