import React from 'react'
import './Home.css'
import cuttingImage from "../../images/Home/cutting.png"
import polishImage from "../../images/Home/polish.png"
import sculptureImage from "../../images/Home/sculpture.png"
import transportImage from "../../images/Home/transport.png"
import manufactureImage from "../../images/Home/manufacturing.png"
import person1Image from "../../images/Home/person1.jpg"
import person2Image from "../../images/Home/person2.jpg"
import Slideshow from './Slideshow'

const Home = () => {

    return (
        <>
        <div className="slideshow">
            <Slideshow/>
        </div>
        <div className="services">
            <h2>Our Services</h2>
            <p className='p'>The services by the South Indian Rocks including these</p>
            <div className="services-grid">
                <div className="services-grid-box">
                    <img src= {cuttingImage} alt=""/>
                    <h3>Cutting</h3>
                    <p>Cutting stones as per the customer requirements including raw stones cuttings and tiles cuttings</p>
                </div>
                <div className="services-grid-box">
                    <img src={polishImage} alt=""/>
                    <h3>Polishing</h3>
                    <p>Cutting stones as per the customer requirements including raw stones cuttings and tiles cuttings</p>                </div>
                <div className="services-grid-box">
                    <img src={sculptureImage} alt=""/>
                    <h3>Designing</h3>
                    <p>Cutting stones as per the customer requirements including raw stones cuttings and tiles cuttings</p>
                </div>
                <div className="services-grid-box">
                    <img src={transportImage} alt=""/>
                    <h3>Free transport</h3>
                    <p>Cutting stones as per the customer requirements including raw stones cuttings and tiles cuttings</p>
                </div>
            </div>
        </div>


 
        <div className="manufacture">
            <div className="maufacture-flex">
                <h3>Big Manufacturing outlet</h3>
                <p>Our factory is equipped with advanced machinery and equipment, carefully selected to optimize the production process. From raw material preparation to the final finishing touches, every step is meticulously executed to ensure precision and consistency in our tile manufacturing.</p>
            </div>
            <img src={manufactureImage} alt=""/>
        </div>
        



        <div className="reviews">
            <h2>Customer Reviews</h2>
            <p>The active customer's reviews for The South Indian Rocks</p>
            <div className="reviews-grid">
                <div className="reviews-grid-box">
                    <img src={person1Image} />
                    <h3>Vimal</h3>
                    <p>They are customer centric and provides valuable products at reasonable prices. The quality of the products are too much good</p>
                </div>
                <div className="reviews-grid-box">
                    <img src={person2Image} />
                    <h3>Subiga</h3>
                    <p>They are customer centric and provides valuable products at reasonable prices. The quality of the products are too much good</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
