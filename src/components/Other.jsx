import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import rayan from './MayLikeData'
import {Link} from 'react-router-dom'
const Other = () => {
    const MayLike =  rayan.mayLike.map((item) => {
        return  <div className='may-like-product flex' key={item.id}>
        <img src={item.img}></img>
        <h4 className='black' style={{textTransform:"uppercase"}}>{item.name}</h4>
       <Link to={`${item.catagory}`}><button type="button"className='transparent no-border pointer flex'style={{textTransform:"uppercase",letterSpacing:"5px",fontSize:"15px"}}>shop<AiOutlineArrowRight className='orange' style={{marginLeft:"10px"}}/></button></Link>
      </div>
    })
  return (
    <>
    <div className='may-like flex white b-r shadow'>
       {MayLike}
    </div>
    </>
  )
}

export default Other