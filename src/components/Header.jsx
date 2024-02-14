import React from 'react'
import image from '../images/image-hero.jpg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Header = () => {
  return (
    <>
      <Container>
        <Singleproducttext>
          <h4>NEw PRODUCT </h4>
          <h1>XX00 MARK II HEADPHONES</h1>
          <p>Experience natural,
            lifelike audio and exceptional build quality
            made for the passionate
            music enthusiast.</p>
          <Link to='headphones/4'><button className="custom-btn btn-3"><span>see Product</span></button></Link>
        </Singleproducttext>
        <Singleimage>
          <Animate>
            <h1>SEE PRODUCT</h1>
          </Animate>
        </Singleimage>
      </Container>
    </>
  )
}

export default Header
const Container = styled.div`
  margin-top: 50px;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between; 
  @media only  screen  and (max-width:420px) {
  width: 300px;
  position: relative;
} 
`

const Singleimage = styled.div`
@media only  screen  and (max-width:420px) {
  width: 100%;
  height: 350px;
}h4{
  text-transform: uppercase;
    letter-spacing:6px;
    color: #DE8C8D;
    margin-bottom:20px;
}
  transition: all 4s ease-in-out;
  position: relative;
  border-radius: 5px;
  height: 650px;
  width: 50%;
  box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);
  background:url(${image});
  background-position:85% 90%;
  background-repeat:no-repeat;
  background-size:cover;
  :hover div{
    height: 100%;
  }  :hover div h1{
    opacity: 1;
  cursor: pointer;
  }
`
const Animate = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 5px;
  width: 99%;
  opacity: 0.8;
  height: 0;
  background-color: #000;
  transition: all .4s ease-in;
  h1{
  opacity: 0;
  letter-spacing: 10px;
  @media only  screen  and (max-width:420px) {
    text-align: center;
}
  }
`
const Singleproducttext = styled.div`
@media only  screen  and (max-width:420px) {
    position: absolute;
    top: 17%;
    padding: 0;
    z-index: 11;
    width: 100%;
    align-items: center;
}
h4{
  font-size: 22px;
}h1{
  font-size: 54px;
  @media only  screen  and (max-width:420px) {
    font-size: 35px;
    text-align: center;
    width: auto;
  }
}p{
  @media only  screen  and (max-width:420px) {
    text-align: center;
  }
  font-size: 20px;
  opacity: 0.8;
  margin-top: 10px;
  color: #000;
}
display: flex;
color: #fff;
  position: relative;
  width: 50%;
  z-index: 100;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 50px ;
  flex-direction: column;
  p{
    opacity: 0.8;
  }
`