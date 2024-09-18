import React from 'react'
import Head from "../components/Head";
import Brand from "../components/Brand";
import Text from "../components/Text";
import Scard from "../components/Scard";
import Video from "../components/Video";
import View from "../components/View";
import Service from "../components/Service";
import Brands from "../components/Brands";
import Zoom from "../components/Zoom";
import Build from "../components/Build";
import Responsive from "../components/Responsive";
import Repair from "../components/Repair";
import Detailcard from "../components/Detailcard";
import Textcarousal from "../components/Textcarousal";
import Review from "../components/Review";
import Bottomdetail from "../components/Bottomdetail";
import Footer from "../components/Footer";
import { motion } from "framer-motion"


const Home = () => {
  return (
    <>
      <Head/>
      <Brand/>
   <Text/>
   <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between max-[1180px]:justify-around max-[1180px]:gap-5" >
    <Scard/>
    <Scard/>
    <Scard/>
   </div>
   <Video/>
   <View/>
   <Service/>
   <Brands/>
   <Zoom/>
   <Build/>
   <Responsive/>
   <Repair/>
   {/* {
    cate_data.map((item,ind) => {
        return <Detailcard key={item.id || ind} img={item.img} name={item.category_name} id={item.id} detail={item.detail} />
    })
   } */}
   <Repair/>
<Textcarousal/>
<Review/>
<Bottomdetail/>
<Footer/>
    </>
  )
}

export default Home
