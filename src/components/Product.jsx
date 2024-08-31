import React from 'react'
import ProductItem from './ProductItem'

const Product = ({products, onDel}) => {
  return (
    <>
       <div>
         {
           products.map(product=> <ProductItem key={product.id} product={product} onDel={onDel} />)
         }
      </div>
    </>
  )
}

export default Product