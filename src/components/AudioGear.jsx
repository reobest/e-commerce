import React from 'react'
import rayan from './MayLikeData'
import img from '../iamges/image-best-gear.jpg'
const AudioGear = () => {
  return (
    <div className='audio-gear b-r flex shadow'>
      <div className='audio-gear-text flex'>
        <h2>BRINGING YOU THE<span className='uniq'>BEST</span> AUDIO GEAR</h2>
        <p className=' opacity'style={{lineHeight:"30px"}}>{rayan.P}</p>
      </div>
      <div className='audio-gear-img' style={{position:"relative"}}>
        <img src={img} style={{position:"absolute",width:"100%",height:"100%"}}/>
      </div>
    </div>
  )
}

export default AudioGear