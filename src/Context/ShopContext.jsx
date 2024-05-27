import React, { createContext, useState } from 'react'
import all_product from '../Components/Assests/all_product'

export const ShopContext = createContext(null);

const getDefaultValue = () => {
    let cart ={};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0 
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultValue())

    const addToItems = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }

    const removeFromItems = (itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for(const item in cartItems)
        {
            if(cartItems[item]>0)
                {
                    let itemInfo = all_product.find((product)=>product.id===Number(item))
                    totalAmount = totalAmount +  cartItems[item] * itemInfo.new_price 
                }
                console.log(totalAmount);
        }
        return totalAmount;
    }
    
    const contextValue = {getTotalCartAmount, all_product, cartItems, addToItems, removeFromItems}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;