import React from 'react'
import { useSelector } from 'react-redux'
import Navbare from './Navbare'

const Livre = () => {
  const {products,loading} = useSelector(state => state.allproduct)

    return (
        <div>
          <Navbare/>

      <h1>livre</h1>
        </div>
    )
}

export default Livre
