import React from 'react'
import styled from 'styled-components'
const Features = () => {
  return (
    <Container>
      <Featurespar>
        <h1>FEATURES</h1>
        <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.</p>
        <p>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
      </Featurespar>
      <Box>
        <h1>In the Box</h1>
        <ul>
          <li><span >1X</span><span>Headphone Unit</span></li>
          <li><span>2X</span><span>Replacement Earcups</span></li>
          <li><span>1X</span><span>User Manual</span></li>
          <li><span>1X</span><span>3.5mm 5m Audio Cable</span></li>
          <li><span>1X</span><span>Travel Bag</span></li>
        </ul>
      </Box>
    </Container>
  )
}

export default Features
const Container = styled.div`
  box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);
  flex-wrap: wrap;
  padding: 40px;
  background-color: #fff;
  margin:  0 auto;
  width: 77.7%;
  height: auto;
  display  :flex ;
  border-radius: 5px;
  @media only  screen  and (max-width:420px) {
    flex-direction: column;
  }
  p,h1{
    @media only  screen  and (max-width:420px) {
    text-align: center;
  }
  }
`
const Featurespar = styled.div`
  flex-basis: 70%;
  height: 100%;
   p:nth-child(3), p:nth-child(2){
  margin-top: 20px;
}  
h1{
  font-size: 32px;
  font-weight: 400;
}p{
  font-size: 15px;
}
`
const Box = styled.div`
display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: center;
  @media only  screen  and (max-width:420px) {
    width: 100%;
  }
  h1{
    font-size: 32px;
    font-weight: 400;
  }
  ul{
    @media only  screen  and (max-width:420px) {
      margin-top: 20px;
     }
    display: flex;
    flex-direction: column;
    li{
      margin: 7px 0 ;
      span{
        @media only  screen  and (max-width:420px) {
          margin: 0 10px;
        }
        margin:  0 30px;
        color: #D87D4A;
      }
    }
  }
`