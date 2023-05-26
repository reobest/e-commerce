import React from 'react'
import img from '../iamges/image-speaker-zx9.png'
import img2 from '../iamges/pattern-circles.svg'
import img3 from '../iamges/image-speaker-zx7.jpg'
import img4 from '../iamges/image-earphones-yx1.jpg'
import { Link } from 'react-router-dom'
const MainSection = () => {
  return (
    <div className='main' >
        <div className='product1-view  shadow b-r flex'style={{background:`url(${img2})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundColor:"rgb(210, 204, 204)"}}>
            <div className='img-view'>
                <img src={img}></img>
            </div>
            <div className='text-view flex'>
            <h1 className='f-54'>ZX9 SPEAKER</h1>
            <p className='op'>Upgrade to premium speakers<br/> that are
                 phenomenally built to deliver truly remarkable sound.</p>
                 <Link to='speakers/7'><button className="custom-btn btn-3"><span>see Product</span></button></Link>
            </div>
        </div>
        <div className='product2-view b-r flex column' style={{position:"relative"}}>
            <img src={img3} style={{position:"absolute",left:"0",width:"100%"}}></img>
            <h2 style={{fontWeight:"300",letterSpacing:"5px",zIndex:"100",position:"relative"}}>ZX7 SPEAKER</h2>
           <Link to='speakers/8'><button className="custom-btn btn-3"><span>see Product</span></button></Link>
        </div>
        <div className='product3-view b-r white flex'>
        <img src={img4}></img>
            <div className='product3-view-text column flex'>
                <h1 style={{fontWeight:"300",letterSpacing:"5px",fontSize:"6vw"}}>YX1 EARPHONES</h1>
                <Link to='earphones/9'><button className="custom-btn btn-3"><span>see Product</span></button></Link>
            </div>
        </div>
    </div>
  )
}

export default MainSection