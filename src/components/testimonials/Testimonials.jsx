import React from 'react'
import "./Testimonials.css"
import Title from '../title/Title'
import user1 from '../../../images/user-1.png'
import user2 from '../../../images/user-2.png'
import user3 from '../../../images/user-3.png'
import user4 from '../../../images/user-4.png'

import next from '../../../images/next-icon.png'
import back from '../../../images/back-icon.png'

export default function Testimonials() {
    return (
        <div id='testimonials' className='testimonials'>
            <Title Title={"TESTIMONIALS"} subTitle={"What Student Says"} />

            <div className="testimonials-container">

                <div className="notices">
                    <div className="shape">
                        <div className="identity">
                            <img src={user1} alt="" />
                            <div className="details">
                                <h3>Emily Williams</h3>
                                <p>Edusity, USA</p>
                            </div>
                        </div>

                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my
                            expectations.
                        </p>

                    </div>

                    <div className="shape">
                        <div className="identity">
                            <img src={user2} alt="" />
                            <div className="details">
                                <h3>William Jackson</h3>
                                <p>Edusity, USA</p>
                            </div>
                        </div>

                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my
                            expectations.
                        </p>
                    </div>

                    <div className="shape">
                        <div className="identity">
                            <img src={user3} alt="" />
                            <div className="details">
                                <h3>Mary Chester</h3>
                                <p>Edusity, USA</p>
                            </div>
                        </div>

                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my
                            expectations.
                        </p>
                    </div>

                    <div className="shape">
                        <div className="identity">
                            <img src={user4} alt="" />
                            <div className="details">
                                <h3>Joel Miller</h3>
                                <p>Edusity, USA</p>
                            </div>
                        </div>

                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive
                            community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my
                            expectations.
                        </p>
                    </div>

                </div>


            </div>

        </div>
    )
}
