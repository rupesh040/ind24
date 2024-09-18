import React from 'react'
import Pagenav from '../components/Pagenav'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    <Pagenav/>
    <div className="h-80 bg-[#F5F9FA] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="w-96 h-96 rounded-full border-2 absolute top-[-50%] left-[-5%]"> <div className="w-80 h-80 rounded-full bg-[#1BB69C] opacity-5 absolute top-[10%] left-[30%]"></div></div>
        <div className="w-96 h-96 rounded-full border-2 absolute top-10 right-[-10%]">
        <div className="w-80 h-80 rounded-full bg-[#1BB69C] opacity-5 absolute right-40 top-40"></div>
        </div>
        <h1 className='text-center text-6xl font-bold text-black'>Contact Us</h1>
        <p className='text-center pt-4'>Home <i className="ri-arrow-right-s-line "></i> <span className='font-semibold'> Contact us</span></p>
    </div>

    {/* text area  */}

    <div className="max-w-[1200px] mx-auto flex flex-row justify-between items-center mt-5 max-[950px]:flex-col">
        <div className=" w-96 flex flex-col justify-center gap-8">
            <h1 className='text-4xl font-bold'>We're Always Eager to Hear From You!</h1>
            <div ><h1 className='text-xl font-semibold'>Address</h1>
            <p className='text-zinc-400 pt-2'>Studio 76d, Riley Ford, North Michael chester, CF99 6QQ</p>
            </div>
            <div ><h1 className='text-xl font-semibold'>Email</h1>
            <p className='text-zinc-600 text-xl pt-2'>indservice24@gmail.com</p>
            </div>
            <div ><h1 className='text-xl font-semibold'>Phone</h1>
            <p className='text-zinc-600 text-xl pt-2'>(+091) 09876544321</p>
            </div>
            <div className="text-2xl"><i className="ri-youtube-fill p-3 border-[1px] rounded-full text-zinc-600 hover:bg-[#1BB69C] hover:text-white cursor-pointer transition-all duration-300  ease-in-out"></i>
            <i className="ri-facebook-fill p-3 border-[1px] rounded-full text-zinc-600 hover:bg-[#1BB69C] hover:text-white cursor-pointer transition-all duration-300  ease-in-out ml-2"></i>
            <i className="ri-twitter-fill p-3 border-[1px] rounded-full text-zinc-600 hover:bg-[#1BB69C] hover:text-white cursor-pointer transition-all duration-300  ease-in-out ml-2"></i>
            <i className="ri-linkedin-fill p-3 border-[1px] rounded-full text-zinc-600 hover:bg-[#1BB69C] hover:text-white cursor-pointer transition-all duration-300  ease-in-out ml-2"></i></div>
        </div>
        <form className="w-[500px] h-[650px] bg-white rounded-xl  shadow-2xl shadow-zinc-300 border-2 mt-28 p-16 max-[510px]:w-[95%] max-[510px]:p-10 ">
            <h1 className='text-2xl font-semibold text-zinc-700'>Get In Touch</h1>
            <p className='text-zinc-500'>Fill out this form for booking a consultant advising session.</p>
            <input type="text" placeholder='Your Name*' className='w-full p-2 outline-none mt-7 focus:border-[#1BB69C] border-b-2' />
            <input type="text" placeholder='Enter Your Email*' className='w-full p-2 outline-none mt-8 focus:border-[#1BB69C] border-b-2' />
            <input type="text" placeholder='Subject *' className='w-full p-2 outline-none mt-7 focus:border-[#1BB69C] border-b-2' />
            <textarea type="text" placeholder='Your Message*' rows="4" cols="50"   className='w-full p-2 outline-none mt-8 focus:border-[#1BB69C] border-b-2' ></textarea>
            <button className='bg-[#1BB69C] py-2 px-4 mt-6 rounded-lg shadow-md  text-white font-semibold' type='submit'>Submit Message</button>
        </form>
    </div>
    <div className="w-full h-96 "></div>
    <Footer/>
    </>
  )
}

export default Contact
