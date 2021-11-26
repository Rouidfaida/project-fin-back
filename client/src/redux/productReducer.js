import { PRODUCT_GET, PRODUCT_GET_FAIL, PRODUCT_GET_SUCCESS } from "./productActionType"


let initial={
    products:null,
    error:null,
    loading:false,
}
export const productReducer=(state=initial,{payload,type})=>{
    switch (type) {
        case PRODUCT_GET:
            return{...state,loading:true
            }
            case PRODUCT_GET_FAIL:
                return{
                    ...state,error:payload,loading:false    
                          }
    case PRODUCT_GET_SUCCESS:
        return{
            ...state,products:payload,loading:false
        }
        default:
   return state
    }
}