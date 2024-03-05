import React from 'react'
import './gallery.css'
import arrow from '../../../images/white-arrow.png'
import Title from '../title/Title'

import photo1 from '../../../images/gallery-1.png'
import photo2 from '../../../images/gallery-2.png'
import photo3 from '../../../images/gallery-3.png'
import photo4 from '../../../images/gallery-4.png'

export default function Gallery() {
  return (
    <div id='campus' className='gallery-container'>
        <Title Title={"GALLERY"} subTitle={"Campus Photos"}/>

        <div className="photos">
            <img src={photo1} alt="PHOTO" />
            <img src={photo2} alt="PHOTO" />
            <img src={photo3} alt="PHOTO" />
            <img src={photo4} alt="PHOTO" />
        </div>

        <button>
            <p>See more here</p>
            <img src={arrow} alt="" />
        </button>

    </div>
  )
}
