import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
const Footer = () => {
  const context = useGlobalContext()
  const { handleScroll } = context
  
  return (
    <Container>
      <Footerlogo>
        <img src={logo}></img>
        <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.</p>
        <small>Copyright 2021. All Rights Reserved</small>
      </Footerlogo>
      <Footernavigate>
        <Footernavigatepages>
          <ul>
            <Link to='/' onClick={handleScroll}><li>Home</li></Link>
            <Link to='/headphones'onClick={handleScroll}><li>HEADPHONES</li></Link>
            <Link to='/speakers'onClick={handleScroll}><li>SPEAKERS</li></Link>
            <Link to='/earphones'onClick={handleScroll}><li>EARPHONES</li></Link>
          </ul>
        </Footernavigatepages>
        <Footernavigatesocials>
          <button type='button'><AiFillFacebook /></button>
          <button type='button'><AiOutlineTwitter /></button>
          <button type='button'><AiOutlineInstagram /></button>
        </Footernavigatesocials>
      </Footernavigate>
    </Container>
  )
}

export default Footer
const Container = styled.div`
  background-color: black;
  margin-top: 280px;
  height: auto;
  padding-top: 40px;
  display: flex;
  color: #fff;
  @media only  screen  and (max-width:420px) {
    flex-direction: column-reverse;
 }
`
const Footernavigatepages = styled.div`
  margin-left: 20px ;
  @media only  screen  and (max-width:420px) {
    margin: 0;
 }
  ul {
    @media only  screen  and (max-width:420px) {
    flex-direction: column;
    text-align: center;
 }
    li{
      @media only  screen  and (max-width:420px) {
    margin: 20px 0;
    font-size: 20px;
 }
      font-size: 1.2vw;
  margin-left: 30px;
  transition: all 1s ease-in-out;
  :hover{
    transform: rotate3d(0,1,0,360deg);
  color: rgb(233, 15, 113);
  }
    }
  }
`
const Footernavigatesocials = styled.div`
  @media only  screen  and (max-width:420px) {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  transform: translateX(0);
 }
  margin-top: 70px;
  width: 77%;
  display: flex;
  justify-content: flex-end;
  button{
    @media only  screen  and (max-width:420px) {
      border: none;
   }
    margin-right: 20px;
  font-size: 30px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: transparent;
  } button:nth-child(1){
  color: blue;
}
 button:nth-child(2){
  color: rgb(33, 170, 225);
}
 button:nth-child(3){
  color: rgb(233, 15, 113);
}
`
const Footernavigate = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only  screen  and (max-width:420px) {
    width: 100%;
 }
`
const Footerlogo = styled.div`
padding: 10px;
  display: flex;
  width: 50%;
  justify-content: center;
  padding-left: 100px;
  flex-direction: column;
  @media only  screen  and (max-width:420px) {
    width: 100%;
  align-items: center;
  text-align: center;
  padding: 30px 0;
 }
  p{
    @media only  screen  and (max-width:420px) {
      padding: 0 50px;
 }
    margin-top: 20px;
    font-size: 15px;
    opacity: 0.8;
  }small{
    margin-top: 50px;
    font-size: 15px;
    opacity: 0.8;
  }img{
    height: 25px;
    width: 145px;
  }
`