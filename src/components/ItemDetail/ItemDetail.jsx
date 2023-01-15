import React, { useEffect, useState } from 'react'
import './ItemDetail.scss'
const ItemDetail = (prod) => {

  const [specifyProduct, setSpecifyProduct] = useState([])

  const FetchApi = async () => {
    const actualLocation = window.location.pathname 
    actualLocation.substring(1)

    const response = await fetch(`https://fakestoreapi.com/products/${actualLocation.substring(11,10)}`)
    const data = await response.json()
    console.log(data)
    setSpecifyProduct(data)
}

  useEffect(() => {
    FetchApi()
  })

  return (
    <main className='specific_item'>
      <img src={specifyProduct.image} alt="" />
      <h3>{specifyProduct.title}</h3>
      <h2>{specifyProduct.description}</h2>
      <h4>$ {specifyProduct.price}</h4>
      <button>Add to cart</button>
    </main>
  )
}

export default ItemDetail