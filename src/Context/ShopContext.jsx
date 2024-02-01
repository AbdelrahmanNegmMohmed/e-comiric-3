import React, { createContext } from 'react'
import all_product from "../Components/Assets/all_product"

export const Shopcontext = createContext(null)
const ShopContextprovider = (props) => {
    const contextvalue ={all_product}
  return (
    <Shopcontext.Provider value={contextvalue}>
        {props.children}
    </Shopcontext.Provider>
  )
}

export default ShopContextprovider;