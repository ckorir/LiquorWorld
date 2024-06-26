import React, { useState } from 'react';
import '../css/Navbar.css'

import logo from '../components/Assets/logo.png'
import cart_icon from '../components/Assets/cart_icon.png'
import { Link } from 'react-router-dom';


export default function Navbar() {

  const [menu,setMenu] = useState("shop");

  return (

    <div className="navbar">

      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to="/womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>

      <div className="nav-login-cart">
        <Link style={{textDecoration:'none'}} to="/login"><button>Login</button></Link>
        <Link style={{textDecoration:'none'}} to="/cart"><img src={cart_icon} alt="cart_icon" /></Link>
        <div className="nav-cart-count">0</div>
      </div>

    </div>
  )
}
