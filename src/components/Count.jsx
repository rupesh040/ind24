import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import React, { useEffect } from 'react'

const Count = () => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
      const animation = animate(count, 100, { duration: 10 });

      return animation.stop;
    }, []);

    return(
        <div className=" max-w-[1200px] mx-auto flex gap-16 flex-wrap justify-center my-32 items-center">
            <div className="w-40 h-20 flex flex-col text-center gap-2"> <h1 className='text-5xl text-[#1AB69D] font-bold'>23.9K</h1>
            <p>STUDENT ENROLLED
            </p></div>
            <span className='w-[1px] h-16 bg-zinc-300 max-[1080px]:hidden'></span>
            <div className="w-40 h-20 flex flex-col text-center gap-2"> <h1 className='text-5xl text-[#EE4A62] font-bold'>23.9K</h1>
            <p>STUDENT ENROLLED
            </p></div>
            <span className='w-[1px] h-16 bg-zinc-300 max-[1080px]:hidden'></span>
            <div className="w-40 h-20 flex flex-col text-center gap-2"> <div className='text-5xl text-[#8E56FF] font-bold flex flex-row text-center pl-4'> <motion.h1>{rounded}</motion.h1>%</div>
            <p>SATISFACTION RATE
            </p></div>
            <span className='w-[1px] h-16 bg-zinc-300 max-[1080px]:hidden'></span>
            <div className="w-40 h-20 flex flex-col text-center gap-2"> <h1 className='text-5xl text-[#F8941F] font-bold'>23.9K</h1>
            <p>STUDENT ENROLLED
            </p></div>

       </div>
    )
}

export default Count
