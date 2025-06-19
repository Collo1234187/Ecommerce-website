import React from 'react'
import './RelatedProducts.css'
import {All_product} from '../Assets/AllProducts'
import {All_products} from '../Assets/AlsoLike'
import { AllProduct } from '../AllProduct/AllProduct'

export const RelatedProducts = () => {
  return (
    <div className="relatedProducts">
         <h1>Related products</h1>
        <hr/>
        <div className="relatedProducts-item">
           {All_products.map((item,i)=>{
            return<AllProduct key ={i} id={item.id}   image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
       
    <div className="alsoLikeProducts">
        <h1>You may also like</h1>
        <hr/>
        <div className="alsoLikeProducts-item">
           {All_product.map((item,i)=>{
            return<AllProduct key ={i} id={item.id}   image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
           })} 
        </div>
        <div className="alsoLikeProducts-loadMore">
        Explore More
       </div>
    </div>

    </div>
  )
}
