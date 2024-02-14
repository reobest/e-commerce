import React from 'react'
import img from '../images/image-speaker-zx9.png'
import img3 from '../images/image-speaker-zx7.jpg'
import img4 from '../images/image-earphones-yx1.jpg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const MainSection = () => {
  return (
    <Container>
      <Product1vew>
        <Imgview>
          <img src={img}></img>
        </Imgview>
        <Textview>
          <h1>ZX9 SPEAKER</h1>
          <p>Upgrade to premium speakers<br /> that are
            phenomenally built to deliver truly remarkable sound.</p>
          <Link to='speakers/7'><button className="custom-btn btn-3"><span>see Product</span></button></Link>
        </Textview>
      </Product1vew>
      <Product2view>
        <img src={img3}></img>
        <h2>ZX7 SPEAKER</h2>
        <Link to='speakers/8'><button className="custom-btn btn-3"><span>see Product</span></button></Link>
      </Product2view>
      <Product3view>
        <img src={img4}></img>
        <div>
          <h1>YX1 EARPHONES</h1>
          <Link to='earphones/9'><button className="custom-btn btn-3"><span>see Product</span></button></Link>
        </div>
      </Product3view>
    </Container>
  )
}

export default MainSection
const Container = styled.div`
  position: relative;
  height: auto;
  width: 77.7%;
  margin: 0 auto;
  margin-top: 320px;
`
const Product3view = styled.div`

color: #fff;
display: flex;
border-radius: 5px;
    justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media only  screen  and (max-width:600px) {
    padding-bottom: 10px;
background-color: rgb(60, 58, 58);
    }
  img{
    width: 100%;
  }
  div{
    display: flex;
    flex-direction: column;
    position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1{
    font-weight:300;
    letter-spacing:5px;
    font-size:6vw;
  }
  }
`
const Product2view = styled.div`
position: relative;
display: flex;
flex-direction: column;
border-radius: 5px;
    padding: 0 0 0 50px;
  height: 300px;
  margin-top: 50px;
  @media only  screen  and (max-width:600px) {
    height: 220px;
    }
  h2{
    font-weight:300;
    letter-spacing:5px;
    z-index:100;
    position:relative;
    margin-top: 50px;
  }img{
    position: absolute;
    top: 2px;
    left: 0;
    right: 50%;
    height: 100%;
    width: 100%;
  }
`
const Textview = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  @media only  screen  and (max-width:600px) {
        flex-direction: column;
        align-items: center;
  }
  :is( h1, p, button){
    margin: 0 150px 20px;
    @media only  screen  and (max-width:600px) {
        margin: 10px;
}
  }h1{
    font-size: 54px;
    margin-bottom: 20px;
    @media only  screen  and (max-width:600px) {
        font-size: 35px;
}
  }p{
    text-align: center;
  }button{
    margin-top: 30px;
  }
`
const Imgview = styled.div`
    img{
  position: relative;
  top: 20px;
  left: -70px;
  height: 100%;
  width: 100%;
  height: 400px;
  width: 310px;
  @media only  screen  and (max-width:600px) {
    top: 2px;
  left: 0;
  right: 50%;
  height: 200px;
  width: 200px;
 }
    }
`
const Product1vew = styled.div`
display: flex;
border-radius: 5px;
  box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);
height: 560px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background:url(${img3});
  background-repeat:no-repeat;
  background-size:cover;
  background-color:#fff;
  @media only  screen  and (max-width:600px) {
    flex-wrap: wrap;
 }
`