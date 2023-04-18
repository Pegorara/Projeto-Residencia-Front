import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function Cart(){
    const [items, setItems] = useState([
    {
        name: '',
        price: 0,
        quantity: 0,
    }
]);

    function addToCart(newItem){
        setItems((prev) => prev, newItem )
    }

    function removeToCart(removedItem){
        items.map((item, index) => (
            item.name === removedItem?items.splice(index, 1):null
        ))
    }

    return (
    <CartContext.Provider value={{
        addToCart,
        removeToCart,
    }}>

    </CartContext.Provider>
    )
}