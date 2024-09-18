import React from 'react'
import Pagenav from '../components/Pagenav'

const Blogpage = () => {
  return (
    <>
    <Pagenav/>
    <div className=" w-full h-96 bg-orange-400 flex justify-center items-center flex-col">
        <h1 className='text-3xl font-bold text-black  '>Blog Page for Ac Repair</h1>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati placeat ipsum repellat odit inventore aliquam animi minus eaque dolores excepturi.</p>
    </div>
    </>
  )
}

export default Blogpage
