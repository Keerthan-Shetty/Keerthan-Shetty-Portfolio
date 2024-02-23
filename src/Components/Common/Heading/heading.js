import React from 'react'
import './heading.css'

const Heading = ({title,subTitle}) => {
  return (
    <div>
      <div className='heading text-center'>
        <h2>{title}</h2>
        <h5>{subTitle}</h5>
      </div>
    </div>
  )
}

export default Heading
