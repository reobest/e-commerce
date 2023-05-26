import React from 'react'
const Features = () => {
  return (
    <div className='features flex shadow b-r'>
       <div className='features-par'>
        <h1 className='f-32 f-400'>FEATURES</h1>
        <p className='f-15'>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.</p>
        <p className='f-15'>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
       </div>
    <div className='box flex'>
        <h1 className='f-32 f-400'>In the Box</h1>
        <ul className='flex'>
        <li><span style={{color:"#D87D4A"}}>1X</span><span>Headphone Unit</span></li>
        <li><span style={{color:"#D87D4A"}}>2X</span><span>Replacement Earcups</span></li>
        <li><span style={{color:"#D87D4A"}}>1X</span><span>User Manual</span></li>
        <li><span style={{color:"#D87D4A"}}>1X</span><span>3.5mm 5m Audio Cable</span></li>
        <li><span style={{color:"#D87D4A"}}>1X</span><span>Travel Bag</span></li>
        </ul>
    </div>
    </div>
  )
}

export default Features