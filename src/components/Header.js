import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
    return (
    <div className='header'>
        <h1>Redux Tool Kit</h1>
        <nav>
          <Link to="/" className='link'>HOME</Link>
          <Link to='/cart' className='link'>CART <span className='cart-count'>{cartItems.length}</span></Link>
        </nav>
    </div>
  )
}
