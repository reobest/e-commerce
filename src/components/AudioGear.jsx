import React from 'react'
import rayan from './Utils'
import img from '../images/image-best-gear.jpg'
import styled from 'styled-components'
const AudioGear = () => {
  return (
    <Container>
      <header>
        <h2>BRINGING YOU THE<span>BEST</span> AUDIO GEAR</h2>
        <p>{rayan.P}</p>
      </header>
      <div>
        <img src={img} />
      </div>
    </Container>
  )
}

export default AudioGear
const Container = styled.div`
  background-color: white;
  width: 77.7%;
  margin: 160px auto;
  height: 590px; 
  border-radius: 5px;
  display: flex;
  box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);
  @media only  screen  and (max-width:550px) {
    height: auto;
  padding: 20px;
  flex-direction: column-reverse;
  } 
header{
  h2{
    @media only  screen  and (max-width:550px) {
      font-weight: 400;
  margin-top: 20px;
  }
  }
  @media only  screen  and (max-width:550px) {
    margin: 0;
    margin-bottom: 20px;
  width: 100%;
  padding: 0;
  text-align: center;
  }
    width: 550px;
  padding:  0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p{
    @media only  screen  and (max-width:550px) {
      font-size: 15px;
  }
    margin-top: 30px;
    line-height:"30px";
    opacity: 0.8;
  }
  }
  div{
    height: 100%;
  width: 54%;
  position: relative;
  @media only  screen  and (max-width:550px) {
      height: 290px;
     width: 100%;
  }
  img{
    position:absolute;
    width:100%;
    height:100%;
  }
  }
`