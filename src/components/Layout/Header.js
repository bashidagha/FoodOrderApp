import React from 'react'
import banner from '../../assets/meals.jpg'
import './header.scss'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <React.Fragment>

        <header className='header'>
            <h1>FoodOrder</h1>
            <HeaderCartButton/>
        </header>


        <div className='main-image'>
            <img src={banner} alt="banner"/>
        </div>
    </React.Fragment>
  )
}

export default Header