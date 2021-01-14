import React, { useEffect} from 'react'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../redux/products/productActions'

function HomeScreen () {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.products)
  const {loading, error, products } = productList


  // const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch(listProducts())
  }, [])

  return (
    <div>
      {
        loading ? (<LoadingBox/>)
        :
        error ? (<MessageBox varient='danger'>{error}</MessageBox>)
        :
        (
          <div className='row center'>
            {
              products.map((product) => {
                return (
                  <Product key={product._id} product={product} />
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default HomeScreen
