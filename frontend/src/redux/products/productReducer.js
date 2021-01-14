import data from '../../data'
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from './productConstants'

const initialState = {
  loading: true,
  products: []
}

const productReducer = (state = initialState, action) => {
  switch(action.type){
    case PRODUCT_LIST_REQUEST:
      return {loading: true}
    case PRODUCT_LIST_SUCCESS:
      return {loading: false, products: action.payload }
    case PRODUCT_LIST_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
  return { products: data.products }
}

export default productReducer