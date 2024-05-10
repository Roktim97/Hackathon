import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import axios from "axios";
import { useState, useEffect } from 'react'
import ModalComponent from "../components/ModalComponent";
import ReportModal from "../components/ReportModal";

const Analytics = () => {
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [report, setReport] = useState("")
  const [houseTypeAnylatics, setHouseTypeAnylatics] = useState({
    fields: [],
    count: []
  })
  // console.log(houseTypeAnylatics)
  const [bplAnylatics, setBplAnylatics] = useState({
    fields: [],
    count: []
  })
  // console.log(bplAnylatics)
  const [populationAnylatics, setPopulationAnylatics] = useState({
    fields: [],
    count: []
  })
  // console.log(populationAnylatics)
  useEffect(() => {
    const fetchhouseData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getHouseAnylatics")
          //  console.log(response.data)
        if (response.data) {
          setHouseTypeAnylatics((prevhouseTypeAnylatics) => ({
            ...prevhouseTypeAnylatics,
            fields: response.data.fields,
            count: response.data.count
          }));
        }
      } catch (error) {
        console.log(error)
      }
    }
   
    fetchhouseData()
    
  }, [])
  useEffect(() => {
    const fetchhouseData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getBplAnylatics")
          //  console.log(response.data)
        if (response.data) {
          setBplAnylatics((prevbplAnylatics) => ({
            ...prevbplAnylatics,
            fields: response.data.fields,
            count: response.data.count
          }));
        }
      } catch (error) {
        console.log(error)
      }
    }
   
    fetchhouseData()
    
  }, [])
  useEffect(() => {
    const fetchhouseData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getpopulationAnylatics")
          //  console.log(response.data)
        if (response.data) {
          setPopulationAnylatics((prevpopulationAnylatics) => ({
            ...prevpopulationAnylatics,
            fields: response.data.fields,
            count: response.data.count
          }));
        }
      } catch (error) {
        console.log(error)
      }
    }
   
    fetchhouseData()
    
  }, [])

  // const HandleModal = () => {
  //   console.log("hai")
  //   setOpen(!open)
  // }

  const closeModal = () => {
    setOpen(false)
  }

  const closeReportModal = () => {
    setIsOpen(false)
  }
  const handleReportGeneration = async (options)=>{
    const data = {
      Disaster_Type: options.Disaster_Type,
      Support_days: Number(options.Support_days),
      Infant_Count: populationAnylatics.count[0],
      Woman_Count: populationAnylatics.count[2],
      Senior_citizen: populationAnylatics.count[3],
      Kids: populationAnylatics.count[1],
      Others: populationAnylatics.count[4],
      RCC_building: houseTypeAnylatics.count[0],
      Non_RCC_building: houseTypeAnylatics.count[1]
    }
    const response = await axios.post('http://localhost:8000/disaster_support', data)
    if(response){
        setReport(response.data.response)
    }
  }

  return (
    <>
        <div className="flex flex-col justify-center items-center gap-10 py-5">
            <h1 className="text-4xl text-center p-5 uppercase text-blue-600 underline">Analytics Dashboard</h1>
            <div className="flex justify-between  container mx-auto px-16 flex-wrap">
              <div></div>
              <button
                className="px-4 py-4 mt-4  text-sm font-semibold text-white bg-[#2979B7] rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                onClick={()=>setOpen(true)}
              >
                Generate Report
              </button>
            </div>
            <div className="border-2">
              <h1 className="text-center text-3xl py-2">Demographic Analysis</h1>
              <BarChart data={populationAnylatics} title={"Population Distribution by Categories - Bar Chart"}/>
              <PieChart data={populationAnylatics} title={"Population Distribution by Categories - Pie Chart"}/>
            </div>
            <div className="border-2">
              <h1 className="text-center text-3xl py-2">House Type Distribution</h1>
              <BarChart data={houseTypeAnylatics} title={"RCC vs Non-RCC - Bar Chart"}/>
              <PieChart data={houseTypeAnylatics} title={"RCC vs Non-RCC - Pie Chart"}/>
            </div>
            <div className="border-2">
              <h1 className="text-center text-3xl py-2">Poverty Line Distribution</h1>
              <BarChart data={bplAnylatics} title={"BPL vs APL - Bar Chart"}/>
              <PieChart data={bplAnylatics} title={"BPL vs APL - Pie Chart"}/>
            </div>
        </div>
        <ModalComponent isOpen={open} onRequestClose={closeModal} callBackfunc={handleReportGeneration}/>
        <ReportModal isOpen={isOpen} onRequestClose={closeReportModal} report={report}/>
    </>
  );
};

export default Analytics;
