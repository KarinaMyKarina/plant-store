import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './HomePageComponents/Home';
import Products from './ProductsPageComponents/Cart/Products';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';


const Page = () => {
    return(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
    </Routes>
    )
}

export default Page;