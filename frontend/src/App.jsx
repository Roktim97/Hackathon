import './App.css'
// import Plot from 'react-plotly.js';
import { Route,Routes } from 'react-router-dom'
import SurveyPost from './pages/surveyPost'

function App() {

  return (
    <>
   <Routes>
    <Route path="/" element={<SurveyPost />}/>
   </Routes>
    </>
  )
}

export default App
