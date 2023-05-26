import React from 'react'
import rayan from './MayLikeData'
import styled from 'styled-components'
const Pics = () => {
  return (
    <div className="display flex shadow">
    <div className="pic-wrapper  flex">
      <FirstProduct className="pic1"></FirstProduct>
      <SecondProduct className="pic2"></SecondProduct>
    </div>
    <ThirdProduct className="pic3"></ThirdProduct>
  </div>
  )
}

export default Pics
const FirstProduct = styled.div`
  background:url(${rayan.img1});
  background-size:cover;
`
const SecondProduct = styled.div`
  background:url(${rayan.img2});
  background-size:cover;
`
const ThirdProduct = styled.div`
  background:url(${rayan.img3});
  background-size:cover;
`