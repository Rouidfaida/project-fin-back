import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { getProduct } from '../redux/productAction'
import AddProduct from './AddProduct'
import Home from './Home'
import Login from './Login'

const Admin = () => {
    const {users,loading} = useSelector(state => state.alluser)
    const dispatch = useDispatch()
  
    return (
        <div>  
          {users.userRole === "Manager" ? 
           <AddProduct/>
           : <Home/>
           }
        
                </div>
    )
}

export default Admin
