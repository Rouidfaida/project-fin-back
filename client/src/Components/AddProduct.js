import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProduct } from '../redux/productAction'
import { profileUser } from '../redux/userAction'
import Product from './Product'

const AddProduct = () => {
    const {users} = useSelector(state => state.alluser)
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [imageUrl, setImageUrl] = useState('')
const [price, setPrice] = useState('')
const [category, setCategory] = useState('')
const [quantity, setQuantity] = useState('')
const [date_product, setDate_product] = useState('')
const dispatch = useDispatch()
const handeleSubmit=(e)=>{
    e.preventDefault()
dispatch(addProduct({title,description,imageUrl,price,category,quantity}))}
    return (
        <div>
            <h1>{users.userRole}</h1>
<form onSubmit={handeleSubmit}>
    <div style={{display:'flex'}}>
    <label>title</label>
     <input type='text' value={title} onChange={e=>setTitle(e.target.value)}/>
    </div>
    <div style={{display:'flex'}}>
    <label>description</label>
<input type='text' value={description} onChange={e=>setDescription(e.target.value)}/>
</div>
<div style={{display:'flex'}}>
    <label>image</label>
<input type='text' value={imageUrl} onChange={e=>setImageUrl(e.target.value)}/>
</div>
<div style={{display:'flex'}}>
    <label>price</label>
<input type='text' value={price} onChange={e=>setPrice(e.target.value)}/>
</div>
<div style={{display:'flex'}}>
    <label>category</label>
<input type='text' value={category} onChange={e=>setCategory(e.target.value)}/>
</div>
<div style={{display:'flex'}}>
    <label>quantity</label>
<input type='text' value={quantity} onChange={e=>setQuantity(e.target.value)}/>
</div>
<div style={{display:'flex'}}>
    <label>date</label>
<input type='text' value={date_product} onChange={e=>setDate_product(e.target.value)}/>
</div>
<button onClick={handeleSubmit}>add</button>
</form>
</div>
    )
}

export default AddProduct
