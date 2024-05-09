import './App.css'
import { Route,Routes } from 'react-router-dom'
import SurveyPost from './pages/surveyPost'
import Navbar from './components/Navbar'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'
import Analytics from './pages/Analytics';

function App() {
  const [show, setShow] = useState(false)

  const toggleNav = () => {
    setShow(!show)
  }

  return (
    <div className='relative'>
      <RxHamburgerMenu className="w-10 h-10 absolute right-4 top-4 z-20 cursor-pointer" onClick={toggleNav}/>
      <Navbar show={show}/>
      <Routes>
        <Route path="/" element={<SurveyPost />}/>
        <Route path="/dashboard" element={<Analytics />}/>
      </Routes>
    </div>
  )
}

export default App
