import { CART_ADD_REQUEST, CART_CHANGE_QTY, CART_DELETE_ITEM } from "./cartConstants";

const initialState = {
    cartItems: localStorage.getItem('cartItems') 
      ? JSON.parse(localStorage.getItem('cartItems')) 
      : []
}

export const cartReducer = (state = initialState, action) => {
  switch(action.type){
    case CART_ADD_REQUEST:
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.product === item.product)
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => 
            x.product === existItem.product ? item : x
          ),
        }
      } else {
        return {...state, cartItems: [...state.cartItems, item]}
      }

    case CART_CHANGE_QTY:
      const { productId, qty } = action.payload
      const existProduct = state.cartItems.find((x) => x.product === productId)
      if (existProduct){
        return {
          ...state,
          cartItems: state.cartItems.map((x) => 
            x.product === existProduct.product ? {
              ...x, qty: qty
            } : x
          )
        }
      }

    case CART_DELETE_ITEM:
      const product = action.payload
      const ItemsInCart = state.cartItems.filter(x => x.product !== product.productId)
      return {
        ...state,
        cartItems: ItemsInCart
      }
    default:
      return state
  }
}