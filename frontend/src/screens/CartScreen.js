import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import MessageBox from '../components/MessageBox';
import { addToCart, changeQty, deleteItem } from '../redux/cart/cartActions';

function CartScreen(props) {

  const productId = props.match.params.id;
  const qty = props.location.search 
  ? Number(props.location.search.split('=')[1])
  : 1
  const dispatch  = useDispatch()
  const { cartItems } = useSelector(state => state.cart)

  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId, qty))
    }
  },[dispatch, productId, qty])

  const qtyChangeHandler = (productId, qty) => {
    dispatch(changeQty(productId, qty))
  }

  const deleteItemHandler = (productId) => {
    dispatch(deleteItem(productId))
  }

  // push to shipping after sign in
  const checkoutHandler = () => {
    props.history.push('/signin?redirect=shipping')
  }

  return (
    <div>
      <div>Shopping Cart</div>
      {
        cartItems.length === 0 ? (
          <MessageBox>
            Shopping Cart is Empty
            <Link to='/'>
              <button className='alert'>
                Let's go shopping!
              </button>
            </Link>
          </MessageBox>
        ):(
          <div className='row'>
            <div>
              {
                  cartItems.map((item, ) => {
                    return (
                        <div className='row top' key={item.product}>
                          <div className='item-row'>
                            <img className='small' src={item.image} alt={item.name} />  
                          </div>
                          <div className='item-row text'>
                            <div>{item.name}</div>
                          </div>
                          <div className='item-row'>
                            <select value={item.qty} onChange={(e) => qtyChangeHandler(item.product,e.target.value)}>
                              {            
                                [...Array(item.countInStock).keys()].map(x => (
                                  <option key={ x + 1} value={ x + 1 }>{ x + 1 }</option>
                                ))
                              }
                            </select>
                          </div>
                          <div className='item-row text'>
                            <div>${item.price}</div>
                          </div>                 
                          <div className='item-row'>
                            <button
                              onClick={() => deleteItemHandler(item.product)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                    )
                  })
              }
            </div>
            <div>
              <div className='card card-body'>
                <ul>
                  <li>
                    <div className='row'>
                      {`Subtotal(${cartItems.length} items):${
                        cartItems.reduce((total, item) => total + item.qty * item.price, 0)
                      }`}
                    </div>
                  </li>
                  <li>
                    <div className='row'>
                      <button 
                        className='primary'
                        type='button'
                        onClick={checkoutHandler}
                        disabled={cartItems.length === 0}
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CartScreen
