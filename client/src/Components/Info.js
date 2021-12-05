import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import {  handelAdd, handelAddItem } from '../redux/CartAction'
import { ADD_PRODUCT_ITEM } from '../redux/CartActionType'
import { getProductId } from '../redux/productAction'
import Navbare from './Navbare'

const Info = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.allproduct)
   const {users} = useSelector(state => state.alluser)
let params = useParams();
let pr =products.find(el=>el._id==params.id)
const [qty, setQty] = useState(1);
// const addToCartHandler = () => {
//     dispatch(addProductToCart(pr._id, qty));
//     // history.push("/cart");
//   };

    return (
        <div>
        <Navbare/>
        <div style={{display:'block',border:"1px solid black",width:"400px",height:"300px",marginLeft:"600px",marginRight:"200px"}}>
        <h1>{pr.title}</h1>
            <h2>{pr.price}</h2>
            <img src={pr.imageUrl} alt=''/>

        </div>

           
           
          {/* <button
            type="button"
            id="cart_btn"
            className="btn btn-primary d-inline ml-4"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button> */}

            {/* <button onClick={()=>dispatch(ADD_PRODUCT_ITEM(pr._id,pr.price,pr.title,pr.quantity,users._id))}>ajouter au panier</button> */}
        </div>
    )
}


export default Info
