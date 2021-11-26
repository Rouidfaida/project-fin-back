import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'

const Admin = () => {
    const {user} = useSelector(state => state)
    return (
        <div>  {
            
            user.isRole==='Admin'?<Login/>:
            <h2>home</h2>}
        </div>
    )
}

export default Admin
