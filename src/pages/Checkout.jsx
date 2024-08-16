import React from 'react'
import { useGlobalContext } from '../Context'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
const Checkout = () => {
  const context = useGlobalContext()
  const { newCartProduct, result, clearall, values, handleBlur, handleChange, handleSubmit, errors, shipping, vatIncluded, addCart } = context
  const Navigate = useNavigate()
  const fields = [
    values.firstName,
    values.emailNumber,
    values.email,
    values.street,
    values.code,
    values.city,
    values.country,
    values.number,
    values.eMoney
  ];
  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  };
  const isObjectEmpty = isEmptyObject(errors);
  const handleClick = () => {
    if (isObjectEmpty) {
      alert("Please finish Filling Your Form")
    }
    if (addCart.length == 0) {
      alert("Your Cart is empty !,Buy Something")
      Navigate('/')
    }

    const allFieldsFilled = fields.every(field => field.trim() !== '');
    if (!allFieldsFilled) {
      alert("Please finish filling out the form");
      return;
    }
    else {
      alert("You Have Successfully bought The Product")
      Navigate('/')
      clearall()
    }
  }
  return (
    <Container>
      <Formcheckout>
        <h1>CHECKOUT</h1>
        <form onSubmit={handleSubmit}>
          <Billingdetails>
            <p>Billing Details</p>
            <div>
              <Div1>
                {!errors.firstName && <label htmlFor='firstName'>Name</label>}
                {errors.firstName && <p className='error'>{errors.firstName}</p>}
                <input type='text' className={errors.firstName ? "error-border b-r" : "b-r"} name='firstName' placeholder='Alexei Ward' value={values.firstName} onBlur={handleBlur} onChange={handleChange} />
                {!errors.emailNumber && <label htmlFor='emailNumber'>Email Number</label>}
                {errors.emailNumber && <p className='error'>{errors.emailNumber}</p>}
                <input type='text' className={errors.emailNumber ? "error-border" : ""} name='emailNumber' placeholder='+1 202-555-0136' value={values.emailNumber} onBlur={handleBlur} onChange={handleChange}></input>
              </Div1>
              <Div2>
                {!errors.email && <label htmlFor='email'>Email</label>}
                {errors.email && <p className='error'>{errors.email}</p>}
                <input type='email' className={errors.email ? "error-border" : ""} name='email' placeholder='alexei@mail.com' value={values.email} onBlur={handleBlur} onChange={handleChange} />
              </Div2>
            </div>
          </Billingdetails>
          <Shippinginfo>
            <div>
              {!errors.street && <label htmlFor='street'>Street</label>}
              {errors.street && <p className='error'>{errors.street}</p>}
              <input className={errors.street ? "error-border" : ""} name='street' placeholder='1137 Williams Avenue' value={values.street} onBlur={handleBlur} onChange={handleChange} />
            </div>
            <div>
              <div>
                {!errors.code && <label htmlFor='code'>Code</label>}
                {errors.code && <p className='error'>{errors.code}</p>}
                <input className={errors.code ? "error-border" : ""} name='code' placeholder='10001' value={values.code} onBlur={handleBlur} onChange={handleChange} />
              </div>
              <div className='div-4 column'>
                {!errors.city && <label htmlFor='city'>City</label>}
                {errors.city && <p className='error'>{errors.city}</p>}
                <input className={errors.city ? "error-border" : ""} name='city' placeholder='New York' value={values.city} onBlur={handleBlur} onChange={handleChange} />
              </div>
            </div>
            <div>
              {!errors.country && <label htmlFor='country'>Country</label>}
              {errors.country && <p className='error'>{errors.country}</p>}
              <input className={errors.country ? "error-border" : ""} name='country' placeholder='United States' value={values.country} onBlur={handleBlur} onChange={handleChange} />
            </div>
          </Shippinginfo>
          <PaymentDetails>
            <Div6>
              <Div7>
                <label>e-Money</label>
                <input type='radio' name='radio' checked></input>
              </Div7>
              <Div8>
                <label>Cash on Delivery</label>
                <input type='radio' name='radio'></input>
              </Div8>
            </Div6>
            <Div9>
              {!errors.number && <label htmlFor='number'>Zip Code</label>}
              {errors.number && <p className='error'>{errors.number}</p>}
              <input className={errors.number ? "error-border" : ""} name='number' placeholder='238521993' value={values.number} onBlur={handleBlur} onChange={handleChange} />
              {!errors.eMoney && <label htmlFor='eMoney'>e-Money</label>}
              {errors.eMoney && <p className='error' style={{ margin: "10px 0 " }}>{errors.eMoney}</p>}
              <input className={errors.eMoney ? "error-border b-r" : "b-r"} name='eMoney' placeholder='6891' value={values.eMoney} onBlur={handleBlur} onChange={handleChange} />
            </Div9>
          </PaymentDetails>
        </form>
      </Formcheckout>
      <Checkoutcart>
        <h1>Summary</h1>
        <Cartmiddle>
          {newCartProduct}
        </Cartmiddle>
        <Checkoutcarttotal>
          <p><span>Total</span><span>{result}</span></p>
          <p><span>SHIPPING</span><span>{shipping}</span></p>
          <p><span>VAT (INCLUDED)</span><span>{vatIncluded}</span></p>
          <p><span>GRAND TOTAL</span><span>{result + shipping + vatIncluded}</span></p>
        </Checkoutcarttotal>
        <button className="custom-btn btn-3" onClick={handleClick}><span>Continue and pay</span></button>
      </Checkoutcart>
    </Container>
  )
}

