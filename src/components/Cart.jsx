import React, { useContext } from 'react'
import { CartContext } from "../context/CartContext"

const Cart = (props) => {
    const cartcontext = useContext(CartContext)
    const handleClick = () => {
        console.log(cartcontext.cartItems)
        cartcontext.setCartVal(cartcontext.cartVal + 1)

        cartcontext.setCartItems([
            ...cartcontext.cartItems,
            { title: props.title, price: props.price }
        ])
        console.log(cartcontext.cartItems)
    }
    return (
        <div className='cartComponents'>
            <span>{props.title}</span>
            <h2>Price: {props.price}</h2>
            <button className='addtocart' onClick={handleClick}>Add To cart</button>
        </div>
    )
}

export default Cart