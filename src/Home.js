import React from 'react'
import './Home.css'
import Product from './Product.js'
import Data from './Data'
import DataTwo from './DataTwo'
import { useStateValue } from './StateProvider'
import DataThree from './DataThree'



function Home() {
  const [state, dispatch] = useStateValue()

  let dataFeed = Data.map(item => {
    const uniqueKey = Math.random() * 100

    return (
      <Product
         id={uniqueKey} rating={item.rating} title={item.title} image={item.image} price={item.price}
      />
    )
  })

  let dataFeedTwo = DataTwo.map((item) => {
    const uniqueKey = Math.random() * 100
    return (
      <Product
         id={uniqueKey} rating={item.rating} title={item.title} image={item.image} price={item.price}

      />
    )
  })

  let dataFeedThree = DataThree.map(item => {
    const uniqueKey = Math.random() * 100

    return (
      <Product
         id={uniqueKey} rating={item.rating} title={item.title} image={item.image} price={item.price}
      />
    )
  })


  return (
    <div className='home'>
      <div className='home__container'>
        <img src='https://m.media-amazon.com/images/I/61E8JbADz8L._SX3000_.jpg' className='home__image' alt='https://m.media-amazon.com/images/I/61tMUMT88rL._SX3000_.jpg'></img>
        <div className='home__row'>
          <div className='home__rowContainer'>
            {dataFeed}

          </div>

        </div>
        <div className='home__row'>
          <div className='home__rowContainer'>
            {dataFeedTwo}
          </div>
        </div>
        <div className='home__row '>
          <div className='home__rowContainer'>
            {dataFeedThree}
          </div>
        </div>

      </div>
    </div>


  )
}

export default Home
