import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='Header'>
        <img className="netflix_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
        
        <div className="menu">
            <Link className="navLink" to="/">Home
            </Link>
            <Link className="navLink" to="/">TV Shows</Link>
            <Link className="navLink" to="/">Recently Added</Link>
            <Link className="navLink" to="/">MyList</Link>
        </div>
        <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
    </div>
  )
}

export default Header