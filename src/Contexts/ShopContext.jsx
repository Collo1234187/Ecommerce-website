import React, { createContext, useState } from "react";
import {All_product} from '../Components/Assets/AllProducts';
import {new_products} from '../Components/Assets/new'
import {All_products} from '../Components/Assets/AlsoLike'


export const ShopContext = createContext(null);


export const ShopContextProvider = (props ) =>{
     

    const allItems = [...All_product, ...new_products, ...All_products];

    const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < allItems.length+1; index++){
            cart[index] = 0;
        }
        return cart;
    }
    const [cartItems,setCartItems] = useState(getDefaultCart());
    
    
    const addToCart = (itemId) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
        
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = allItems.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
           
        }
        return totalAmount;
    }
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for (const item in cartItems)
            if (cartItems[item]>0){
                totalItem += cartItems[item];
            }
            return  totalItem;
    }

    const contextValue = {getTotalCartItems,All_product,new_products,All_products,cartItems,addToCart,removeFromCart,allItems,getTotalCartAmount};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}