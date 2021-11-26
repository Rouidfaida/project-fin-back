import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from "./userActionType"
import axios from 'axios'


export const signUpUser=(newUser)=>async(dispatch)=>{
dispatch({
    type:SIGN_UP,
})
try {
    let res=await axios.post('/user/signUp',newUser)
    dispatch({
        type:SIGN_UP_SUCCESS,
        payload:res.data,
    })
} catch (error) {
    dispatch({
type:SIGN_UP_FAIL,
payload:error.response.data
    })
}
}

export const loginUser=(user)=>async(dispatch)=>{
    dispatch({
        type:LOGIN
    })
    try {
        let res=await axios.post('/user/login',user)
        localStorage.setItem('token',res.data.token)
        dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data,

        })
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data
        })
    }
}
export const logout = () =>async (dispatch) => {
  
    dispatch({
      type: LOGOUT,
    });
  };