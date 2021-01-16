import { combineReducers } from 'redux'
import { cartReducer } from './cart/cartReducers'
import {productReducer, productDetailsReducer } from './products/productReducer'
import { userSigninReducer } from './user/userReducers'

const rootReducer  = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer
})

export default rootReducer