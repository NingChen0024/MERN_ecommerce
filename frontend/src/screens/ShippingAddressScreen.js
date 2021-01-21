import React from 'react'
import CheckoutSteps from '../components/CheckoutSteps'

function ShippingAddressScreen() {


  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input 
            type='email' 
            id='email' 
            placeholder='Enter Email'
            required
            onChange = {(e) => setEmail(e.target.value)}
          >

          </input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input 
            type='password' 
            id='password' 
            placeholder='Enter Password'
            required
            onChange = {(e) => setPassword(e.target.value)}
            
          >
          </input>
        </div>
        <div>
          <label/>
          <button className='primary' type='submit'>Sign In</button>
        </div>
        <div>
          <label/>
          <div>
            New Customer? 
            <Link to='/register'>
              Create your account
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ShippingAddressScreen
