import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import BroductDisplay from '../Components/broductdisplay/BroductDisplay'

const Product = () => {
const {all_product}=useContext(Shopcontext)
const {productId}=useParams()
const product =all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <BreadCrums product={product}/>
      <BroductDisplay product={product}/>
        
    </div>
  )
}

export default Product