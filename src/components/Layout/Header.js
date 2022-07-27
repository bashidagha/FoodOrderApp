import React from 'react'
import banner from '../../assets/meals.jpg'
import './header.scss'

const Header = () => {
  return (
    <React.Fragment>

        <header className='header'>
            <h1>FoodOrder</h1>
            <button>Cart</button>
        </header>


        <div className='main-image'>
            <img src={banner} alt="banner"/>
        </div>
    </React.Fragment>
  )
}

export default Header