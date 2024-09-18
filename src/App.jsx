import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './page/Home';
import About from './page/About';
import Products from './page/Products';
import Blog from './page/Blog';
import Blogpage from './page/Blogpage';


function App() {
  return (<>
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogpage" element={<Blogpage />} />
</Routes>
    </>
  )
}

export default App
