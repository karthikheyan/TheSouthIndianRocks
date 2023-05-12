import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { useUserContext } from '../Context/useUserContext'
import DropdownMenu from './DropdownMenu'

const Header = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {user,userLogout} = useUserContext();
  const handleLogout = ()=>{
    userLogout(null);
    navigate('/login')
  }

  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

  return (
    // <nav className="navbar">
    //         <div className="navbar-left">
    //             <img src={ logo } alt="" className="logo"></img>
    //             <h1 className="title">THE SOUTH INDIAN ROCKS</h1>
    //         </div>
            
    //         <div className="navbar-middle">
    //               <Link to='/'><button className={pathname==="/" ? 'home-button' : ''}>HOME</button></Link>
    //               <Link to={'/products'}><button className={pathname==="/products" ? 'products-button': ''}>PRODUCTS</button></Link>
    //               <Link to={'/gallery'}><button className={pathname==="/gallery" ? 'gallery-button': ''}>GALLERY</button></Link>
    //               {/* <Link to={'/about'}><button className={pathname==="/about" ? 'about-button': ''}>ABOUT US</button></Link>
    //               <Link to={'/contact'}><button className={pathname==="/contact" ? 'contact-button': ''}>CONTACT US</button></Link> */}
    //               <div className='user-area'>
    //               {user ? 
    //               <DropdownMenu/>
    //               :
    //               (
    //                 <Link to={'/login'}><button className={pathname==="/login" ? 'login-button': ''}>LOGIN</button></Link>
    //               )
    //               }
    //               <div className="bar">
    //             <span className="material-symbols-outlined">
    //                 menu
    //                 </span>
    //             </div>
    //               </div>
    //         </div>
    //     </nav>

<header class="header">
<nav class="navbar">
<div className="nav-logo">
               <img src={ logo } alt="" className="logo"></img>
                 <h1 className="title">THE SOUTH INDIAN ROCKS</h1>
             </div>
    <ul class="nav-menu">
        <li class="nav-item">
             <Link to='/'><button className={pathname==="/" ? 'home-button' : ''}>HOME</button></Link>
        </li>
        <li class="nav-item">
                      <Link to={'/products'}><button className={pathname==="/products" ? 'products-button': ''}>PRODUCTS</button></Link>
        </li>
        <li class="nav-item">
                       <Link to={'/gallery'}><button className={pathname==="/gallery" ? 'gallery-button': ''}>GALLERY</button></Link>
        </li>
        <li class="nav-item">
        <div className='user-area'>
                   {user ? 
                   <DropdownMenu/>
                   :
                   (
                     <Link to={'/login'}><button className={pathname==="/login" ? 'login-button': ''}>LOGIN</button></Link>
                   )
                   }
       </div>
        </li>
    </ul>
    <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
</nav>
</header>

  )
}

export default Header
