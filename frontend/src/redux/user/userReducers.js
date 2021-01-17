import { USER_REGISTER_CLEAR, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "./userConstants"

const initialState = {
  userInfo: localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null
}

export const userSigninReducer = (state = initialState, action) => {
  switch(action.type){
    case USER_SIGNIN_REQUEST:
      return {
        loading: true
      }
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload
      }
    case USER_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case USER_SIGNOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReduer = (state = {}, action) => {
  switch(action.type){
    case USER_REGISTER_REQUEST:
      return {
        loading: true
      }
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload
      }
    case USER_REGISTER_FAIL: 
      return {
        loading: false,
        error: action.payload
      }
    case USER_REGISTER_CLEAR:
      return {}
    default:
      return state
  }
}