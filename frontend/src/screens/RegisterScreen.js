import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import {Link} from 'react-router-dom'
import { userRegister } from '../redux/user/userActions'

function RegisterScreen(props) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const userRegisterInfo = useSelector(state => state.userRegister)
  const {userInfo, loading, error} = userRegisterInfo
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmedPassword) {
      alert('Password and confirmed password are not match')
    }else{
      dispatch(userRegister(name, email, password))
    }
  }

  useEffect(() => {
    if (userInfo){
      props.history.push('/')
    }
  },[userInfo])

  return (
    <div>
      <form className='form' onSubmit={submitHandler}>
        <div>
          <h1>Create Account</h1>
        </div>
        {
          loading && <LoadingBox/>
        }
        {
          error && <MessageBox varient='danger'>{error}</MessageBox>
        }
        <div>        
          <label htmlFor='name'>Name</label>
          <input 
            type='name' 
            id='name' 
            placeholder='Enter Name'
            required
            onChange = {(e) => setName(e.target.value)}
          >
          </input>
        </div>
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
          <label htmlFor='password'>Confirm Password</label>
          <input 
            type='password' 
            id='password' 
            placeholder='Enter Confirm Password'
            required
            onChange = {(e) => setConfirmedPassword(e.target.value)}
          >
          </input>
        </div>
        <div>
          <label/>
          <button className='primary' type='submit'>Register</button>
        </div>
        <div>
          <label/>
          <div>
            Already have an account?
            <Link to='/signin'>
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegisterScreen
