const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const SurveyData = require("./models/SurveyData");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true, multipart: true }));
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

mongoose
  .connect(process.env.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.post("/add", async (req, res) => {
  try {
    const data = req.body;
    if (data) {
      const newData = new SurveyData(data);
      await newData.save();
      res.status(201).json({ message: "Survey data successfully submitted" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
});
app.get("/getHouseAnylatics", async (req, res) => {
  try {
    const data = await SurveyData.find();
    let rccCount = 0;
    let nonRccCount = 0;
    data.forEach((obj) => {
      if (obj.houseType === "RCC") {
        rccCount++;
      } else if (obj.houseType === "Non-RCC") {
        nonRccCount++;
      }
    });
    console.log("RCC Count:", rccCount);
console.log("Non-RCC Count:", nonRccCount);
 
res.status(200).json({fields:["RCC", "Non-RCC"], count:[rccCount,nonRccCount]})
    
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
});
app.get("/getBplAnylatics", async (req, res) => {
  try {
    const data = await SurveyData.find();
    let blpCount= 0;
    let aplCount = 0;
    data.forEach((obj) => {
      if (obj.belowPoverty === "yes") {
        blpCount++;
      } else if (obj.belowPoverty === "no") {
        aplCount++;
      }
    });
    console.log("RCC Count:", blpCount);
console.log("Non-RCC Count:", aplCount);
 
res.status(200).json({fields:["Below Poverty Line", "Above Poverty Line"], count:[blpCount,aplCount]})
    
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
});
app.get("/getpopulationAnylatics", async (req, res) => {
  try {
    const data = await SurveyData.find();
    let infantsCount= 0;
    let kidsCount = 0;
    let pregnantWomensCount= 0;
    let seniorCitizenCount = 0;
    let othersCount= 0;
    data.forEach((obj) => {
      if (obj.infants) {
        infantsCount= infantsCount+obj.infants;
      }  if (obj.kids) {
        kidsCount= kidsCount+obj.kids
      }  if (obj.pregnantWomens) {
        pregnantWomensCount= pregnantWomensCount+obj.pregnantWomens
      } 
      if (obj.seniorCitizen) {
        seniorCitizenCount= seniorCitizenCount+obj.seniorCitizen
      } 
      if (obj.others) {
        othersCount= othersCount+obj.others
      } 
    });
    console.log("RCC Count:", infantsCount,kidsCount,pregnantWomensCount,seniorCitizenCount, othersCount);
 
res.status(200).json({fields:["Infants", "Kids","Pregnant Womens","Senior Citizens", "Others"], count:[infantsCount,kidsCount, pregnantWomensCount, seniorCitizenCount,othersCount ]})
    
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "something went wrong", error: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server is running");
});

