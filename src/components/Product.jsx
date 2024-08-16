import React, { useContext } from 'react'
import { secondContext } from '../pages/ProductDetail'
import styled from 'styled-components'
const Product = () => {
  let secondContextConsumer = useContext(secondContext)
  let { selectedItem, addToCart, count } = secondContextConsumer
  const { id, name, desc, img } = selectedItem
  return (
    <Container key={id}>
      <Productimg>
        <img src={img}></img>
      </Productimg>
      <Productdetails>
        <h1>{name}</h1>
        <p>{desc}</p>
        <Price><span>$</span><span>2999</span></Price>
        <Addtocart>
          <button className="custom-btn btn-3"><span>{count}</span></button>
          <button className="custom-btn btn-3 pointer" onClick={() => addToCart(selectedItem)}><span>add to cart</span></button>
        </Addtocart>
      </Productdetails>
    </Container>
  )
}

export default Product
const Container = styled.div`
    width: 77.7%;
    margin: 160px auto;
    background-color: #fff;
   display: flex;
    height: auto;
    box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);
    @media only  screen  and (max-width:800px) {
      flex-direction: column;
 }
`
const Addtocart = styled.div`
    display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-bottom: 10px;
`
const Price = styled.div`
border-radius: 5px;
  padding:  5px 5px;
  text-align: center;
  width: 70px;
  background-color: rgb(213, 220, 220);
  margin-top: 20px;
`
const Productdetails = styled.div`
@media only  screen  and (max-width:800px) {
  align-items: center;
  width: 100%;
  padding-left: 0;
 }
button{
  margin: 70px 20px 0 0;
  @media only  screen  and (max-width:800px) {
    margin: 10px 0 0 0;
  width: 45%;
 }
}
h1{
  font-size: 54px;
  font-weight: 300;
  margin-bottom: 30px;
  @media only  screen  and (max-width:800px) {
    font-size: 45px;
 }
}p{
  font-size: 15px;
  opacity: 0.8;
  line-height: 22px;
  @media only  screen  and (max-width:800px) {
    text-align: center;
  padding:  0 20px;
 }
}
display: flex;
    padding-left: 50px;
  justify-content: center;
  flex-direction: column;
  width: 540px;

`
const Productimg = styled.div`
  width: 560px;
  img{
    height:100%;
    width: 100%;
  }
  @media only  screen  and (max-width:800px) {
    width: 100%;
 }
`