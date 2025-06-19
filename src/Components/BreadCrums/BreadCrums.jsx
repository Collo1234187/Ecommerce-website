import React from 'react'
import './BreadCrums.css'
import arrow_icon from '../Assets/arrow_icon.png'

export const BreadCrums = (props) => {
    const {product} = props;
    
  return (
    <div className="breadCrums">
         HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name }
    </div>
  )
}
