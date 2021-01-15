import React from 'react'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import CartScreen from './screens/CartScreen'
import { useSelector } from 'react-redux'
import { cartReducer } from './redux/cart/cartReducers'

function App () {

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <Link className='brand' to='/'>Amazon</Link>
          </div>
          <div className='links'>
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
            <Link to='/signin'>Sign in</Link>
          </div>
        </header>
        <main>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
        </main>
        <footer className='row center'>
          All right reserved
        </footer>        
      </div>
    </BrowserRouter>
  )
}

export default App
