import './App.css'
// import Plot from 'react-plotly.js';
import { Route,Routes } from 'react-router-dom'
import SurveyPost from './pages/surveyPost'
import Navbar from './components/Navbar'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)

  const toggleNav = () => {
    setShow(!show)
  }

  return (
    <div className='relative'>
      <RxHamburgerMenu className="w-10 h-10 absolute right-4 top-4 z-10" onClick={toggleNav}/>
      <Navbar show={show}/>
      <Routes>
        <Route path="/" element={<SurveyPost />}/>
      </Routes>
    </div>
  )
}

export default App
