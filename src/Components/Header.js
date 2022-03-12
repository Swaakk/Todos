import React from 'react'
import "../Styles/Header.css"

function Header() {
  return (
    <div className='header'>
        <div className='list'>
           <a href="">Home</a>
           <a href="">About</a>
           <a href="">Contact</a>
           <a href="">Your Todo's</a>
        </div>
    </div>
  )
}

export default Header