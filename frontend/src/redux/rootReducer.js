import { combineReducers } from 'redux'
import productReducer from './products/productReducer'

const rootReducer  = combineReducers({
  products: productReducer
})

export default rootReducer