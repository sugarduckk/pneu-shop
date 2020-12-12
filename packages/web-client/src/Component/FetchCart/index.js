import React from 'react'
import useGlobalState from 'redux-wrapper/hook/useGlobalState'
import FetchProduct from './FetchProduct'

const FetchCart = props => {
  const { cart } = useGlobalState()
  if (!cart || cart.length === 0) return null
  return <>
    {cart.map((product, index) => {
      return <FetchProduct key={product.productId} product={product} index={index} />
    })}
  </>
}

export default FetchCart