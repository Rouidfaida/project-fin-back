import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from "./userActionType"

let init={
    user:null,
    loading:false,
    error:null,
    token:localStorage.getItem('token'),
    isAuth:false,
    isAdmin:null,
}

export const userReducer=(state=init,{payload,type})=>{
switch (type) {
    case SIGN_UP:
        case LOGIN:
        return {
            ...state,
            loading:true,
        }
        case SIGN_UP_SUCCESS:
            return{
                ...state,loading:false,user:payload,
            }
        
          case SIGN_UP_FAIL:
              case LOGIN_FAIL:
              return{
                  ...state,loading:false,error:payload,
              }
           case LOGIN_SUCCESS:
               return {
                ...state,loading:false,user:payload.theUser,
                token:payload.token,isAuth:true,errors:null,

               }
               case LOGOUT:
                return {
                  ...state,
                  loading: false,
                  user: null,
                  token:null
                };
                 default:
                return state
}}