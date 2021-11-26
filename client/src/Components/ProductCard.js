import React from 'react'

const ProductCard = ({el}) => {
    return (
        <div>
           <h1>{el.title}</h1> 
           <img src={el.imageUrl}/>
    
        </div>
    )
}

export default ProductCard
