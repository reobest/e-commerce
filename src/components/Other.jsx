import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import rayan from './Utils'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Other = () => {
  const MayLike = rayan.mayLike.map((item) => {
    return <Maylikeproduct key={item.id}>
      <img src={item.img}></img>
      <h4>{item.name}</h4>
      <Link to={`${item.catagory}`}><button>shop<Arrow /></button></Link>
    </Maylikeproduct>
  })
  return (
    <Container>
      {MayLike}
    </Container>
  )
}

export default Other
const Arrow = styled(AiOutlineArrowRight)`
  margin-left: 10px;
  color: orange;

`
const Container = styled.div`
  align-items: center;
  padding: 20px;
  width: 77%;
  height: auto;
  margin: 160px auto;
  justify-content: space-between;
  background-color: #fff;
  display: flex;
  gap:30px;
  border-radius: 5px;
  color: #fff;
  box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);
  @media only  screen  and (max-width:600px) {
  flex-direction: column;
  margin-bottom: 20px;
 }
`
const Maylikeproduct = styled.div` 
  display: flex;
  width: 350px;
  flex-direction: column;
  align-items: center;
  animation-name: go;
  animation-delay: 0ms;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  button{
    display: flex;
    cursor: pointer;
    border: none;
    background: transparent;
    margin-top: 10px;
  justify-content: center;
  align-items: center;
  text-transform:uppercase;
  letter-spacing:5px;
  font-size:15px;
  }img{
    height: 160px;
  width: 130px;
  }h4{
    color: #000;
    text-transform: uppercase;
  }
`