import { combineReducers } from 'redux'
import { cartReducer } from './cart/cartReducers'
import {productReducer, productDetailsReducer } from './products/productReducer'
import { userRegisterReduer, userSigninReducer } from './user/userReducers'

const rootReducer  = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReduer
})

export default rootReducer