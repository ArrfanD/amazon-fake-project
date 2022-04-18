import React from 'react'
import './Header.css'
// import SearchIcon from '@material-ui/icons/Search';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header(props) {
      const [{ basket }, dispatch] = useStateValue();   
      
            return (
                  <div className='header'>
                    <Link to={'/'}>
                          <img 
                          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                          className='header__logo'></img>
                    </Link>
                    
                    <div className='header__search'>
                        <input className='header__searchInput' type='text'/>
                        <img src='https://www.linkpicture.com/q/search_iconj.jpg'></img>
                        {/* <SearchIcon className='header__searchIcon'/> */}
                    </div>
                    <div className='header__nav'>
                          <Link to={'/login'}>
                                <div className='header__new'>
                                <span className='header__optionLineOne'>Hello Guest</span>
                                <span className='header__optionLineTwo'>Sign In</span>
                        </div>
                          </Link>
                        <div className='header__new'>
                              <span className='header__optionLineOne'>Returns</span>
                              <span className='header__optionLineTwo'>& Orders</span>             
                        </div>
                        <div className='header__new'>
                              <span className='header__optionLineOne'>Your</span>
                              <span className='header__optionLineTwo'>Prime</span>              
                        </div>
                        <div className='header__optionBasket'>
                          <Link to={'/checkout'} className="header__optionBasket__link">
                                <img src="https://www.linkpicture.com/q/cart_icon.jpg" className="header__optionBasket__link"></img>
                                {/* <ShoppingBasketIcon className='header__basketIcon'/> */}
                          </Link>
                              <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
                              
                          
                        </div>
                    </div>
                    
                  </div>
                )
      }
      
  
      
  


export default Header
