import React  from 'react'
import { Link,useParams } from 'react-router-dom'
import rayan from './Utils'
import styled from 'styled-components'
const Headphones = () => {
    const {id} = useParams()
    const thisPage = rayan.pagesList.find((page) => page.id === id)
  return (
    <div>
        <Pagetitle>
          <h1>{thisPage.name}</h1>
        </Pagetitle>
        {
            thisPage.content.map((item) => {
                const {id,name,desc,img} = item
                return  <Headphonesproducts key={id}>
                <Headphonesproductsimg>
                    <img src={img}></img>
                </Headphonesproductsimg>
                <Headphonesproductsdesc>
                    {id === 1 && <h4>NEW PRODUCT</h4>}
                    <h1>{name}</h1>
                    <p>{desc}</p>
                   <Link to={`/${thisPage.id}/${id}`}><button className="custom-btn btn-3"><span>see Product</span></button></Link>
                </Headphonesproductsdesc>
            </Headphonesproducts>
            })
        }
    </div>
  )
}

export default Headphones
const Headphonesproductsdesc = styled.div`
  @media only  screen  and (max-width:600px) {
    padding:  0 0 20px 0;
  flex-basis: 100%;
  align-items: center;
 }
display: flex;
    flex-basis: 50%;
    padding: 0  80px;
    flex-direction: column;
    justify-content: center;
    h1{
      @media only  screen  and (max-width:600px) {
        font-size: 35px;
 }
      font-size: 54px;
      font-weight: 300;
      margin-bottom: 30px;
    }p{
      @media only  screen  and (max-width:600px) {
        text-align: center;
       padding: 0 20px;
 }
      font-size: 15px;
      opacity: 0.8;
      line-height: 22px;
    }button{
      margin-top: 30px;
    }
`
const Headphonesproductsimg = styled.div`
    flex-basis: 50%;
    img{
      width: 100%;
     height: 100%;
     @media only  screen  and (max-width:600px) {
      width: 100%;
     }
    }
    @media only  screen  and (max-width:600px) {
  flex-basis: 100%;
 }
`
const Headphonesproducts = styled.div`
  width: 77.7%;
  display: flex;
  box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);
  margin: 160px auto;
  background-color: #fff;
  @media only  screen  and (max-width:600px) {
    flex-direction: column;
 }
`
const Pagetitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 150px;
  @media only  screen  and (max-width:600px) {
    height: 100px;
 }
  h1{
    @media only  screen  and (max-width:600px) {
      font-size: 40px;
    }
    font-size: 54px;
    transition: all .7s ease-in-out;
   font-weight: 300;
   :hover{
    letter-spacing: 15px;
   }
  }
`
const Container = styled.div`
`