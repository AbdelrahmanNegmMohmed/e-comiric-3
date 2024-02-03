import React, { useContext } from 'react'
import "./CartItems.css"
import { Shopcontext } from '../../Context/ShopContext'
import remov_icon from "../Assets/cart_cross_icon.png"

const CartItemsend = () => {
    const {all_product,cartItems,removeFromCart}=useContext(Shopcontext)
    console.log(all_product,"all products");
    console.log(cartItems,"cart items");
  return (
    <div className='cartitems'>
          <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
    </div>
    <hr />
    <div>
    {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                    <div className='cartitem-format'>
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>{e.new_price*cartItems[e.id]}</p>
                        <img src={remov_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                   <hr />
                 </div>
            }
        })}

    </div>
       

    </div>
  )
}

export default CartItemsend;