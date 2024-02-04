import React, { useContext, useEffect } from 'react'
import { CartContext } from "./context/CartContext"
import Cart from "./components/Cart";
import { Data } from "./data/CartData"

import './App.css'

function App() {
  const cartcontext = useContext(CartContext)

  let total = 0;
  cartcontext.cartItems.map((value, index) => {
    total += value.price;
  })

  const handleClick = () => {
    if (total > 0) {
      alert(`Paid Rs ${total}`)
    }
    else {
      alert(`Add Some Product In Cart  `)
    }

    cartcontext.setCartItems([])
    cartcontext.setCartVal(0)
  }


  return (
    <>
      <div className='mailnDiv'>
        <div className='productDiv'>

          {
            Data.map((product, index) => {
              {/* key = index */ }
              return (


                < Cart title={product.title} price={product.price} />
              )
            })
          }
        </div>

        <div className='cartDiv'>
          <div className='cartTotal'>Cart Items {cartcontext.cartVal} -- Total Amount {total}
            <button onClick={handleClick}>Pay Now</button></div>
          <div className='cartItemsDiv'>
            <ul>{
              cartcontext.cartItems[0] ? cartcontext.cartItems.map((item, index) => {
                return <h2 className='cartProductH2'>{item.title}         Price: {item.price}</h2>
              }) : <h1>Cart Is Empty</h1>
            }</ul></div>
        </div>
      </div>
    </>
  )
}

export default App

{/* <Cart title="I Phone 8" price="100000" />
          <Cart title="Redmi Note 5" price="9999" />
          <Cart title="Realmi 5" price="15000" />
          <Cart title="MotoG20" price="20000" />
          <Cart title="Boat HeadSet" price="999" /> */}