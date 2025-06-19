import React from 'react'
import './HotCategory.css'
import {data_product} from '../Assets/data'
import { HotCategoryProduct } from '../HotCategoryProduct/HotCategoryProduct'
import { useNavigate } from 'react-router-dom';


export const HotCategory = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    navigate(`/${item.name.toLowerCase()}`); 
  };
  return (
    <div className="hot">
        <h1>Hot Category</h1>
        <hr/>
        <div className="hot-category">
            {data_product.map((item,i)=>(
               <div key={i} onClick={() => handleClick(item)} className="clickable-image">
                <HotCategoryProduct  id={item.id}  image={item.image} name={item.name} />
                </div>
            ))}
        </div>
    </div>
  );
};
