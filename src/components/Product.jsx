import React, { useContext } from 'react'
import { secondContext } from '../pages/ProductDetail'
const Product = () => {
  let secondContextConsumer = useContext(secondContext)
  let  {reo,addToCart,count} = secondContextConsumer
  const {id,name,desc,img} = reo
  return (
    <div className='product flex shadow ' key={id}>
      <div className='product-img'>
        <img src={img}></img>
      </div>
      <div className='product-details flex'>
        <h1 className='f-54 f-300' style={{marginBottom:"30px"}}>{name}</h1>
                    <p className='f-15 opacity' style={{lineHeight:"22px"}}>{desc}</p>
        <div className='price b-r'><span>$</span><span>2999</span></div>
        <div className='add-to-cart'>
        <button className="custom-btn btn-3"><span>{count}</span></button>
        <button className="custom-btn btn-3 pointer" onClick={() =>addToCart(reo)}><span>add to cart</span></button>
        </div>
      </div>
    </div>
  )
}

export default Product