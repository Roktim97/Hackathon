import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = (prop) => {
    const [show, setShow] = useState(false)

    useEffect(()=>{
        setShow(prop.show)
    },[prop.show])
    
  return (
    <div className={`fixed right-0 top-0 w-96 h-[100vh] shadow-lg shadow-zinc-300 space-y-5 z-10 text-white transition-transform duration-200 ease-linear bg-blue-950 ${show? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center font-semibold text-3xl px-2 py-4 shadow-lg">
            <div className="w-[80%] text-center">DRP Tool</div>
        </div>
        <div className="flex flex-col items-center">
            <Link to={"/dashboard"} className="p-2 px-5 uppercase text-xl cursor-pointer shadow-md border-zinc-300 w-full">Analytics Dashboard</Link>
            <Link to={"/"} className="p-2 px-5 uppercase text-xl cursor-pointer shadow-md border-zinc-300 w-full">Survey</Link>
            <a className="p-2 px-5 uppercase text-xl cursor-pointer shadow-md border-zinc-300 w-full">Generate Report</a>
        </div>
    </div>
  )
}

export default Navbar