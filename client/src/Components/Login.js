import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/userAction'
import {Form,Button} from'react-bootstrap'
import { Link,Navigate } from 'react-router-dom'
import './signUp.css'
import Admin from './Admin'
import { getProduct } from '../redux/productAction'

const Login = () => {
    const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const dispatch = useDispatch()
const handleSubmit=(e)=>{
  email.trim()===""||password.trim()===""?
  alert('this is required'):
  e.preventDefault()
  dispatch(loginUser({email,password}))
 
}
const {user,loading,isAdmin} = useSelector(state => state.alluser)


    return (

 <div class="container">
	<div class="card">
		<div class="card-image">	
			<h2 class="card-heading">
				Get started
				<small>Let us create your account</small>
			</h2>
		</div>
      <form class="card-form" onSubmit={handleSubmit}>
			<div class="input">
    <label class="input-label">Email address <span style={{color:"red"}}>(*)</span></label>
    <input class="input-field"  type="email"   required="required" value={email} onChange={e=>setEmail(e.target.value)} />
    </div>
    <div class="input">
    <label class="input-label">Password <span style={{color:"red"}}>(*)</span> </label>
    <input class="input-field"  type="password"  required="required"  value={password} onChange={e=>setPassword(e.target.value)}  />
  </div>
  
   
 <Link to='/'>
  <Button variant="primary"  type="submit"  onClick={handleSubmit}>
    
    Submit
   
  </Button>
  
  </Link>
  
</form> 
</div>
</div>
          
    )
}

export default Login
