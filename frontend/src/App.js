import React from 'react'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import { useDispatch, useSelector } from 'react-redux'
import RegisterScreen from './screens/RegisterScreen'
import SigninScreen from './screens/SigninScreen'
import {clearUserRegister, userSignout} from './redux/user/userActions'
import {clearCart} from './redux/cart/cartActions'
import ShippingAddressScreen from './screens/ShippingAddressScreen'

function App (props) {

  const cart = useSelector(state => state.cart)
  const userSignin = useSelector(state => state.userSignin)
  const dispatch = useDispatch()
  const { cartItems } = cart
  const {userInfo} = userSignin

  const signoutHandler = (e) => {
    dispatch(userSignout())
    dispatch(clearCart())
    dispatch(clearUserRegister())
    props.history.push('/')
  }

  return (
      <div className='grid-container'>
        <header className='row'>
          <div>
            <Link className='brand' to='/'>Amazon</Link>
          </div>
          <div className='links row'>
            <Link to='/cart'>
              Cart
              {
                cartItems.length > 0 && (
                  <span className='badge'>
                    {cartItems.length}
                  </span>
                )
              }
            </Link>
            {
              userInfo ? (
                <div className='dropdown'>
                  <Link to='#'>
                    {userInfo.name} <i className='fa fa-caret-down'></i>
                  </Link>
                  <ul className='dropdown-content'>
                    <Link to='#signout' onClick={signoutHandler}>Sign out</Link>
                  </ul>
                </div>
              ):(
                <Link to='/signin'>Sign in</Link>
              )
            }
          </div>
        </header>
        <main>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/signin' component={SigninScreen} />
          <Route path='/register' component={RegisterScreen}/>
          <Route path='/shipping' component={ShippingAddressScreen}/>
        </main>
        <footer className='row center'>
          All right reserved
        </footer>        
      </div>
  )
}

export default withRouter(App)
