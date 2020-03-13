import React from 'react'
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'

export const Product = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <article className="product">
      <span className="emoji" role="img" aria-label={product.title}>{product.emoji}</span>
      <p className="product-title">{product.title}</p>
      <p className="product-price">{product.price}:-</p>

      <button
        type="button"
        onClick={() => dispatch(cart.actions.addItem(product))} >
        ADD TO CART
      </button>
    </article>
  )
}
