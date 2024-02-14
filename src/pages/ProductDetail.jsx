import React, { createContext } from 'react'
import { useParams } from 'react-router'
import Features from '../components/Features'
import rayan from '../components/Utils'
import Product from '../components/Product'
import Pics from '../components/Pics'
import Other from '../components/Other'
import { useGlobalContext } from '../Context'
export const secondContext = createContext()
const ProductDetail = () => {
  const context = useGlobalContext()
  const {addToCart,count} = context 
    const {id,id2} = useParams()
    const prodDetails = rayan.pagesList.find((pro)  => pro.id === id)
    const reo = prodDetails?.content?.find((item) => {
       if(item.id === parseInt(id2)) {
         return item
       }
    })
  return (
    <div>
        <secondContext.Provider value={{reo,addToCart,count}}>
          <Product/>
          <Features/>
          <Pics/>
          <Other/>
        </secondContext.Provider>
    </div>
  )
}

export default ProductDetail