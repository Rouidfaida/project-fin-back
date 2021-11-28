import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProduct } from '../redux/productAction'
import Navbare from './Navbare'
import Product from './Product'
// import ProductCard from './ProductCard'


const Home = () => {
  

  
    return (
        <div>
           <Navbare/>

        <img
          className="d-block w-100"
          style={{ height: "300px" }}
          src="https://cdn3.ceresbookshop.com/modules/tmhomeslider/images/1172b6d7faba02f5f5ceb2d8588d049390fca9e0_Bannieres-site-2.png"
          alt="Lg"
        />
<Product/> 
       </div>
    )
}

export default Home
