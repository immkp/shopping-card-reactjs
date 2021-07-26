import React, { useState } from 'react'
import Shopping from './Shopping'
import Navbar from './Navbar'
import Header from './Header'

import { CartContext } from './context'
import { detail } from './data'

function App() {
  const [cart, setCart] = useState(0)

  const addToCart = () => setCart(cart + 1)
  const removeFromCart = () => setCart(cart - 1)

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
      }}
    >
      <div>
        <Navbar />
        <Header />
        <section class='py-5'>
          <div class='container px-4 px-lg-5 mt-5'>
            <div
              class='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3
row-cols-xl-4 justify-content-center'
            >
              {detail.map(
                ({ img, title, price, button, sale, star, muted }, index) => {
                  return (
                    <Shopping
                      key={index}
                      img={img}
                      title={title}
                      price={price}
                      button={button}
                      sale={sale}
                      star={star}
                      muted={muted}
                      setcart={0}
                    />
                  )
                }
              )}
            </div>
          </div>
        </section>
        <footer class='py-5 bg-dark'>
          <div class='container'>
            <p class='m-0 text-center text-white'>
              Copyright &copy; Your Website 2021
            </p>
          </div>
        </footer>
      </div>
    </CartContext.Provider>
  )
}

export default App
