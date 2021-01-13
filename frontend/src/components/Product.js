import React from 'react'
import Rating from './Rating'

function Product (props) {
  const { product } = props
  return (
    <div className='card' key={product._id}>
      <a href={`/product/${product._id}`}>
        <img className='medium' src={product.image} alt={product.name} />
      </a>
      <div className='card-body'>
        <a href={`/product/${product._id}`}>
          <h1>{product.name}</h1>
        </a>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <div className='price'>
          ${product.price}
        </div>
      </div>
    </div>
  )
}

export default Product
