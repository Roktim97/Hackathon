import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import axios from "axios";
import { useState, useEffect } from 'react'


const Analytics = () => {
  const [houseTypeAnylatics, setHouseTypeAnylatics] = useState({
    fields: "",
    count: ""
  })
  console.log(houseTypeAnylatics)
  const [bplAnylatics, setBplAnylatics] = useState({
    fields: "",
    count: ""
  })
  console.log(bplAnylatics)
  const [populationAnylatics, setPopulationAnylatics] = useState({
    fields: "",
    count: ""
  })
  console.log(populationAnylatics)
  useEffect(() => {
    const fetchhouseData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getHouseAnylatics")
           console.log(response.data)
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
           console.log(response.data)
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
           console.log(response.data)
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

  return (
    <>
        <div>
            <h1 className="text-4xl text-center p-5 uppercase text-blue-600 underline">Analytics Dashboard</h1>
            <BarChart />
            <PieChart/>
            <BarChart/>
            <PieChart/>
            <BarChart/>
            <PieChart/>
        </div>
    </>
  );
};

export default Analytics;
