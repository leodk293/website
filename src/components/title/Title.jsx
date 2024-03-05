import React from 'react'
import './Title.css'

export default function Title({Title, subTitle}) {
  return (
    <div className='text-shape'>
        <h3 className='title'>{Title}</h3>
        <h1 className='subTitle'>{subTitle}</h1>
    </div>
  )
}
