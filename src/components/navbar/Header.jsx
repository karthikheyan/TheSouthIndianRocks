import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'
import { Link, useLocation} from 'react-router-dom'
import { useUserContext } from '../Context/useUserContext'


const Header = () => {
  const {pathname} = useLocation();
  const {user,userLogout} = useUserContext();

  const handleLogout = ()=>{
    userLogout(null);
  }
  return (
    <nav className="navbar">
            <div className="navbar-left">
                <img src={ logo } alt="" className="logo"></img>
                <h1 className="title">THE SOUTH INDIAN ROCKS</h1>
            </div>
            {user && (
              <p>Hello, {user}</p>
            )}
            <div className="navbar-middle">
                  <Link to='/'><button className={pathname==="/" ? 'home-button' : ''}>HOME</button></Link>
                  <Link to={'/products'}><button className={pathname==="/products" ? 'products-button': ''}>PRODUCTS</button></Link>
                  <Link to={'/gallery'}><button className={pathname==="/gallery" ? 'gallery-button': ''}>GALLERY</button></Link>
                  <Link to={'/about'}><button className={pathname==="/about" ? 'about-button': ''}>ABOUT US</button></Link>
                  <Link to={'/contact'}><button className={pathname==="/contact" ? 'contact-button': ''}>CONTACT US</button></Link>
                  {!user ? (
                    <Link to={'/login'}><button className={pathname==="/login" ? 'login-button': ''}>LOGIN</button></Link>
                  ): <button onClick={handleLogout}>LOGOUT</button>}
            </div>
        </nav>
  )
}

export default Header
