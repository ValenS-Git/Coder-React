import { CartContext } from "./cartContext";
import { useState } from "react";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    const addProduct = (item) => setCart([...cart, item])

    const addQuantity = () => {
        const quantities = cart.map(item => item.quantity)
        const sumQuantity = quantities.reduce ((acc, current) => acc + current, 0)

        return sumQuantity
    }

    const totalBuy = () => {
        const totalProduct = cart.map(item => item.quantity*item.price)
        const sumProducts = totalProduct.reduce((acc, current) => acc + current, 0)

        return sumProducts;
    }

    return (
        <CartContext.Provider value={{cart, addProduct, addQuantity, totalBuy}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;