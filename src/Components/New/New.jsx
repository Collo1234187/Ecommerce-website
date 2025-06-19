import React from 'react'
import './New.css'
import {new_products} from '../Assets/new'
import { NewProduct } from '../NewProduct/NewProduct'




export const New = () => {
    
  return (
    <div className="new">
         <h1>New Collection</h1>
                <hr/>
                <div className="new_product">
                  {new_products.map((item,i)=>{
                     return <NewProduct key ={i} id={item.id}   image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                  })}  
                </div>
    </div>
  )
}
