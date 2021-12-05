import axios from "axios";
import { ADD_PRODUCT_ITEM } from "./CartActionType";



// export const addProductToCart=(id,qty) => async (dispatch) => {
  
  
// const res = await axios.get(`/product/getProductById/${id}`)   
//       dispatch({
      
//         type:  ADD_PRODUCT_TO_CART_SUCCESS,
//         payload: {
//           product: res.data._id,
//           title: res.data.title,
//           description:res.data.description,
//           imageUrl:res.data.imageUrl,
//           price: res.data.price,
// // categorie:res.data.categorie,
//           // total: res.data.total,
//           qty
//       }
//       });
  
//     }


  export const handelAddItem=(newproduct)=>{
    return{
        type:ADD_PRODUCT_ITEM,
        payload:newproduct
    }}
 