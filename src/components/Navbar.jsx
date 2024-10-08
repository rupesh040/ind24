import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css';
import Sidemenu from './Sidemenu';
import Register from '../components/Register';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState(true);
    const [sideMenu,setSideMenu] = useState(true);
    const[login,setLogin] = useState(false)
    const navigate = useNavigate();
    const close = () =>{
        setSideMenu(prevState => !prevState);
    }
    const closeLogin = () =>{
        setLogin(prevState => !prevState);
    }
  return (
    <nav className='flex flex-row justify-between  min-[1080px]:px-20 max-[1080px]:px-5  border-b-[1px] border-zinc-600  items-center text-white max-[1080px]:py-5'>
        <div className="w-40 h-40 rounded-full bg-[#1AB69D] absolute top-[-10%] left-[20%] blur-[100px] z-0"></div>
        <div className="w-40 h-40 rounded-full bg-pink-500 absolute top-[-10%] left-[28%] blur-[100px] z-0"></div>
        <h1 className='text-4xl font-bold'>LOGO</h1>
        <div className=" flex flex-row gap-7 text-xl z-[1] max-[1080px]:hidden" >
             <div className='cursor-pointer hover:text-[#1AB69D] py-5' onClick={() => navigate("/")}>Home</div>
             <div className='cursor-pointer hover:text-[#1AB69D] group transition-all ease-in-out  py-5 relative' onMouseEnter={()=>setMenu(false)} onMouseLeave={()=>setMenu(true)}>Service▾
            {!menu?  <div className=" absolute top-[100%]  left-0 w-[400px] bg-white py-3 px-10 text-black flex-col gap-3 flex flex-wrap h-[200px]  ">
                <p className='hover:text-[#1AB69D] transition-all ease-in-out'>AC Repair</p>
                <p className=' hover:text-[#1AB69D] transition-all ease-in-out'>AC Instal</p>
                <p className='hover:text-[#1AB69D] transition-all ease-in-out'>AC Repair</p>
                <p className=' hover:text-[#1AB69D] transition-all ease-in-out'>AC Instal</p>
                <p className='hover:text-[#1AB69D] transition-all ease-in-out'>AC Repair</p>
                <p className=' hover:text-[#1AB69D] transition-all ease-in-out'>AC Instal</p>
                <p className='hover:text-[#1AB69D] transition-all ease-in-out'>AC Repair</p>
                <p className=' hover:text-[#1AB69D] transition-all ease-in-out'>AC Instal</p>

        </div>:""}

             </div>
             <div className='cursor-pointer hover:text-[#1AB69D] py-5' onClick={() => navigate("/contact")}>Contact us</div>
             <div className='cursor-pointer hover:text-[#1AB69D] py-5' onClick={() => navigate("/blog")}>Blog</div>
             <div className='cursor-pointer hover:text-[#1AB69D] py-5'>About</div>
        </div>
        <div className=" py-3 px-5 rounded-md bg-green-400 max-[1080px]:hidden cursor-pointer" onClick={closeLogin}>Login</div>
        <i className="ri-menu-line min-[1080px]:hidden text-2xl cursor-pointer hover:text-zinc-900 hover:bg-zinc-400 px-3 rounded-lg py-1" onClick={()=>{setSideMenu(false)}}></i>
        {    !sideMenu?<Sidemenu close={close} closeLogin={closeLogin}/>:""}
        {login?
        <Register close={closeLogin}/>:null
        }

    </nav>
  )
}

export default Navbar
