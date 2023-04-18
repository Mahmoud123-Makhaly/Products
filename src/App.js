import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider';
import ProductList from './components/ProductList/ProductList';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/ProductDetails/ProductDetails';
import About from './components/About/About';
const App = () => {
  return (
    <div>
<Navbar/>

<Routes>
<Route element={<div><Slider/><ProductList/></div>} path='/'/>
 <Route path='/about' element={<About/>}/>
<Route element={<ProductDetails/>} path='/product/:id'/>
</Routes>
    </div>
  )
}

export default App