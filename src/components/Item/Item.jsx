import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import './item.scss'
const Item = (prod) => {



  

  return (
    <Link to={`/products/${prod.id}`} className='card'>
      <div className='img-container'>
        <img alt={prod.image} src={prod.image}></img>
      </div>

      <div className='sub-card'>
        <p>$ {prod.price}</p>
      </div>
    </Link>
  )
}

export default Item