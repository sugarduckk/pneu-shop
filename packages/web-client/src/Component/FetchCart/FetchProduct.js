import React from 'react'
import useProduct from 'firebase-wrapper/firestore/useProduct'
import { useDeleteState, useSetState } from 'redux-wrapper/action'


const FetchProduct = ({ product, index }) => {
  const prod = useProduct(product.productId)
  const setState = useSetState()
  React.useEffect(() => {
    setState(pre => {
      const cartData = {
        ...pre.cartData,
        [product.productId]: prod
      }
      return {
        cartData
      }
    })
    return () => {
      setState(pre => {
        const cartData = {
          ...pre.cartData
        }
        delete cartData[product.productId]
        return {
          cartData
        }
      })
    }
  }, [prod, product.productId, setState])
  return null
}

export default FetchProduct