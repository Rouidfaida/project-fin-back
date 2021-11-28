import { ADD_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, PRODUCT_GET, PRODUCT_GET_FAIL, PRODUCT_GET_SUCCESS } from "./productActionType"


let initial={
    products:null,
    error:null,
    loading:false,
    token:localStorage.getItem('token'),
    isAuth:false,

}
export const productReducer=(state=initial,{payload,type})=>{
    switch (type) {
        case PRODUCT_GET:
            case ADD_PRODUCT:
            return{...state,loading:true
            }
            case PRODUCT_GET_FAIL:
                case ADD_PRODUCT_FAIL:
                return{
                    ...state,error:payload,loading:false    
                          }
    case PRODUCT_GET_SUCCESS:
        return{
            ...state,products:payload,loading:false
        }
        case ADD_PRODUCT_SUCCESS:
            return{
                ...state,loading:false,
                products: [...state.products, payload],

                        isAuth:true,errors:null, 

            }
        default:
   return state
    }
}