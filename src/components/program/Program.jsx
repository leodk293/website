import React from 'react'
import './Program.css'
import Title from '../title/Title'

import program1 from '../../../images/program-1.png'
import program2 from '../../../images/program-2.png'
import program3 from '../../../images/program-3.png'
import icon1 from '../../../images/program-icon-1.png'
import icon2 from '../../../images/program-icon-2.png'
import icon3 from '../../../images/program-icon-3.png'

export default function Program() {
    return (
        <div id='program' className='program-container'>
            <Title Title={"OUR PROGRAM"} subTitle={"What We Offer"} />

            <div className="program-images">

                <div className="img-container">
                    <img className='img-caption' src={program1} alt="" />
                    <div className="program-text">
                        <img src={icon1} alt="" />
                        <p>Graduation degree</p>
                    </div>
                </div>

                <div className="img-container">
                    <img className='img-caption' src={program2} alt="" />
                    <div className="program-text">
                        <img src={icon2} alt="" />
                        <p>Masters degree</p>
                    </div>
                </div>

                <div className="img-container">
                    <img className='img-caption' src={program3} alt="" />
                    <div className="program-text">
                        <img src={icon3} alt="" />
                        <p>Post graduation</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
