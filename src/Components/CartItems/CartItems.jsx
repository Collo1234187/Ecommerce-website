import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Contexts/ShopContext'
import remove_icon from '../Assets/remove_icon.png'


export const CartItems = () => {
    const {getTotalCartAmount,cartItems,removeFromCart,allItems} = useContext(ShopContext);

  return (
    <div className="cartItems">
        <div className="cartItems-format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>

        {allItems.map((e) =>  {
            if(cartItems[e.id]>0){
               
                return <div>
            <div className="cartItems-format cartItems-format-main">
                <img src={e.image} alt="" className="cartIcon-product-icon" />
                <p>{e.name}</p>
                <p>ksh.{Number(e.new_price).toLocaleString()}</p>
                <button className="cartItems-quantity">{cartItems[e.id]}</button>
                <p>ksh.{(Number(e.new_price) * cartItems[e.id]).toLocaleString()}</p>
                <img className="cartItems-remove-icon" src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
            </div>
            <hr/>
        </div>
            }
            return null;
        })} 
        <div className="cartItems-down">
            <div className="cartItem-total">
                <h1>cart Total</h1>
                <div >
                <div className="cartItems-total-item">
                    <p>Subtotal</p>
                    <p>ksh.{(getTotalCartAmount()).toLocaleString()}</p>
                  </div>
                  <hr />
                  <div className="cartItems-total-item">
                    <p>Shipping Fee</p>
                    <p>free</p>
                  </div>
                <hr />
                <div className="cartItems-total-item">
                    <h3>Total</h3>
                    <h3>ksh.{(getTotalCartAmount()).toLocaleString()}</h3>
                </div>
                </div>
                <button className="proceed-button">PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartItems-promoCode">
                <p>if you have promo code, Enter it here</p>
               <div className="cartItems-promoBox">
                    <input type="text" placeholder='promo code'/>
                    <button>submit</button>
               </div>
            </div>
        </div>
        </div>
  )
}
