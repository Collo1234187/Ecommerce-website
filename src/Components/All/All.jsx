import React from 'react'
import  './All.css'
import {All_products} from '../Assets/AlsoLike'
import { AllProduct } from '../AllProduct/AllProduct'

export const All = () => {
  return (
    <div className="all">
       <h1>You may also like</h1>
         <hr/>
    <div className="all_product">
       {All_products.map((item,i)=>{
       return <AllProduct key ={i} id={item.id}   image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                        })}
      </div>  
    </div>
  )
}
