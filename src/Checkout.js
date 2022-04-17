import React, { useCallback } from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'; 

function Checkout() {
  const [ { basket }, dispatch] =  useStateValue()
  
  const basketStateItems = basket.map((item) => {
    
    return (
       
        <CheckoutProduct
        image= {item.image}
        price= {item.price}
        rating= {item.rating}
        title= {item.title}
        id= {item.id}
        
        />
      )
    
    
})

  return (
    <div className='checkout'>
      <div className='checkout__main'>
      <div className='checkout__left'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/CorpGC/Banner_PC_without_Citi.jpg' alt='./images/checkout.jpg' className='checkout__ad'></img>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
            
        </div>
        <div className='checkout__product'>
            {basketStateItems}
          </div>
        </div>

          <div className='checkout__right'>
            <Subtotal />
          </div>
        
    </div>
  )
}

export default Checkout



// https://zouton.com/images/originals/blog/YACC-desktop-nonprime-banner2_1579180197.jpg
