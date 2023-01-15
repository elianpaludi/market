import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = () => {
    const [product, setProduct] = useState([])
    const FetchData = async () => {
       const response = await fetch('https://fakestoreapi.com/products?limit=20')
            const data = await response.json()
            console.log(data)
            setProduct(data)
    }
    useEffect(() => {
      FetchData()
    }, [])
  return (
    <div>
      {
        <ItemList products={product}/>
      }
    </div>
  )
}

export default ItemListContainer