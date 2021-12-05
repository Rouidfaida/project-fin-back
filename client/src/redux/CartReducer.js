import { ADD_PRODUCT_ITEM, ADD_PRODUCT_TO_CART, ADD_PRODUCT_TO_CART_FAIL, ADD_PRODUCT_TO_CART_SUCCESS } from "./CartActionType";


   const cartItem=[]

  export const CartReducer=(state=cartItem,{payload,type})=>{
    const productnew=payload  
    switch (type) {
        
        case ADD_PRODUCT_ITEM:

                const existItem = state.find((x) => x.id === productnew._id)
                if(existItem){
                    return state.map((x)=> x.id === productnew._id?{...x,qty:x.qty+1}:x)
                }
                   
                else {
                    const productnew=payload
                    return[
                        ...state,{
                            productnew,
                            qty:1
                        }
                    ]
                }  
            
          default:
    return state
            }
  }