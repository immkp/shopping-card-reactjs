import React, { useState, useContext } from 'react'
import { CartContext } from './context'

function Shopping({ img, title, price, button, sale, star, muted, setcart }) {
  const context = useContext(CartContext)

  const [state, setState] = useState({
    img,
    title,
    price,
    button,
    sale,
    star,
    muted,
    setcart,
  })
  const handleButtonPress = () => {
    if (state.button === 'Add to Cart') {
      context.addToCart()
      setState({ ...state, button: 'Remove from Cart' })
    } else if (state.button === 'Remove from Cart') {
      context.removeFromCart()
      setState({ ...state, button: 'Add to Cart' })
    } else {
      context.setCart(context.cart)
    }
  }
  return (
    <div>
      <div className='col mb-5'>
        <div className='card m-2' style={{ height: '350px', width: '230px' }}>
          <div
            className='badge bg-dark text-white position-absolute'
            style={{ top: '0.5rem', right: '0.5rem' }}
          >
            {state.sale}
          </div>
          <img className='card-img-top' src={state.img} alt='...' />
          <div className='card-body p-4'>
            <div className='text-center'>
              <h5 className='fw-bolder'>{state.title} </h5>
              {/* ////// */}
              {state.star && (
                <div
                  class='d-flex justify-content-center small 
text-warning mb-2'
                >
                  <div class='bi-star-fill'></div>
                  <div class='bi-star-fill'></div>
                  <div class='bi-star-fill'></div>
                  <div class='bi-star-fill'></div>
                  <div class='bi-star-fill'></div>
                </div>
              )}

              {/* /// */}
              <span
                class='text-muted 
text-decoration-line-through'
              >
                {state.muted}
              </span>
              {state.price}
            </div>
          </div>
          <div
            className='card-footer p-4 pt-0 
border-top-0 bg-transparent'
          >
            <div className='text-center'>
              <a
                onClick={handleButtonPress}
                className='btn btn-outline-dark mt-auto'
                href='#'
              >
                {state.button}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shopping
