import React from 'react'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <a className='brand' href='/'>Amazon</a>
          </div>
          <div className='links'>
            <a href='/cart'>Cart</a>
            <a href='/signin'>Sign in</a>
          </div>
        </header>
        <main>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </main>
        <footer className='row center'>
          All right reserved
        </footer>        
      </div>
    </BrowserRouter>
  )
}

export default App
