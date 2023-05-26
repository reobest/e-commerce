import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import AudioGear from './components/AudioGear';
import Home from './pages/Home';
import SelectedProduct from './components/SelectedProduct';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';
export const productContext = createContext()
function App() {
  const style = {
    textTransform: "uppercase",
    letterSpacing: "6px",
    color: "#DE8C8D",
    marginBottom:"20px"
}
const  getLocalStorege = () => {
  let addCart = JSON.parse(localStorage.getItem("pro") || "[]")
  return addCart
 }
 const  getLocalStoregeCount = () => {
  let count = JSON.parse(localStorage.getItem("count") || 0)
  return count
 }
 const  getLocalStoregeCartCount = () => {
  let count = JSON.parse(localStorage.getItem("cartCount") || 0)
  return count
 }
let [addCart,setAddCart] = useState(getLocalStorege())
const [showcart,setShowCart] = useState(false)
const [isempty,setIsEmpty] = useState(true)
let [cartCount,setCartCount] = useState(getLocalStoregeCartCount())
let  [count,setCount] = useState(getLocalStoregeCount())
const handleCart = () => {
     setShowCart((cart) => !cart)
 }
 const clearall = () => {
  setAddCart([])
  setIsEmpty(true)
  setCount(0)
  setCartCount(0)
 }

 let addToCart = (pro) => {
  setCartCount(cartCount + 1)
  setIsEmpty(false)
  const item = addCart.find((item) =>  item.name === pro.name)
     if(item) {
      setCount(count + 1)
      setAddCart(addCart.map((item)=> 
        item.name == pro.name ? {...item,quantity:item.quantity + 1} : item
      )) 
     }
     else{
      setCount(1)
      setAddCart([...addCart,{...pro,quantity:1}])
     }
}

let newCartProductFooter = addCart.map((product) => {
  let {price,quantity} = product
  let newPrice = [0]
  let ParsedPrice = parseInt(newPrice)
  ParsedPrice =  ParsedPrice +  (price * quantity)
  return  ParsedPrice
})
let TotalCart = newCartProductFooter
let result = 0
for(let i =0 ;i<newCartProductFooter.length;i++) {
  result = result + TotalCart[i]
}
let newCartProduct = addCart.map((product) => {
  const {id,name,img,price,quantity} = product
  return  <div className='item flex' key={id}>
  <img src={img} className="b-r"></img>
  <div className='cart-content flex'>
    <h3>{name}</h3>
    <p>${price}</p>
  </div>
  <p className='flex b-r'>{quantity}</p>
</div>
})
let handleCount = () => {
  setCount(0)
}
 useEffect(() => {
  localStorage.setItem("pro", JSON.stringify(addCart))
  localStorage.setItem("count", JSON.stringify(count))
  localStorage.setItem("cartCount", JSON.stringify(cartCount))
 },[addCart]) 
  return (
    <>
      <Router>
      <productContext.Provider value={{style,handleCart,addToCart,count,newCartProduct,result,handleCount}}>
      {showcart && <div className='item-cart b-r shadow flex' >
      <div className='cart-upper flex'>
            <h3>Cart ({cartCount})</h3>
            <button className='transparent pointer' onClick={clearall}>remove all</button>
          </div> 
      <div className='cart-middle flex'>
        { newCartProduct }    
      </div>
      <div className='cart-footer'>
  <div className='cart-total flex'>
  <span className='f-15 opacity'>ToTal:</span>
  <span className='f-15 opacity'>{result}</span>
  </div>
   <Link to="/checkout"><button className="custom-btn btn-3"><span>Check Out</span></button></Link> 
  </div>   
          </div>}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<SelectedProduct/>}/>
        <Route path='/:id/:id2' element={<ProductDetail/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <AudioGear/>
      <Footer/>
      </productContext.Provider>
    </Router>
    </> 
  );
}

export default App;
