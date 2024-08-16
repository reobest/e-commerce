import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { VscListFilter } from 'react-icons/vsc'
import styled from 'styled-components'
const Navbar = () => {
  const context = useGlobalContext()
  const { handleCart, hide, newPagesList, mobilePagesList, handleMobile } = context

  return (
    <>
      <Container>
        <Mobilenavbar hide={hide}>
          <ul hide={hide}>
            {mobilePagesList}
          </ul>
        </Mobilenavbar>
        <MobileNav onClick={handleMobile}><VscListFilter /></MobileNav>
        <Link to='/'><img src={logo}></img></Link>
        <ul>
          {newPagesList}
        </ul>
        <button onClick={handleCart}><AiOutlineShoppingCart /></button>
      </Container>
    </>
  )
}

export default Navbar
const Container = styled.div`
button{
  :hover{
    font-size: 22px;
  }
  font-size: 20px;
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
}
a{
  border: none;
}
display: flex;
    width: 100vw;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  img{
    cursor: pointer;
    height: 20px;
    width: 100px;
  }
 
  ul li{
    margin:  0 5vw ;
    font-size: 1.7vw;
  }ul{
    @media only  screen  and (max-width:550px) {
    display: none;
  } 
  }

`
const MobileNav = styled.button`
    display: none;
    @media only  screen  and (max-width:550px) {
    font-size: 20px;
  color: #fff;
  background-color: transparent;
  display: block;
  border: none;
  } 
`
const Mobilenavbar = styled.div`
    display: none;
    @media only  screen  and (max-width:550px) {
      transition: all .5s ease-in-out;
  position: absolute;
  width: ${props => props.hide ? '100%' : '0px'};
  display: flex;
  left: 0;
  align-items: center;
  justify-content: flex-end;
  height: 400px;
  top: 100px;
  background: #000;
  z-index: 15;
  opacity: ${props => props.hide ? '0.8' : '0'};
    }
    ul{
      display: none;
      @media only  screen  and (max-width:550px) {
        position: absolute;
  transition: all 1.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.hide ? '100%' : '0px'};
  opacity: ${props => props.hide ? '0.8' : '0'};
  flex-direction: column;
  height: 300px;
  z-index: 20;

  a li{
  font-size: 25px;
  margin: 10px 0;
}
      }
    }
`