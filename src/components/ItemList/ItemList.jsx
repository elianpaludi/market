import React from 'react'
import Item from '../Item/Item'
import './itemlist.scss'
const ItemList = ({ products }) => {
  return (
    <div>
        <h1>Products</h1>
        <hr/>

        <section className='container'>
            { products.map((prods, index) => ( <Item key={prods.id} {...prods} /> ))}
        </section>
    </div>
  )
}

export default ItemList