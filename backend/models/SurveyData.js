const mongoose = require('mongoose')

const surveyDataSchema = new mongoose.Schema({
    infants: {
        type: Number,
        required: true
    },
    kids: {
        type: Number,
        required: true
    },
    pregnantWomens: {
        type: Number,
        required: true
    },
    seniorCitizen: {
        type: Number,
        required: true
    },
    others: {
        type: Number,
        required: true
    },
    houseType: {
        type: String,
        required: true
    },
    belowPoverty: {
        type: String,
        required: true
    },
    // business: {
    //     type: Number,
    //     required: true
    // },
    // salaried: {
    //     type: Number,
    //     required: true
    // },
    // unemployed: {
    //     type: Number,
    //     required: true
    // },
    // homeMaker: {
    //     type: Number,
    //     required: true
    // },
    date: {
        type: Date,
        default: Date.now(),
        immutable: true
    },
    pincode: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("SurveyData", surveyDataSchema)