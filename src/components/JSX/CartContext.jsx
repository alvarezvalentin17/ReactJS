import React from 'react'
import {createContext, useState} from 'react'

export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({defaultValue = [], children}) => {
    const [cart, setCart] = useState(defaultValue);

    function addToCart(item, quantity) {
        setCart(
            [
                ...cart,
                {
                    item: item,
                    quantity: quantity
                }
            ]
            )
            console.log(item)
    }
    // const addToCart = (item, quantity) => {
    //     console.log(item)
    //     setCart(
    //         [
    //             ...cart,
    //             {
    //                 item: item,
    //                 quantity: quantity
    //             }
    //         ]
    //     )
    // }

    const clearCart = ()=> {
        setCart([]);
    }

    const context = {
        clearCart,
        addToCart
    }


    return(
        <Provider value={context}>
            {children}
        </Provider>
    )
}