export default Checkout
const Checkoutcarttotal = styled.div`
    width: 100%;
    p{
      display: flex;
      opacity: 0.8;
      margin-bottom: 10px;
     justify-content: space-between;
    }  @media only  screen  and (max-width:420px) {
      margin-top: 30px;
  }
`
const Cartmiddle = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
`
const Checkoutcart = styled.div`
h1{
  font-weight: 400;
}
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 40px;
  width: 37%;
  height: 50%;
  align-items: center;
  @media only  screen  and (max-width:420px) {
    width: 100%;
  }
  .checkout-btn{
  width: 100%;
  height: 50px;
  }
  h1{
    align-self:flex-start;
  }
`
const Div9 = styled.div`
p{
  margin: 10px 0;
}
display: flex;
flex-direction: column;
width: 50%;
@media only  screen  and (max-width:420px) {
  width: 100%;
  margin-top: 30px;
  }
label{
  margin: 10px 0;
}input{
  border-radius: 5px;
  height: 50px;
  width: 100%;
  padding-left: 20px;
  border: rgb(186, 184, 184) solid 0.5px;
}
`
const Div8 = styled.div`
border-radius: 5px;
transform: translateY(40px);
  padding-left: 20px;
  margin-bottom: 20px;
  width: 70%;
  border:  rgb(186, 184, 184) solid 0.5px;
  input{
    margin: 20px 10px;
  }  @media only  screen  and (max-width:420px) {
    transform: translateY(0);
  width: 100%;
  }
`
const Div7 = styled.div`
border-radius: 5px;
transform: translateY(40px);
  padding-left: 20px;
  margin-bottom: 20px;
  width: 70%;
  border:  rgb(186, 184, 184) solid 0.5px;
  input{
    margin: 20px 10px;
  }  @media only  screen  and (max-width:420px) {
    transform: translateY(0);
  width: 100%;
  }
`
const Div6 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media only  screen  and (max-width:420px) {
    width: 100%;
  }
`
const PaymentDetails = styled.div`
  display: flex;
  height: 26%;
  margin-top: 50px;
  padding: 20px;
  @media only  screen  and (max-width:420px) {
    padding:0;
    flex-direction: column;
  }
`
const Shippinginfo = styled.div`
  flex-direction: column;
  height: 33.3%;
  width: 100%;
  padding: 20px;
  :nth-child(3){
    display: flex;
    flex-direction: column;
    input{
      border-radius: 5px;
    }p{
      margin: 10px 0;
    }
  }
  :nth-child(2){
    input{
      margin: 10px 0;
    }
    label{
      margin: 10px 0;
    }
    @media only  screen  and (max-width:420px) {
      flex-direction: column;
  }
    display: flex;
    margin-top: 20px;
    :nth-child(1){
      flex-direction: column;
      p{
        margin: 10px 0;
      }
      input{
        margin: 10px 0;
        border-radius: 5px;
        @media only  screen  and (max-width:420px) {
          margin: 10px 0 ;
        }
      }
      @media only  screen  and (max-width:420px) {
        width: 100%;
      }
      width: 50%;
      flex-direction: column;
    }
  }
  :nth-child(1){
    display: flex;
    flex-direction: column;
    p{
      margin: 10px 0;
    }input{
      margin: 10px 0;
      border-radius: 5px;
    }
  }
  @media only  screen  and (max-width:420px) {
    padding:0;
    flex-direction: column;
  }
  label{
    margin:  10px 0;
  }
  input{
    border-radius: 5px;
  height: 50px;
  width: 100%;
  padding-left: 20px;
  border: rgb(186, 184, 184) solid 0.5px;
  }
`
const Div2 = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  @media only  screen  and (max-width:420px) {
    width: 100%;
    padding: 0;
  }input{
    border-radius: 5px;
    height: 50px;
  width: 100%;
  padding-left: 20px;
  border: rgb(186, 184, 184) solid 0.5px;
  }p{
    margin: 10px 0;
  }
  label{
    margin: 10px 0;
  }
`
const Div1 = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  p{
    margin: 10px 0;
  }
  label{
    margin: 10px 0;
  }input{
  border-radius: 5px;
  height: 50px;
  width: 100%;
  padding-left: 20px;
  border: rgb(186, 184, 184) solid 0.5px;
  }
  @media only  screen  and (max-width:420px) {
    width: 100%;
    padding: 0;
 }
`
const Container = styled.div`
  @media only  screen  and (max-width:420px) {
    flex-direction: column;
 }
  margin: 100px auto;
  justify-content: center;
  width: 77.7%;
  height: auto;
  background-color: #fff;
  padding:  20px 20px;
  display: flex;
  border-radius: 5px;
  box-shadow: 5px 5px 35px rgba(12, 80, 117, 0.467);
`
const Formcheckout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; 
  width: 60%;
  justify-content: center;
  h1{
    font-weight: 400;
  }
  @media only  screen  and (max-width:420px) {
    width: 100%;
 }form{
  height: 90%;
 }
`
const Billingdetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 33.3%;
  width: 100%; 
  p{
    text-align: start;
    margin: 20px;
  }div{
    display: flex;
    @media only  screen  and (max-width:420px) {
      flex-direction: column;
  }
  }
`