const mongoose = require('mongoose')

const sofaSchema = new mongoose.Schema({
    title: {
        type: String,
    },

    description: {
        type: String
    },

    dimension: {
        width : {
            type : String,
            default : "0 cm"
        },
        depth : {
            type : String,
            default : "0 cm"
        },
        height : {
            type : String,
            default : "0 cm"
        },
    },

    image_url: {
        type: String
    },

    model_url: {
        type: String
    },


    category: {
        type: String
    },

    price: {
        type: String,
        default : "1,000"
    },

    currency: {
        type : String,
        default: "₹"
    },

    rating: {
        type : Number,
        default : 4
    },

    created_at : {
        type : Date,
        default : Date.now()
    }


})

module.exports = mongoose.model('Sofa',sofaSchema)