import React from 'react'
import { useSelector } from 'react-redux'
import { CartItem } from './CartItem'

export const Cart = () => {
  // Fetching products from the store and showing the total price. Goes through the quantity of items
  // and sums up the pricing 
  const products = useSelector((store) => store.cart.items)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <div className="cart">
      <div className="total">
        <span className="emoji" role="img" aria-label="cart">🛒</span>
        <div className="amount">Total: {totalPrice}:-</div>
      </div>

      <ul className="items">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
