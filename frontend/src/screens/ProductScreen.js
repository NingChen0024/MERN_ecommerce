import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { detailsProduct } from '../redux/products/productActions'

function ProductScreen (props) {

  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  // get :id in url
  const productId = props.match.params.id
  const productDetails = useSelector(state => state.productDetails)
  const {loading, product, error} = productDetails


  useEffect(() => {
    dispatch(detailsProduct(productId))
  }, [])

  const addToChartHandler = () => {
      props.history.push(`/cart/${productId}?qty=${qty}`)
  }
  return (
    <div>
      <Link to='/'>Back to results</Link>
      <div>
        {
          loading ? (<LoadingBox/>)
          : error ? (<MessageBox varient='danger'>{error}</MessageBox>)
          :(
            <div className='row top'>
              <div className='col-2'>
                <img className='large' src={product.image} alt={product.name} />
              </div>
              <div className='col-1'>
                <ul>
                  <li>
                    <h1>{product.name}</h1>
                  </li>
                  <li>
                    <Rating rating={product.rating} numReviews={product.numReviews} />
                  </li>
                  <li>
                    Price: ${product.price}
                  </li>
                  <li>
                    Description:<br/>
                    {product.description}
                  </li>
                </ul>
              </div>
              <div className='col-1'>
                <div className='card card-body'>
                  <ul>
                    <li>
                      <div className='row'>
                        <div>Price</div>
                        <div className='price'>${product.price}</div>
                      </div>
                    </li>
                    <li>
                      <div className='row'>
                        <div>Status</div>
                        <div>
                          {
                            product.countInStock > 0 ? (
                              <span className='success'>In Stock</span>
                            ) : (
                              <span className='error'>Unavailable</span>
                            )
                          }
                        </div>
                      </div>
                    </li>
                    {
                      product.countInStock > 0 ? (
                        <>
                          <li>
                            <div className='row'>
                              <div>Qty</div>
                              <select value={qty} onChange={e => setQty(e.target.value)}>
                                {
                                  [...Array(product.countInStock).keys()].map(x => (
                                    <option key={ x + 1} value={ x + 1 }>{ x + 1 }</option>
                                  ))
                                }
                              </select>
                            </div>
                          </li>
                          <li>
                            <button 
                              className='add primary'
                              onClick = {addToChartHandler}
                            >
                              Add to Cart
                            </button>
                          </li>
                        </>
                      ):(
                        <li>
                          <div className='row right'>
                            Sold Out
                          </div>
                        </li>
                      )
                    }
                    
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ProductScreen
