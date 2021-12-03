import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getProductId } from '../redux/productAction'

const Info = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => state.allproduct)
   
let params = useParams();
let pr =products.find(el=>el._id==params.id)

    return (
        <div>
            <h1>{pr.title}</h1>
        </div>
    )
}

export default Info
