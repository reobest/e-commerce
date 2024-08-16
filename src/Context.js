import React, { useState, useContext,useEffect } from 'react'
import rayan from './components/Utils'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import schema from '../src/components/Utils'
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  let shipping = 50
  let vatIncluded = 1079
  const [hide, setHide] = useState(false)
  const {values,handleBlur,handleChange,handleSubmit,errors}  = useFormik({
    initialValues:schema.initialValues,
     validationSchema:schema.schema,
    onSubmit: (actions) => {
       actions.resetForm()
    },
   })
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
    const newPagesList = rayan.pagesList.map((page) => {
      return <Link key={page.id} to={`/${page.id}`} onClick={handleCount}><li>{page.name}</li></Link>
    })
    const mobilePagesList = rayan.pagesList.map((page) => {
      return <Link key={page.id} to={`/${page.id}`} onClick={handleCount}><li>{page.name}</li></Link>
    })
    const handleMobile = () => {
      setHide(prev => !prev)
    }
    const handleScroll = () => {
      window.scrollTo(0,0)
    }
     useEffect(() => {
      localStorage.setItem("pro", JSON.stringify(addCart))
      localStorage.setItem("count", JSON.stringify(count))
      localStorage.setItem("cartCount", JSON.stringify(cartCount))
     },[addCart]) 
  return (
    <AppContext.Provider value={{handleCart,addToCart,count,newCartProduct,result,handleCount,clearall,showcart,hide,setHide,newPagesList,mobilePagesList,handleMobile,
      values,handleBlur,handleChange,handleSubmit,errors,shipping,vatIncluded,handleScroll,addCart,setShowCart}}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }