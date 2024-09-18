import React from 'react'
import Card from './Card'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
const Service = () => {
    const navigate = useNavigate();
    
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };

      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
  return (
    <div className='mt-40 bg-white relative w-full  z-10 py-10 overflow-hidden'>
        <h1 className='text-[300px] font-bold text-center text-[#F4F7F8] opacity-90 absolute  left-[50%] translate-x-[-50%] translate-y-[-50%] top-[8%] z-[-1] max-[1180px]:hidden '> Service</h1>
        <h1 className='text-[100px] text-center text-[#25B78A] z-20 font-bold max-[600px]:text-5xl'>22+</h1>
        <p className='text-center text-5xl font-bold max-w-[800px] mx-auto relative max-[800px]:text-3xl '>Pre-Made Creative Online Course
        Education Homepage <span className='w-40 h-10 bg-white opacity-80 absolute bottom-10 blur-[10px]'></span><span className='w-40 h-10 bg-white  absolute left-32 bottom-[-10px] blur-[20px]'></span></p>
        <p className='text-center w-96 mx-auto py-5'>Install any demo or template with a single click. You can mix
        and match all the demos and templates.</p>
        <motion.div className=" flex flex-wrap justify-around gap-10 " variants={container}
    initial="hidden"
    animate="visible">
     {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
      <motion.div className='w-[400px] p-7 rounded-xl  bg-white shadow-[0_0px_60px_-15px_rgba(0,0,0,0.1)]  hover:shadow-[0_10px_60px_-15px_rgba(0,0,0,0.2)] hover:translate-y-[-20px] transition-all ease-in-out ' variants={item} key={index} onClick={() => navigate("/products")}>
      <img src="https://edublink.co/images/pv-demo/home-01.webp" alt=""  className='cursor-pointer' />
      <h1 className='text-2xl font-bold text-zinc-800 pt-5 hover:text-green-700 cursor-pointer transition-all ease-in-out'>EduBlink Education</h1>
      <p className='font-semibold text-zinc-400'>Main Demo</p>
    </motion.div>
    ))}
     </motion.div>
    </div>
  )
}

export default Service
