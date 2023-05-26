import React, { useContext } from 'react'
import image from '../iamges/image-hero.jpg'
import { productContext } from '../App'
import { Link } from 'react-router-dom'
const Header = () => {
    const productConsumer = useContext(productContext)
    const {style} = productConsumer
       
  return (
    <>
      <div  className='single-product flex'>
        <div className='single-product-text white flex'>
          <h4 style={style} className="f-22">NEw PRODUCT </h4>
         <h1 className='f-54'>XX00 MARK II HEADPHONES</h1>
         <p className='f-15'>Experience natural,
            lifelike audio and exceptional build quality
             made for the passionate
              music enthusiast.</p>
             <Link to='headphones/4'><button className="custom-btn btn-3"><span>see Product</span></button></Link>
        </div>
        <div className='single-image shadow' style={{background:`url(${image})`,backgroundPosition:"85% 90%",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}  >
        <div className='animate'>
          <h1>SEE PRODUCT</h1>
        </div>
        </div>
     </div>
    </>
  )
}

export default Header