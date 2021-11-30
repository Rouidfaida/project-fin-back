import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductlist } from '../redux/productAction'
import Login from './Login'
import Navbare from './Navbare'
import ProductList from './ProductList'
// import ProductCard from './ProductCard'


const Home = () => {
  // const {products,loading} = useSelector(state => state.allproduct)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //     dispatch(getProductlist())
        
  //   }, [])
    return (
        <div>
           <Navbare/>

        <img
          className="d-block w-100"
          style={{ height: "300px" }}
          src="https://cdn3.ceresbookshop.com/modules/tmhomeslider/images/1172b6d7faba02f5f5ceb2d8588d049390fca9e0_Bannieres-site-2.png"
          alt="Lg"
        />
<ProductList/> 
{/* <Login/> */}
       </div>
    )
}

export default Home
