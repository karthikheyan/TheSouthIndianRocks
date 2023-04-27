import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <nav className='foot'>
      <div className="one">
                <h3>THE SOUTH INDIAN ROCKS</h3>
                <p>The South Indian Rocks is one of the leading marbles and tiles manufacturing factory in dharmanpuri district</p>
            </div>
            <div className="two">
                  <h3>LINKS</h3>
                  <Link to='/'>HOME</Link>
                  <Link to={'/products'}>PRODUCTS</Link>
                  <Link to={'/gallery'}>GALLERY</Link>
                  <Link to={'/about'}>ABOUT US</Link>
                  <Link to={'/contact'}>CONTACT US</Link>
            </div>

            <div className="three">
                <h3>SUBSCRIBE</h3>
                <input type="email" placeholder="Enter email"></input>
                <button><a href="#">Subscribe</a></button>
            </div>

            <div className="four">
                <h3>ADDRESS</h3>
                <p>GOBICHETTIPALAYAM, PAPPIREDDIPATTI(TK), DHARMAPURI(DT). 91+9566906913.
                   Email:thesouthindianrocks@gmail.com</p>
            </div>
    </nav>
  )
}

export default Footer
