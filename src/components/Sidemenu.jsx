import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sidemenu = ({close,closeLogin}) => {
    const navigate = useNavigate();
    const [service,setService] = useState(true)
    const serviceclose = () =>{
        setService(prevState => !prevState);
    }
    const closeSide = () =>{
        close();
        closeLogin();
    }
  return (
    <div className='fixed w-full h-full  bg-[#1c1c1c52] left-0 top-0 z-20 backdrop-blur-sm' onClick={close}>
        <div className=" h-full w-[70%] bg-white" onClick={(e) => e.stopPropagation()}>
        <h1 className='text-black text-2xl flex justify-between p-5 font-bold border-b-[1px] border-zinc-300'> <span>LOGO</span> <span className='cursor-pointer' onClick={close}>X</span> </h1>
        <div className="">
        <div className='cursor-pointer hover:text-[#1AB69D] text-black text-2xl px-4 py-1 font-semibold hover:shadow-md border-[1px] hover:border-zinc-300 m-2 rounded-lg' onClick={() => navigate("/")}>Home</div>
        <div className='cursor-pointer  text-black text-2xl px-4 py-1 font-semibold hover:shadow-md border-[1px] border-zinc-200 m-2 rounded-lg '>
            <div className="flex justify-between hover:text-[#1AB69D]" onClick={serviceclose}> <span>Service</span> <span>+</span></div>
            {!service?
                <div className=" text-[18px] py-3 flex flex-col gap-1 ">
                <p className='hover:text-[#1AB69D] transition-all ease-in-out '>AC Repair</p>
                <p className=' hover:text-[#1AB69D] transition-all ease-in-out'>AC Instal</p>
                <p className='hover:text-[#1AB69D] transition-all ease-in-out'>AC Repair</p>
                <p className=' hover:text-[#1AB69D] transition-all ease-in-out'>AC Instal</p>
                <p className='hover:text-[#1AB69D] transition-all ease-in-out'>AC Repair</p>
                <p className=' hover:text-[#1AB69D] transition-all ease-in-out'>AC Instal</p>
                <p className='hover:text-[#1AB69D] transition-all ease-in-out'>AC Repair</p>
                <p className=' hover:text-[#1AB69D] transition-all ease-in-out'>AC Instal</p>

        </div>:""
            }


         </div>
        <div className='cursor-pointer hover:text-[#1AB69D] text-black text-2xl px-4 py-1 font-semibold hover:shadow-md border-[1px] border-zinc-300 m-2 rounded-lg'>Contact us</div>
        <div className='cursor-pointer hover:text-[#1AB69D] text-black text-2xl px-4 py-1 font-semibold hover:shadow-md border-[1px] border-zinc-300 m-2 rounded-lg' onClick={() => navigate("/blog")}>Blog</div>
        <div className='cursor-pointer hover:text-[#1AB69D] text-black text-2xl px-4 py-1 font-semibold hover:shadow-md border-[1px] border-zinc-300 m-2 rounded-lg'>About</div>
        <div className='cursor-pointer   text-2xl px-4 py-2 bg-[#1CB69B] text-center text-white font-semibold hover:shadow-md  mx-2 my-7 rounded-lg' onClick={closeSide}>Login</div>
        </div>
        </div>
    </div>
  )
}

export default Sidemenu
