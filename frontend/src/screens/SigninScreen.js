import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import {Link} from 'react-router-dom'
import { userSignin } from '../redux/user/userActions'

function SigninScreen(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userDetail = useSelector(state => state.userSignin)
  const {userInfo, loading, error} = userDetail

  const redirect = props.location.search 
    ? props.location.saerch.split('=')[1]
    : '/'

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userSignin(email, password))
  }

  //push to dashboard after signin
  useEffect(() => {
    if (userInfo){
      props.history.push(redirect)
    }
  },[userInfo])


  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {
          loading && <LoadingBox/>
        }
        {
          error && <MessageBox varient='danger'>{error}</MessageBox>
        }
        <div>
          <label htmlFor='email'>Email Address</label>
          <input 
            type='email' 
            id='email' 
            placeholder='Enter Email'
            required
            onChange = {(e) => setEmail(e.target.value)}
          >

          </input>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input 
            type='password' 
            id='password' 
            placeholder='Enter Password'
            required
            onChange = {(e) => setPassword(e.target.value)}
          >
          </input>
        </div>
        <div>
          <label/>
          <button className='primary' type='submit'>Sign In</button>
        </div>
        <div>
          <label/>
          <div>
            New Customer? 
            <Link to='/register'>
              Create your account
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SigninScreen
