import React, { useContext } from 'react'
import { ShopContext } from '../Contexts/ShopContext'

import { useParams } from 'react-router-dom';
import { BreadCrums } from '../Components/BreadCrums/BreadCrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';



export const Product = () => {

  const {allItems} = useContext(ShopContext);
  const {productId} = useParams();
   
  const product = allItems.find((e)=>e.id===Number(productId));
  return (
    <div>
     <BreadCrums product={product}/>
     <ProductDisplay product={product}/>
     <DescriptionBox/>
     <RelatedProducts/>
    </div>
  )
}
