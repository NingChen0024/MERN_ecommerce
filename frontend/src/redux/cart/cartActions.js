import axios from 'axios'
import { CART_ADD_REQUEST, CART_CHANGE_QTY, CART_DELETE_ITEM } from './cartConstants'

export const addToCart = (productId, qty) => async(dispatch, getState) => {
  const {data} = await axios.get(`http://127.0.0.1:5000/api/products/${productId}`)
  dispatch({
    type: CART_ADD_REQUEST,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty
    }
  })
  // save items in lcoal storage after dispatch new items
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const changeQty = (productId, qty) => async (dispatch, getState) => {
  dispatch({
    type: CART_CHANGE_QTY,
    payload: {
      productId: productId,
      qty
    }
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const deleteItem = (productId) => async (dispatch, getState) => {
  dispatch({
    type: CART_DELETE_ITEM,
    payload: {
      productId: productId,
    }
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}