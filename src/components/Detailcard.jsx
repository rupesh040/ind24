import React, { useState } from 'react'
import { _data } from '../assets/data'


const Detailcard = ({id ,img ,detail}) => {
  return (
    <div className='p-5 max-w-[1280px] mx-auto flex  justify-between max-[1080px]:overflow-hidden relative items-center max-[1080px]:flex-col gap-10 mt-32'>
    <div className=" w-[50%] max-[1080px]:w-full">
        <h1 className='text-5xl font-bold py-3 max-[600px]:text-4xl'>Zoom Integration</h1>
        <p className='text-xl text-black tracking-wide pt-5 max-[600px]:text-[17px] max-[600px]:tracking-normal'>
        Zoom is integrated into EduBlink to help schools, organizations to enhance their online programs. Learners can access to online high-quality video sessions through desktop and mobile. You can simply connect with Zoom Meetings directly from your LMS.
        </p>
        {/* <div className=" grid grid-cols-2 my-5 ">
        {
            detail.map((item,ind) => {
             return  <p className='text-[14px] flex '> <img key={ind} src="https://edublink.co/images/icon-1.svg" className='w-10' alt=""  /> 12 Unquies Style</p>
            })
        }</div> */}
    </div>
    <div className=" relative bg-green-200 p-5 box-border rounded-2xl">
    <img src={img} className='' alt=""  />
    </div>
</div>
  )
}

export default Detailcard
