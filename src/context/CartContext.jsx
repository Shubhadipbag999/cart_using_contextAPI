import { createContext, useState } from 'react';

export const CartContext = createContext(null)

export const CartProvider = (props) => {
    const [cartVal, setCartVal] = useState(0)
    const [cartItems, setCartItems] = useState([])
    return (
        <CartContext.Provider value={{ cartVal, setCartVal, cartItems, setCartItems }}>
            {props.children}
        </CartContext.Provider>
    )
}