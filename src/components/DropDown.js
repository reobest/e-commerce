import React from 'react'
import { useGlobalContext } from '../Context'
import { Link } from 'react-router-dom'
import '../App.css'
import styled from 'styled-components'
const DropDown = () => {
  const { clearall, cartCount, newCartProduct, result, setShowCart, showcart } = useGlobalContext();

  const handleClick = () => {
    setShowCart(false);
  };

  if (!showcart) return null;

  return (
    <Container>
      <CartUpper>
        <h3>Cart ({cartCount})</h3>
        <button onClick={clearall}>Remove All</button>
      </CartUpper>
      <CartMiddle>{newCartProduct}</CartMiddle>
      <CartFooter>
        <div>
          <span>Total:</span>
          <span>{result}</span>
        </div>
        <Link to="/checkout">
          <button className="custom-btn btn-3" onClick={handleClick}>
            <span>Check Out</span>
          </button>
        </Link>
      </CartFooter>
    </Container>
  );
};

export default DropDown;
const Container = styled.div`
  right: 50px;
  top: 50px;
  position: absolute;
  background-color: #fff;
  width: 300px;
  height: 500px;
  width: 375px;
  z-index: 50;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  display: flex;
  box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);
  @media only  screen  and (max-width:600px) {
    height: 500px;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
 }
`
const CartUpper = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 20px 0;
  button{
    border: none;
    text-decoration: underline;
    background: transparent;
    cursor: pointer;
  }
`
const CartMiddle = styled.div`
display: flex;
   width: 100%;
  height: 60%;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar{
  display: none;
}
`
const CartFooter = styled.div`
  height: 20%;
  width: 100%;
  padding:  0 20px;
  button{
    width: 100%;
  }div{
    display: flex;
    justify-content: space-between;
  }span{
    font-size: 15px;
    opacity: 0.8;
  }
`