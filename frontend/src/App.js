import React from 'react'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import { useDispatch, useSelector } from 'react-redux'
import RegisterScreen from './screens/RegisterScreen'
import SigninScreen from './screens/SigninScreen'
import {userSignout} from './redux/user/userActions'

function App () {

  const cart = useSelector(state => state.cart)
  const userSignin = useSelector(state => state.userSignin)
  const dispatch = useDispatch()
  const { cartItems } = cart
  const {userInfo} = userSignin

  const signoutHandler = () => {
    dispatch(userSignout())
  }

  return (
    <BrowserRouter>
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
        </main>
        <footer className='row center'>
          All right reserved
        </footer>        
      </div>
    </BrowserRouter>
  )
}

export default App
