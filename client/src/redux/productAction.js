import axios from "axios"
import { PRODUCT_GET, PRODUCT_GET_FAIL, PRODUCT_GET_SUCCESS } from "./productActionType"



export const getProduct=()=>async(dispatch)=>{
dispatch({
    type:PRODUCT_GET
})
try {
    let res=await axios.get('/product/getProduct')
    dispatch({
        type:PRODUCT_GET_SUCCESS,
        payload:res.data,
    })
} catch (error) {
   dispatch({
       type:PRODUCT_GET_FAIL,
       payload:error.response.data
    }) 
}
}