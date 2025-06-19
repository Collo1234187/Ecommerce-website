import React, { useContext} from 'react'

import './CSS/ShopCategory.css'
import {ShopContext} from '../Contexts/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown.png'
import { AllProduct } from '../Components/AllProduct/AllProduct';
export const ShopCategory = (props) => {
  const {All_product} = useContext(ShopContext);

  return (
  
    <div className="shop-category">
      <div className="shopCategory-banner-wrapper">
          <img className="shopCategory-banner" src={props.banner} alt="" />
      </div>
      
       <div className="shopCategory-indexSort">
        <p>
          <span>showing  products  1-12 </span> out  of  36  products
        </p>
        <div className="shopCategory-sort">
          sort by <img src={dropdown_icon} alt=""/>
        </div>
       </div>
       <div className="products">
       <div className="shopCategory-products">
        {All_product.map((item,i) => {
          if(props.category===item.category){
            return <AllProduct key ={i} id={item.id}   image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
       </div>
       </div>
       <div className="shotCategory-loadMore">
        Explore More
       </div>
    </div>
  )
}
