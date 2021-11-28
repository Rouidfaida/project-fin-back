import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, PROFILE, PROFILE_FAIL, PROFILE_SUCCESS, SIGN_UP, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from "./userActionType"

let init={
    users:null,
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
            case PROFILE:
        return {
            ...state,
            loading:true,
        }
        case SIGN_UP_SUCCESS:
            return{
                ...state,loading:false,users:payload,
            }
        
          case SIGN_UP_FAIL:
              case LOGIN_FAIL:
                  case PROFILE_FAIL:
              return{
                  ...state,loading:false,error:payload,
              }
           case LOGIN_SUCCESS:
               return {
                ...state,loading:false,users:payload.theUser,
                token:payload.token,isAuth:true,errors:null,
                

               }
               case PROFILE_SUCCESS:
                    return{
                        ...state,loading:false,users:payload,
                        isAuth:true,errors:null
                    }
               case LOGOUT:
                   
                return {
                  ...state,
                  loading: false,
                  users: null,
                  token:null
                };

                 default:
                return state
}}
