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
    farmers: {
        type: Number,
        required: true
    },
    business: {
        type: Number,
        required: true
    },
    salaried: {
        type: Number,
        required: true
    },
    unemployed: {
        type: Number,
        required: true
    },
    homeMaker: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("SurveyData", surveyDataSchema)