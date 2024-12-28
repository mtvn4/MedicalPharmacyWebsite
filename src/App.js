import Home from './NavSides/Home';
import { useState } from 'react';
import Contact from './NavSides/Contact';
import About from './NavSides/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './NavSides/NavBar';
import Cart from './NavSides/Cart';
import './Styles/App.css'

function App() {
  const [cart,setCart]=useState([])
  const [value,setValue]=useState("")
  return (
    <>
          <BrowserRouter>
          <NavBar value={value} setValue={setValue} cart={cart}/>
            <Routes>
              <Route path='/' element={<Home cart={cart} setCart={setCart} value={value} setValue={setValue} />}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}/>
            </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
