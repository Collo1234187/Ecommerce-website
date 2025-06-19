import React,{ useState, useContext } from 'react'
import './ProductDisplay.css'
import bright_star from '../Assets/star2.png';
import dull_star from '../Assets/star1.png';
import TICK_ICON from '../Assets/TICK_ICON.png';
import like_icon from '../Assets/like_icon.png';
import share_icon from '../Assets/share_icon.png';
import { ShopContext } from '../../Contexts/ShopContext';

export const ProductDisplay = (props) => {
   

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

     const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };
    
  return (
  
    <div className='product-display'>
        <div className="display-left">
            <div className="product-display-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="product-display-image">
                <img className="product-display-main-image" src={product.image} alt="" />
            </div>
        </div>
         <div className="display-right">
            <h1>{product.name}</h1>
            <div className="product-display-right-star">
                <img src={bright_star} alt="" />
                <img src={bright_star} alt="" />
                <img src={bright_star} alt="" />
                <img src={bright_star} alt="" />
                <img src={dull_star} alt="" />
                <p>(70)</p>
            </div>
            <div className="product-display-right-price">
                <div className="product-display-right-price-old">ksh.{Number(product.old_price).toLocaleString()}</div>
                <div className="product-display-right-price-new">ksh.{Number(product.new_price).toLocaleString()}</div>
            </div>
            <div className="product-display-right-description">
                this is 5 by 6 mahogany bed with a clear paint 
            </div>
           
                <div className="product-display-right-size">
                  <span>services:</span>
                  <img src={TICK_ICON}alt="" className="tick-icon"/>Fulfilled by Superhome Interiors
                </div>
            <div>
        <label htmlFor="quantity" className="product-display-right-quantity">Quantity:</label>
        <span className="quantity">
          
        <button onClick={decrease}>-</button>
        <input
          type="number"
          id="quantity"
          value={quantity}
          min="1"
          readOnly
          style={{width: '40px', textAlign: 'center',border:'none',height: '40px',marginLeft:'10px',}}
        />
        <button onClick={increase}>+</button>
        </span>
        </div>
       
        <div className="action-buttons" style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
  <button className="add-to-cart" onClick={() =>{addToCart(product.id)}}>Add to Cart</button>
  <button className="buy-now">Buy Now</button>
  <button className="icon-button">
    <span role="img" aria-label="wishlist"><img src={like_icon} alt="like icon"/></span>
  </button>
  <button className="icon-button">
    <span role="img" aria-label="share"><img src={share_icon} alt="like icon"/></span>
  </button>
</div>
  
        </div>
        </div>
    
  )
}
