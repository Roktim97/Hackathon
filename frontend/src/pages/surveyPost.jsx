import { useState } from "react";
import axios from "axios";

function SurveyPost() {
  const [surveyData, setSurveyData] = useState({
    pincode: "",
    infants: "",
    kids: "",
    pregnantWomens: "",
    seniorCitizen: "",
    others: "",
    houseType: "",
    belowPoverty: "",
  });
  const handleInputChange = (field, value) => {
    setSurveyData((prevsurveyData) => ({
      ...prevsurveyData,
      [field]: value,
    }));
  };

  const handleHouseTypeChange = (event) => {
    setSurveyData({
      ...surveyData,
      houseType: event.target.value,
    });
  };
  const handlebelowPoverty = (event) => {
    setSurveyData({
      ...surveyData,
      belowPoverty: event.target.value,
    });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
    //   const formData = new FormData();
    //   formData.append('pincode', surveyData.pincode)
    //   formData.append('infants', surveyData.infants)
    //   formData.append('kids', surveyData.kids)
    //   formData.append('pregnantWomens', surveyData.pregnantWomens)
    //   formData.append('seniorCitizen', surveyData.seniorCitizen)
    //   formData.append('others', surveyData.others)
    //   formData.append('houseType', surveyData.houseType)
    //   formData.append('belowPoverty', surveyData.belowPoverty)
    //   const formObject = {}
    //   for (const [key, value] of formData.entries()) {
    //     formObject[key] = value
    //   }
    //   console.log(formObject)

      const response = await axios.post("http://localhost:3000/add", surveyData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
       
      })
     
console.log(response)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen flex justify-center ">
        <div className="container mx-auto p-4">
          <div className="text-center text-5xl font-bold uppercase py-8">
            Survey Form
          </div>
          <form className="border-2 p-4 rounded-lg bg-white shadow-lg lg:p-16">
            <div className="mb-4 flex flex-col lg:flex-row w-full  ">
              <div className="w-full  lg:w-[60%]  text-xl text-gray-700  mb-2 p-2 ">
                Write your survey area pincode
              </div>
              <input
                type="number"
                id="pincode"
                name="pincode"
                value={surveyData.pincode}
                placeholder="Enter area pincode"
                required
                className="w-full lg:w-[40%] px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 "
                onChange={(e) => handleInputChange("pincode", e.target.value)}
              />
            </div>

            <div className="mb-4 flex flex-col lg:flex-row">
              <div className="w-full  lg:w-[60%]  text-xl text-gray-700  mb-2 p-2 ">
                How many infants are present in your household?
              </div>

              <input
                type="number"
                id="infants"
                name="infants"
                value={surveyData.infants}
                required
                placeholder="Enter number of infants"
                className="w-full lg:w-[40%]  px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) => handleInputChange("infants", e.target.value)}
              />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row">
              <div className="w-full  lg:w-[60%]  text-xl text-gray-700  mb-2 p-2 ">
                How many kids are present in your household?
              </div>

              <input
                type="number"
                id="kids"
                name="kids"
                value={surveyData.kids}
                required
                placeholder="Enter number of kids"
                className="w-full lg:w-[40%]  px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) => handleInputChange("kids", e.target.value)}
              />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row">
              <div className="w-full  lg:w-[60%]  text-xl text-gray-700  mb-2 p-2 ">
                How many pregnant womens are present in your household?
              </div>

              <input
                type="number"
                id="pregnantWomens"
                name="pregnantWomens"
                value={surveyData.pregnantWomens}
                required
                placeholder="Enter number of pregnant womens"
                className="w-full lg:w-[40%]  px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  handleInputChange("pregnantWomens", e.target.value)
                }
              />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row">
              <div className="w-full  lg:w-[60%]  text-xl text-gray-700  mb-2 p-2 ">
                How many senior citizen are present in your household?
              </div>

              <input
                type="number"
                id="seniorCitizen"
                name="seniorCitizen"
                value={surveyData.seniorCitizen}
                required
                placeholder="Enter number of senior citizen"
                className="w-full lg:w-[40%]  px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  handleInputChange("seniorCitizen", e.target.value)
                }
              />
            </div>
            <div className="mb-4 flex flex-col lg:flex-row">
              <div className="w-full  lg:w-[60%]  text-xl text-gray-700  mb-2 p-2 ">
                Any other members are present in your household?
              </div>

              <input
                type="number"
                id="others"
                name="others"
                value={surveyData.others}
                required
                placeholder="Enter others number"
                className="w-full lg:w-[40%]  px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) => handleInputChange("others", e.target.value)}
              />
            </div>

            <div className="mb-4 flex flex-col lg:flex-row ">
              <div className="w-full lg:w-[60%] text-xl text-gray-700 mb-2 p-2">
                Select house type:
              </div>
              <div className="flex lg:w-[40%] gap-2 flex-wrap">
                <label htmlFor="rcc" className="rounded-full p-2 mr-2">
                  <input
                    type="radio"
                    id="rcc"
                    name="houseType"
                    value="RCC"
                    checked={surveyData.houseType === "RCC"}
                    onChange={handleHouseTypeChange}
                    className="m-1"
                    required
                  />
                  RCC (Reinforced Cement Concrete)
                </label>
                <label htmlFor="nonRCC" className="rounded-full p-2 mr-2 ">
                  <input
                    type="radio"
                    id="nonRCC"
                    name="houseType"
                    value="Non-RCC"
                    checked={surveyData.houseType === "Non-RCC"}
                    onChange={handleHouseTypeChange}
                    className="m-1"
                    required
                  />
                  Non-RCC
                </label>
              </div>
            </div>
            <div className="mb-4 flex flex-col lg:flex-row ">
              <div className="w-full lg:w-[60%] text-xl text-gray-700 mb-2 p-2">
                Are you below the poverty line?
              </div>
              <div className="flex lg:w-[40%] gap-2 flex-wrap">
                <label htmlFor="yes" className="rounded-full p-2 mr-2">
                  <input
                    type="radio"
                    id="yes"
                    name="belowPoverty"
                    value="yes"
                    required
                    checked={surveyData.belowPoverty === "yes"}
                    onChange={handlebelowPoverty}
                    className="m-1"
                  />
                  Yes
                </label>
                <label htmlFor="no" className="rounded-full p-2 mr-2 ">
                  <input
                    type="radio"
                    id="no"
                    name="belowPoverty"
                    value="no"
                    required
                    checked={surveyData.belowPoverty === "no"}
                    onChange={handlebelowPoverty}
                    className="m-1"
                  />
                  No
                </label>
              </div>
            </div>
            <div className="mb-2 text-center">
              <button
                className="px-4 py-4 mt-4 w-32 text-sm font-semibold text-white bg-[#2979B7] rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                onClick={HandleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SurveyPost;
