import React from 'react'

const Repairman = () => {
  return (
    <>
        <p className='text-center py-2'>INSTRUCTORS</p>
        <h1 className='text-5xl font-bold text-center'>Course Instructors</h1>
        <div className="max-w-[1200px] mx-auto my-20 flex gap-10 justify-center flex-wrap">
            <div className="p-5 pt-3 bg-white shadow-xl w-72 flex  justify-center flex-col  rounded-xl ">
                <div className="w-60 h-60 bg-zinc-400 my-2 rounded-lg relative bg-[url('https://demo.edublink.co/wp-content/uploads/2023/05/girl-5.webp')]">
                    <details className='absolute top-0 right-0 z-20  man'>
                        <summary className='text-xl py-1 px-3 rounded-lg cursor-pointer  list-none m-2' >!</summary>
                        <p className='absolute top-12  w-60 left-[-100px] rounded-2xl  p-5 shadow-2xl bg-white backdrop-blur-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur harum totam optio hic id ducimus similique facere voluptas ea?</p>
                    </details>
                </div>
                <h1 className='font-bold text-xl'>Lorem, ipsum.</h1>
                <p className='text-lg font-semibold text-zinc-500'>Installation</p>
                <p className='text-zinc-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, rem.</p>
            </div>
            <div className="p-5 pt-3 bg-white shadow-xl w-72 flex  justify-center flex-col  rounded-xl ">
                <div className="w-60 h-60 bg-zinc-400 my-2 rounded-lg relative bg-[url('https://demo.edublink.co/wp-content/uploads/2023/05/girl-5.webp')]">
                    <details className='absolute top-0 right-0 z-20 man '>
                        <summary className='text-xl py-1 px-3 rounded-lg cursor-pointer  list-none m-2' >!</summary>
                        <p className='absolute top-12  w-60 left-[-100px] rounded-2xl  p-5 shadow-2xl bg-white backdrop-blur-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur harum totam optio hic id ducimus similique facere voluptas ea?</p>
                    </details>
                </div>
                <h1 className='font-bold text-xl'>Lorem, ipsum.</h1>
                <p className='text-lg font-semibold text-zinc-500'>Installation</p>
                <p className='text-zinc-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, rem.</p>
            </div>
            <div className="p-5 pt-3 bg-white shadow-xl w-72 flex  justify-center flex-col  rounded-xl ">
                <div className=" bg-[url('https://demo.edublink.co/wp-content/uploads/2023/05/girl-5.webp')] w-60 h-60 bg-zinc-400 my-2 rounded-lg relative">
                    <details className='absolute top-0 right-0  z-20 man'>
                        <summary className='text-xl py-1 px-3 rounded-lg cursor-pointer  list-none m-2' >!</summary>
                        <p className='absolute top-12  w-60 left-[-100px] rounded-2xl  p-5 shadow-2xl bg-white backdrop-blur-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequuntur harum totam optio hic id ducimus similique facere voluptas ea?</p>
                    </details>
                </div>
                <h1 className='font-bold text-xl'>Lorem, ipsum.</h1>
                <p className='text-lg font-semibold text-zinc-500'>Installation</p>
                <p className='text-zinc-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, rem.</p>
            </div>
        </div>
    </>
  )
}

export default Repairman
