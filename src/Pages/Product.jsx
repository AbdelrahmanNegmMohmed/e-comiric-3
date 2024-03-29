import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import BroductDisplay from '../Components/broductdisplay/BroductDisplay'
import { Shopcontext } from '../Context/ShopContext'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
const Product = () => {
const {all_product}=useContext(Shopcontext)
const {productId}=useParams()
const product =all_product.find((e)=>e.id===Number(productId))
console.log(product,"products");
  return (
    <div>
      <BreadCrums product={product}/>
      <BroductDisplay product={product}/>
      <RelatedProducts/>
        
    </div>
  )
}

export default Product