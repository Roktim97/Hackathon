const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
const SurveyData = require('./models/SurveyData')

require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true, multipart: true }))
const corsOptions = {
    origin: "*",
}

app.use(cors(corsOptions))

mongoose
  .connect(process.env.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('connected to DB')
  })
  .catch((err) => {
    console.log(err.message)
  })

app.post('/add', async (req, res) => {
    try {
        const data = req.body
        if(data) {
          const newData = new SurveyData(data)
          await newData.save()
          res.status(201).json({message: "Survey data successfully submitted"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "something went wrong",  error: error.message})
    }
})

app.listen(3000, ()=>{
    console.log("Server is running")
})