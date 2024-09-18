import React, { useEffect, useState } from 'react'
import Pagenav from '../components/Pagenav'
import Productfooter from '../components/Productfooter'
import 'remixicon/fonts/remixicon.css';



const Product = () => {
    const[skeleton,setSkeleton] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setSkeleton(true)
        }, 500);
    })
  return (
    <>
    <div className="bg-[#F7FCFF]  ">
         <Pagenav/>
         {!skeleton?<div className="flex w-full flex-col gap-4  justify-center items-center">
          <div className="skeleton h-10  mt-20 w-96"></div>
           <div className="skeleton h-4 w-80"></div>
         </div>:<>
     <h1 className='text-center mt-20 text-black text-5xl font-bold'>Archives: Courses</h1>
     <p className='text-lg text-zinc-600 text-center p-5 font-semibold tracking-wider'>Inatallition - Repair - service </p>
</>}

     <div className=" max-w-[1300px] mx-auto my-20 flex gap-10 max-[1080px]:flex-col max-[1080px]:px-10 max-[600px]:px-5  ">
        {!skeleton? <div className="skeleton w-[300%]   h-[500px]  max-[1080px]:w-full  border-box shadow-xl "></div>:  <div className=" bg-[url('https://demo.edublink.co/wp-content/uploads/2023/05/girl-5.webp')] bg-black w-[300%] bg-cover  h-[500px] rounded-xl max-[1080px]:w-full  border-box shadow-xl "></div>}

        <div className=" flex flex-col gap-3">
         {!skeleton?<div className="skeleton h-10 w-80"></div>:<h1 className='text-3xl text-black font-bold'>Air Conditioner </h1>}

        <div className=" flex gap-5 flex-wrap">
        {!skeleton?<div className="skeleton h-5 w-24"></div>:<p className='text-[#1eb695]'> <span className=' font-bold pr-1'>✓</span>  Installation</p>}
        {!skeleton?<div className="skeleton h-5 w-24"></div>:<p className='text-[#1eb695]'> <span className=' font-bold pr-1'>✓</span>  Repair</p>}
        {!skeleton?<div className="skeleton h-5 w-24"></div>:<p className='text-[#1eb695]'> <span className=' font-bold pr-1'>✓</span>  Service</p>}
        </div>
        {!skeleton?<div className="skeleton h-5 w-80"></div>:
        <div className='items-center flex flex-row gap-3'>
            <div className="rating rating-md">
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"/>
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>(100+ customer reviews)
        </div>}

        {!skeleton?<div className="skeleton h-8 w-32 py-5"></div>:<h1 className='text-xl font-bold py-5 border-b-[1px] border-zinc-300'>$499/-</h1>}
        <p className='text-zinc-500'> <span className='text-sm font-bold'>Service Detail-</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, perferendis. Cum tempora pariatur sit adipisci corrupti molestiae dignissimos autem doloremque consectetur quia cupiditate iusto, laborum libero sequi dolores deserunt minus et placeat architecto in at? Quasi similique atque veniam esse doloremque inventore incidunt eaque impedit voluptate nemo exercitationem, tempore alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat assumenda ducimus dolor molestiae accusantium expedita dolorum, temporibus dolorem sequi distinctio animi perferendis veniam ullam, dicta quos laudantium, veritatis ad eligendi deserunt dolores? Ratione aspernatur, dolore repellendus molestias voluptas reiciendis qui nam soluta dignissimos alias perspiciatis, illum dicta nobis tempora consequuntur.</p>
        <button className='bg-[#1eb695] py-4 font-bold text-white rounded-md my-5'>Book Now</button>

     </div>
     </div>

{/* crosaul  */}
<h1 className='pl-10 font-bold text-lg py-3'>Blogs  </h1>
<div className=" scroll-smooth smooth  w-[90%] mx-auto rounded-3xl border-[5px]  mb-20 border-zinc-100 h-96 bg-white px-5 py-10 overflow-x-scroll flex flex-row gap-5 relative">

    <div className="min-w-80 w-80 h-full bg-white border-[1px] border-zinc-200 rounded-lg shadow-lg overflow-hidden zoom">
        <h1 className='text-[15px] font-semibold flex items-center justify-between py-3 px-5 cursor-pointer'>   Air conditioner <i className="ri-share-box-line text-zinc-500  "></i></h1>
        <div className="w-full h-[100%] bg-purple-300 bg-[url('https://demo.edublink.co/wp-content/uploads/2023/05/girl-5.webp')] bg-cover ">
        </div>
    </div>
    <div className="min-w-80 w-80 h-full bg-white border-[1px] border-zinc-200 rounded-lg shadow-lg overflow-hidden">
        <h1 className='text-[15px] font-semibold flex items-center justify-between py-3 px-5 cursor-pointer'>   Air conditioner <i className="ri-share-box-line text-zinc-500  "></i></h1>
        <div className="w-full h-[100%] bg-purple-300 bg-[url('https://demo.edublink.co/wp-content/uploads/2023/05/girl-5.webp')] bg-cover"></div>
    </div>
    <div className="min-w-80 w-80 h-full bg-white border-[1px] border-zinc-200 rounded-lg shadow-lg overflow-hidden">
        <h1 className='text-[15px] font-semibold flex items-center justify-between py-3 px-5 cursor-pointer'>   Air conditioner <i className="ri-share-box-line text-zinc-500  "></i></h1>
        <div className="w-full h-[100%] bg-purple-300 bg-[url('https://demo.edublink.co/wp-content/uploads/2023/05/girl-5.webp')] bg-cover"></div>
    </div>
    <div className="min-w-80 w-80 h-full bg-white border-[1px] border-zinc-200 rounded-lg shadow-lg overflow-hidden">
        <h1 className='text-[15px] font-semibold flex items-center justify-between py-3 px-5 cursor-pointer'>   Air conditioner <i className="ri-share-box-line text-zinc-500  "></i></h1>
        <div className="w-full h-[100%] bg-purple-300 bg-[url('https://demo.edublink.co/wp-content/uploads/2023/05/girl-5.webp')] bg-cover"></div>
    </div>
    <div className="min-w-80 w-80 h-full bg-white border-[1px] border-zinc-200 rounded-lg shadow-lg overflow-hidden">
        <h1 className='text-[15px] font-semibold flex items-center justify-between py-3 px-5 cursor-pointer'>   Air conditioner <i className="ri-share-box-line text-zinc-500  "></i></h1>
        <div className="w-full h-[100%] bg-purple-300 bg-[url('https://demo.edublink.co/wp-content/uploads/2023/05/girl-5.webp')] bg-cover"></div>
    </div>
</div>



{/* Description */}

     <div role="tablist" className="tabs tabs-lifted max-w-[1280px] mx-auto px-10 mb-10 max-[600px]:px-5">
  <input type="radio" name="my_tabs_2" role="tab" className="tab font-bold"  aria-label="Description" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab incidunt veniam voluptatum ipsam maxime odio? Quidem totam laudantium necessitatibus iure voluptas! Delectus voluptatem alias provident quo eos fugiat enim, animi amet vitae praesentium numquam aut aperiam quis, at officiis tenetur aliquam. Itaque at quos quo tenetur doloribus et, deserunt veritatis aut saepe, laudantium laboriosam animi delectus iste pariatur similique optiofugiat. Blanditiis repudiandae molestiae ratione sapiente ullam eaque eligendi expedita, assumenda dolore evenietillum labore mollitia aperiam ea sequi quae facilis soluta accusantium doloribus nihil. Quos laborum, nisi aut hic numquam consequatur reiciendis cumque doloremque obcaecati repellat eveniet aliquam, quibusdam et, modi est pariatur. Accusamus, veritatis officia. Temporibus hic adipisci aliquid, eos provident at qui harum consequatur ex ipsum laudantium delectus voluptate omnis recusandae totam reiciendis blanditiis? Ut animi, eaque corrupti nam totam minus odio fuga incidunt quasi, aspernatur neque iste eligendi numquam inventore, autem possimus qui eum. Id officiis, autem impedit, quos iusto ut accusantium inventore quae eveniet libero eius architecto qui labore ullam animi repudiandae consequuntur explicabo quod quas voluptates laborum vero, provident suscipit dolores? Aliquid, est deleniti. Maiores recusandae temporibus sit ratione culpa possimus natus, repudiandae non laboriosam tempore corrupti doloribus explicabo eveniet veritatis delectus quasi saepe dolore alias expedita perspiciatis est a et excepturi! Placeat et necessitatibus illo aspernatur doloremque, sunt iusto magnam neque ratione aliquid distinctio vero, ab quas q
  </div>

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab font-bold"
    aria-label="Reviews"
    defaultChecked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 ">
    <div className="flex gap-10 justify-evenly flex-wrap">
    <div className="max-w-96 ">
    <div className=" flex items-center gap-2">
    <img src="" className='w-10 h-10 bg-purple-300 rounded-full' alt="" />
    <h1 className='text-lg font-semibold'>Rupesh</h1>
    </div>
    <div className="rating rating-md my-2">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-7"
    className="mask mask-star-2 bg-orange-400"/>
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, repellendus tempore nostrum eius illum autem similique dolorum voluptatum dolor necessitatibus.</p>
    </div>
    <div className="max-w-96">
    <div className=" flex items-center gap-2">
    <img src="" className='w-10 h-10 bg-purple-300 rounded-full' alt="" />
    <h1 className='text-lg font-semibold'>Rupesh</h1>
    </div>
    <div className="rating rating-md m-2">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-7"
    className="mask mask-star-2 bg-orange-400"/>
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, repellendus tempore nostrum eius illum autem similique dolorum voluptatum dolor necessitatibus.</p>
    </div>
    <div className="max-w-96">
    <div className=" flex items-center gap-2">
    <img src="" className='w-10 h-10 bg-purple-300 rounded-full' alt="" />
    <h1 className='text-lg font-semibold'>Rupesh</h1>
    </div>
    <div className="rating rating-md my-2">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-7"
    className="mask mask-star-2 bg-orange-400"/>
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, repellendus tempore nostrum eius illum autem similique dolorum voluptatum dolor necessitatibus.</p>
    </div>
    <div className="max-w-96">
    <div className=" flex items-center gap-2">
    <img src="" className='w-10 h-10 bg-purple-300 rounded-full' alt="" />
    <h1 className='text-lg font-semibold'>Rupesh</h1>
    </div>
    <div className="rating rating-md my-2">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-7"
    className="mask mask-star-2 bg-orange-400"/>
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, repellendus tempore nostrum eius illum autem similique dolorum voluptatum dolor necessitatibus.</p>
    </div>
    </div>

  </div>
</div></div>
<Productfooter/>
    </>
  )
}

export default Product
