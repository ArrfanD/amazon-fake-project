import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct(props) {
  const [ state , dispatch] =  useStateValue()

  const removeFromBasket = () => {
      
dispatch({
  type: "REMOVE__FROM__BASKET",
  
    id: props.id,
    
  }
)
}

  return (
    <div className="CheckoutProduct">
      <div className="CheckoutProduct__imgdiv">
      <img src={props.image} className="CheckoutProduct__image"></img>
        </div>
      
        <div className="CheckoutProduct__data">
            <p className="CheckoutProduct__title">{props.title}</p>
            <strong className="CheckoutProduct__price">${props.price}</strong>
            <div className="CheckoutProduct__rating">
                {Array(props.rating).fill(<p>⭐</p>)}
            </div>
            <button className="CheckoutProduct__removeItem" onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
