import React, { useContext } from 'react'
import { productContext } from '../App'
import { Link,useParams } from 'react-router-dom'
import rayan from './MayLikeData'
const Headphones = () => {
    const {id} = useParams()
    const thisPage = rayan.pagesList.find((page) => page.id === id)
    const productConsumer = useContext(productContext)
    const {style} = productConsumer
  return (
    <div className='head-phones'>
        <div className='page-title flex '>
          <h1 className='f-54'>{thisPage.name}</h1>
        </div>
        {
            thisPage.content.map((item) => {
                const {id,name,desc,img} = item
                return  <div className='head-phones-products flex shadow' key={id}>
                <div className='head-phones-products-img'>
                    <img src={img}></img>
                </div>
                <div className='head-phones-products-desc flex'>
                    {id === 1 && <h4 style={style}>NEW PRODUCT</h4>}
                    <h1 className='f-54 f-300' style={{marginBottom:"30px"}}>{name}</h1>
                    <p className='f-15 opacity' style={{lineHeight:"22px"}}>{desc}</p>
                   <Link to={`/${thisPage.id}/${id}`}><button className="custom-btn btn-3" style={{marginTop:"30px"}}><span>see Product</span></button></Link>
                </div>
            </div>
            })
        }
    </div>
  )
}

export default Headphones