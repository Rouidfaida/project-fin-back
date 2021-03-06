import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/userAction'
import {Form,Button} from'react-bootstrap'
import { Link,Navigate } from 'react-router-dom'
import './signUp.css'
import { getProductlist } from '../redux/productAction'
import Navbare from './Navbare'


const Login = () => {
    const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const dispatch = useDispatch()
const handleSubmit=(e)=>{
  // email.trim()===""||password.trim()===""?
  // alert('this is required'):
  e.preventDefault()
  dispatch(loginUser({email,password}))
  dispatch(getProductlist())
 
}
const {users,loading} = useSelector(state => state.alluser)


    return (

  <div>
    <Navbare/>

{                    
                loading?<h1>...loading</h1>:localStorage.getItem('token')?<Navigate to='/'/>:
           
<Form style={{margin:"100px 100px 400px 300px"}}>
  <Form.Group style={{width:"300px",marginLeft:"50px"}} className="mb-3" controlId="formGroupEmail">
    <Form.Label style={{marginLeft:'-200px'}}>Adresse Email<span style={{color:"red"}}>(*)</span></Form.Label>
    <Form.Control type="email" required="required" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter email" />
  </Form.Group>
  <Form.Group  style={{width:"300px",marginLeft:"50px"}} className="mb-3" controlId="formGroupPassword">
    <Form.Label style={{marginLeft:'-200px'}}>Mot de passe<span style={{color:"red"}}>(*)</span></Form.Label>
    <Form.Control type="password" placeholder="Password" required="required"  value={password} onChange={e=>setPassword(e.target.value)} />
  </Form.Group>
     <Button variant="primary"  type="submit"  onClick={handleSubmit}>submit</Button>

</Form>
  

//       <form class="card-form" onSubmit={handleSubmit}>
// 			<div class="input">
//     <label class="input-label">Email address <span style={{color:"red"}}>(*)</span></label>
//     <input class="input-field"  type="email"   required="required" value={email} onChange={e=>setEmail(e.target.value)} />
//     </div>
//     <div class="input">
//     <label class="input-label">Password <span style={{color:"red"}}>(*)</span> </label>
//     <input class="input-field"  type="password"  required="required"  value={password} onChange={e=>setPassword(e.target.value)}  />
//   </div>
   
//   <Button variant="primary"  type="submit"  onClick={handleSubmit}>
    
//     Submit
   
//   </Button>
  
  
// </form> 
// </div>
}</div>





    )
}

export default Login
