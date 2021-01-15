import { combineReducers } from 'redux'
import { cartReducer } from './cart/cartReducers'
import {productReducer, productDetailsReducer } from './products/productReducer'

const rootReducer  = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer
})

export default rootReducer