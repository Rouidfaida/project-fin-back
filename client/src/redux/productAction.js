import axios from "axios"
import { ADD_PRODUCT, ADD_PRODUCT_FAIL, ADD_PRODUCT_SUCCESS, PRODUCT_GET, PRODUCT_GET_FAIL, PRODUCT_GET_SUCCESS } from "./productActionType"



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
export const addProduct = (newProduct) => async (dispatch) => {
    dispatch({ type: ADD_PRODUCT });
    let token = localStorage.getItem("token");
    let config = {
      headers: {
          Authorization: token,
      }
    };
    try {
      const res = await axios.post("/product/postProduct",newProduct,config);
      
      dispatch({
        type: ADD_PRODUCT_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_PRODUCT_FAIL,
        payload: error.response.data,
      });
    }
  };