
import { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { AppContext } from "./context/AppProvider";

import Home from './router/Home';
import About from './router/About';
import Products from './router/Products';
import Contact from './router/Contact';
import Cart from './router/Cart';
import SingleProduct from './router/SingleProduct';
import NoPage from "./router/NoPage";

// Footersection
import FooterSection from "./component/FooterSection";


// to get the data in localStorage 

const getLocalItems = (setCart, cart, item) => {
  let getList = localStorage.getItem('addCartItems');

  if (getList) {
    return JSON.parse(getList);
  }

  if (cart.indexOf(item) !== -1) {

    return setCart([...cart, item]);
  }

  else {
    
    return [];
  }

};



function App() {

  const [cart, setCart] = useState(getLocalItems());

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return

    setCart([...cart, item]);
  };


  const handleChange = (data, n) => {
    const indx = cart.indexOf(data);
    const arrBox = cart
    arrBox[indx].quantity += n;

    if (arrBox[indx].quantity === 0) {
      arrBox[indx].quantity = 1;
    }

    setCart([...arrBox]);
  };



  // to add the data in localStorage 
  useEffect(() => {
    localStorage.setItem('addCartItems', JSON.stringify(cart));
  }, [cart]);


  return (
    <>
      <BrowserRouter>
        <Navbar count={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct handleClick={handleClick} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>


    </>
  );
}

export default App;


