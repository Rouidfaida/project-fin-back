import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getProductlist } from '../redux/productAction'
import ProductCard from './ProductCard'
import SignUp from './SignUp'

const ProductList = () => {
    
    const {products,loading} = useSelector(state => state.allproduct)
  const dispatch = useDispatch()

useEffect(() => {
    dispatch(getProductlist())
      
  }, [])

    return (
        <div style={{display:"flex",flexWrap:"wrap",marginLeft:"200px",marginTop:"50px",marginRight:"150px"}}>
            {
            loading?<h1>loading...</h1>:
            products.map((el,i)=><ProductCard el={el} key={i}/>)
            }
          
          
            {/* <button onClick={()=>dispatch(getProduct())}>on</button> */}
        </div>
    )
}

export default ProductList
