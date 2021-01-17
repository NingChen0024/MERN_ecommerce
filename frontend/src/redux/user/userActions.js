import axios from 'axios'
import { USER_REGISTER_CLEAR, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from './userConstants'

export const userSignin = (email, password) => async(dispatch, getState) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
  })
  try{
    const {data} = await axios.post('http://127.0.0.1:5000/api/users/signin', {email: email, password: password})
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  }catch(error){
    console.log(error.response)
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}

export const userSignout = () => (dispatch) =>{
  localStorage.removeItem('userInfo')
  dispatch({
    type: USER_SIGNOUT,
  })
}

export const userRegister = (name, email, password) => async(dispatch) => {
  dispatch({type: USER_REGISTER_REQUEST})
  try{
    const {data} = await axios.post('http://127.0.0.1:5000/api/users/register', {name: name, email: email, password: password})
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  }catch(error){
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message
    })
  }
}

export const clearUserRegister = ()=> async (dispatch) => {
  dispatch({
    type: USER_REGISTER_CLEAR
  })
}
