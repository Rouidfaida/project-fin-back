import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, logout, profileUser } from '../redux/userAction';
import { Link,Navigate } from 'react-router-dom'

const Profile = () => {
    const {users,loading} = useSelector(state => state.alluser)
  
      const dispatch = useDispatch();
    //   useEffect(() => {
    //     dispatch(profileUser());
    //   }, []);
    //   const handelSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(logout());
    //     <Navigate to="/login" />;
    //   };

    return (
        <div>
                    <h1>{users.firstName}</h1> 
                    <Link to='/'>   
                    <button>submit</button> 

</Link>
        </div>
    )
}

export default Profile
