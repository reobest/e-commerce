import React, { useContext, useRef} from 'react'
import logo from '../iamges/logo.svg'
import { Link } from 'react-router-dom'
import rayan from './MayLikeData'
import { productContext } from '../App'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {VscListFilter} from 'react-icons/vsc'
const Navbar = () => {
  const  mobileNav = useRef(null)
  const ul = useRef(null)
  let proContext = useContext(productContext)
const {handleCart,handleCount} = proContext
  const newPagesList = rayan.pagesList.map((page) => {
    return <Link key={page.id} to={`/${page.id}`} onClick={handleCount}><li>{page.name}</li></Link>
  })
  const mobilePagesList = rayan.pagesList.map((page) => {
    return <Link key={page.id} to={`/${page.id}`} onClick={handleCount}><li>{page.name}</li></Link>
  })
  const handleMobile = () => {
    mobileNav.current.classList.toggle("hide2")
    ul.current.classList.toggle("moveleft")
    
  }
  return (
    <>
    <nav className='blue flex nav '>
       <div className="mobile-navbar" ref={mobileNav}>
         <ul ref={ul} className="mobile-ul">
            {mobilePagesList}
         </ul>
        </div>
      <button className='mobile-nav' onClick={handleMobile}><VscListFilter/></button>
     <Link to='/'><img className='logo pointer' src={logo}></img></Link>
      <ul  className= "pages">
        {newPagesList} 
      </ul>
      <button className='btn white pointer' onClick={handleCart}><AiOutlineShoppingCart/></button>
    </nav>
    </>
  )
}

export default Navbar