import React from 'react'
import './Hero.css'
import background from '../../../images/hero.png'
import arrow from '../../../images/dark-arrow.png'

export default function Hero() {
    return (
        <div  className='background'>

            <div id='hero' className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences
                    needed to excel in the dynamic field of education
                </p>
                <button>
                    <p>Explore more</p>
                    <img src = {arrow} alt="" />
                </button>
            </div>

        </div>
    )
}
