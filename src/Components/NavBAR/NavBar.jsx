import React, { useContext, useRef, useState } from 'react'
import './NavBar.css'
import logo from'../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../Context/ShopContext'
import nav_dropdown from "../Assets/OIP.jpg"

function NavBar() {
  
    const [menu,setMenu] = useState("shop")
    const {GetTotalCartItems}=useContext(Shopcontext)
    const menuRef=useRef()
    const dropdown_toggle = (e) =>{
      menuRef.current.classList.toggle('nav-menu-visible')
      e.target.classList.toggle('open')

    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
        <img src={logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <img className='nav-dropdowen' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:"#626262" }} to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none' , color:"#626262"}} to="/mens">men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none' , color:"#626262"}} to="/womens">women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none' , color:"#626262"}} to="/kids">kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
          
        <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>  
       <Link to="/cart"> <img src={cart_icon} alt=''/></Link> 
            <div className='nav-cart-count'>{GetTotalCartItems()}</div>

        </div>
        
    </div>
  )
}

export default NavBar;