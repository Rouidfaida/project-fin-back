import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../redux/productAction'
import ProductCard from './ProductCard'
import SignUp from './SignUp'

const Product = () => {
    const {products,loading} = useSelector(state => state.allproduct)
    // const {user} = useSelector(state => state.alluser)
    const dispatch = useDispatch()
useEffect(() => {
  dispatch(getProduct())
    
}, [])

    return (
        <div>
            {
            loading?<h1>loading...</h1>:
            products.map((el,i)=><ProductCard el={el} key={i}/>)
            }
          
          
            {/* <button onClick={()=>dispatch(getProduct())}>on</button> */}
        </div>
    )
}

export default Product
