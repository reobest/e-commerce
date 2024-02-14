import React from 'react'
import rayan from './Utils'
import styled from 'styled-components'
const Pics = () => {
  return (
    <Container>
      <Picwrraper>
        <FirstProduct></FirstProduct>
        <SecondProduct></SecondProduct>
      </Picwrraper>
      <ThirdProduct></ThirdProduct>
    </Container>
  )
}

export default Pics
const Container = styled.div`
  box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);
  display: flex;
  width: 77.7%;
  height: 592px;
  justify-content: space-between;
  background-color:#fff;
  padding: 10px;
  margin:  0 auto;
  margin-top: 160px;
  @media only  screen  and (max-width:600px) {
    flex-direction: column;
 }
`
const Picwrraper = styled.div`
display: flex;
    flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 38%;
  @media only  screen  and (max-width:600px) {
    height: 50%;
  width: 100%;
 }
`
const FirstProduct = styled.div`
  background:url(${rayan.img1});
  background-size:cover;
  width: 100%;
  height: 280px;
  @media only  screen  and (max-width:600px) {
    height: 48%;
 }
`
const SecondProduct = styled.div`
  background:url(${rayan.img2});
  background-size:cover;
  width: 100%;
  height: 280px;
  @media only  screen  and (max-width:600px) {
    height: 48%;
 }
`
const ThirdProduct = styled.div`
  background:url(${rayan.img3});
  background-size:cover;
  height: 100%;
  width: 61%;
  @media only  screen  and (max-width:600px) {
    height: 48%;
  width: 100%;
 }
`