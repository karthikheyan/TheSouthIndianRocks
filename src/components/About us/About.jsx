import React from 'react'
import './About.css'
import peopleImage from "../../images/About/aboutus.png"
const About = () => {
  return (
    <div>
        <div class="aboutus">
            <div class="aboutus-flex">
                <h3>About us</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quos recusandae eveniet ab illum tenetur, corrupti blanditiis nam voluptatum ipsa similique modi doloribus reprehenderit neque porro odio nisi facere consectetur!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda distinctio provident vitae autem rerum necessitatibus sequi! Exercitationem nihil unde, blanditiis ipsam dicta iste. Consectetur voluptatibus nam, placeat dicta est vitae.</p>
            </div>
            <img src={peopleImage} alt=""/>
        </div>
    </div>
  )
}

export default About
