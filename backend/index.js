const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')

require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true, multipart: true }))
const corsOptions = {
    origin: JSON.parse(process.env.allowedUrls),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}

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
  console.log("hai")
    console.log(req.body)
})
// app.get('/anlyticsData', async (req, res) => {
//   console.log("hai")
    
// })

app.use(cors(corsOptions))

app.listen(3000, ()=>{
    console.log("Server is running")
})