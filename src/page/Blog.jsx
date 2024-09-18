import React, { useState } from 'react'
import Heading from '../components/Heading'
import Pagenav from '../components/Pagenav'
import ProductService from '../components/ProductService'
import Productreview from '../components/Productreview'
import Productbrand from '../components/Productbrand'
import Repairman from '../components/Repairman'
import Productfooter from '../components/Productfooter'
import Count from '../components/Count'
import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <>
    <Pagenav/>
    <Heading/>
    <ProductService/>
    <Productreview/>
    <Productbrand/>
    <Repairman/>
<Count/>
<Productfooter/>
    </>
  )
}

export default Blog
