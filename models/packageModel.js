const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: '_id'
        },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    diameter: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    surface: {
        type: String,
        required: true
    },
    image: {
        type: Object
    }
},
    {
        timestamps: true,
})

const Package = mongoose.model("Package", packageSchema);
module.exports = Package;