import React, { useContext } from 'react'
import "./BroductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const BroductDisplay = (props) => {
    const {product} =props;
    const rate =product.id*2.5

  return (
      <div className='broductdisplay'>
        <div className="broductdisplay-left">
            <div className="broductdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="broductdisplay-img">
                <img className='broductdisplay-min-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="broductdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt=""/>
                <p>({rate})</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="brouductdisplay-right-discription">

            </div>
            <div className="broductdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button  >ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt , Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest, </p>
              
            

        </div>

    </div>
  )
}

export default BroductDisplay