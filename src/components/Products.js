import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from './Product'

export const Products = () => {
  // Fetch all products from teh store here
  const allProducts = useSelector((store) => store.products)

  // Mapping though the products and render the component 
  return (
    <div className="products">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}
