import React, { useCallback } from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'



function Product(props) {
  
  const [{ basket }, dispatch] = useStateValue()  

 
  const addToBasket = () => {
      
    dispatch({
      type: "ADD_TO_BASKET",
      
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      }
    })
}

 

  return (
    <div className='product'>
        <div className='product__info'>
            <p className='product__infoText'>{props.title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
            <div className='product__rating'>
                {Array(props.rating).fill(<p>⭐</p>)}
            </div>   
        </div>
        <img src={props.image} alt=''></img>
        <button  onClick={addToBasket} >Add to Basket</button>
    </div>
  )
}

export default Product

