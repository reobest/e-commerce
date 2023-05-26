import React from 'react'
import { useContext } from 'react'
import { productContext } from '../App'
import { useFormik } from 'formik'
import schema from '../components/MayLikeData'
const Checkout = () => {   
    const {values,handleBlur,handleChange,handleSubmit,errors}  = useFormik({
        initialValues:schema.initialValues,
         validationSchema:schema.schema,
        onSubmit: (actions) => {
           actions.resetForm()
        },
       })
    let shipping = 50
    let vatIncluded = 1079
    const productConsumer = useContext(productContext)
    const {newCartProduct,result} = productConsumer
  return (
    <div className='checkout flex b-r shadow '>
        <div className='form-checkout flex column'>
        <h1 className='f-400'>CHECKOUT</h1>
      <form className='form'  onSubmit={handleSubmit}>
        <div className='Billing-Details flex'>
            <p className='uni'>Billing Details</p>
            <div className='flex'>
            <div className='div-1 flex column'>
           {  !errors.firstName && <label htmlFor='firstName'>Name</label>}
           {errors.firstName && <p className='error' style={{margin:"10px 0 "}}>{errors.firstName}</p>}
            <input  type='text' className={errors.firstName ? "error-border b-r" : "b-r"}  name='firstName' placeholder='Alexei Ward' value={values.firstName} onBlur={handleBlur} onChange={handleChange} />
            {  !errors.emailNumber && <label htmlFor='emailNumber'>Email Number</label>}
            {errors.emailNumber && <p className='error' style={{margin:"10px 0 "}}>{errors.emailNumber}</p>}
            <input type='text' className={errors.emailNumber ? "error-border b-r" : "b-r"} name='emailNumber' placeholder='+1 202-555-0136' value={values.emailNumber} onBlur={handleBlur} onChange={handleChange}></input>
            </div>
            <div className='div-2 flex column'>
            {  !errors.email && <label htmlFor='email'>Email</label>}
            {errors.email && <p className='error' style={{margin:"10px 0 "}}>{errors.email}</p>}
            <input type='email' className={errors.email? "error-border b-r" : "b-r"} name='email' placeholder='alexei@mail.com' value={values.email} onBlur={handleBlur} onChange={handleChange}/>
            </div>
            </div>
        </div>
        <div className='shipping-info'>
            <div className='flex column'>
            {  !errors.street && <label htmlFor='street'>Street</label>}
            {errors.street && <p className='error' style={{margin:"10px 0 "}}>{errors.street}</p>}
            <input className={errors.street ? "error-border b-r" : "b-r"} name='street' placeholder='1137 Williams Avenue' value={values.street} onBlur={handleBlur} onChange={handleChange}/>
            </div>
            <div className='flex div-5'>
                <div className='div-3 column'>
                {  !errors.code && <label htmlFor='code'>Code</label>}
                {errors.code && <p className='error' style={{margin:"10px 0 "}}>{errors.code}</p>}
                <input className={errors.code? "error-border b-r" : "b-r"} name='code' placeholder='10001' value={values.code} onBlur={handleBlur} onChange={handleChange}/>
                </div>
                <div className='div-4 column'>
                {  !errors.city && <label htmlFor='city'>City</label>}
                {errors.city && <p className='error' style={{margin:"10px 0 "}}>{errors.city}</p>}
                <input className={errors.city ? "error-border b-r" : "b-r"} name='city' placeholder='New York' value={values.city} onBlur={handleBlur} onChange={handleChange}/>
                </div>
            </div>
            <div className='flex column'>
            {  !errors.country && <label htmlFor='country'>Country</label>}
            {errors.country && <p className='error' style={{margin:"10px 0 "}}>{errors.country}</p>}
            <input className={errors.country? "error-border b-r" : "b-r"} name='country' placeholder='United States' value={values.country} onBlur={handleBlur} onChange={handleChange}/>
            </div>
        </div>
        <div className='payment-details flex'>
            <div className='div-6 flex column'>
                <div className='div-7 b-r'>
                <label>e-Money</label>
                <input type='radio' name='radio' checked></input>
                </div>
                <div className='div-8 b-r'>
                <label>Cash on Delivery</label>
                <input type='radio' name='radio'></input> 
                </div>
            </div>
        <div className='div-9 flex column'>
        {  !errors.number && <label htmlFor='number'>Zip Code</label>}
        {errors.number && <p className='error' style={{margin:"10px 0 "}}>{errors.number}</p>}
            <input className={errors.number ? "error-border b-r" : "b-r"} name='number' placeholder='238521993' value={values.number} onBlur={handleBlur} onChange={handleChange}/>
            {  !errors.eMoney && <label htmlFor='eMoney'>e-Money</label>}
            {errors.eMoney && <p className='error' style={{margin:"10px 0 "}}>{errors.eMoney}</p>}
            <input className={errors.eMoney? "error-border b-r" : "b-r"} name='eMoney' placeholder='6891' value={values.eMoney} onBlur={handleBlur} onChange={handleChange}/>
        </div>
        </div>
        </form>
    </div>
    <div className='checkout-cart flex column'>
        <h1 className='f-400'>Summary</h1>
      <div className='cart-middle flex column'>
        {newCartProduct}  
      </div>
      <div className='checkout-cart-total'>
       <p className='flex opacity'><span>Total</span><span>{result}</span></p>
       <p className='flex opacity'><span>SHIPPING</span><span>{shipping}</span></p>
       <p className='flex opacity'><span>VAT (INCLUDED)</span><span>{vatIncluded}</span></p>
       <p className='flex opacity'><span>GRAND TOTAL</span><span>{result + shipping + vatIncluded}</span></p>
      </div>
      <button className="custom-btn btn-3 checkout-btn"><span>Continue and pay</span></button>
    </div>
    </div>
  )
}

export default Checkout