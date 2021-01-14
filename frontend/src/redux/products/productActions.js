import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./productConstants"
import axios from "axios"

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST
  })
  try{
    const { data } = await axios.get('http://127.0.0.1:5000/api/products')
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message
    })
  }
}