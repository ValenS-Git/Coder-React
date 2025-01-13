import { CartContext } from "./cartContext";
import { useState } from "react";

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const removeProduct = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }

    const addProduct = (item) => {
        setCart(cart => {
            const existProduct = cart.find(product => product.id === item.id);

            if (existProduct) {
                return cart.map(product => product.id === item.id ? { ...product, quantity: product.quantity + item.quantity } : product);
            } else {
                return [...cart, item]
            }
        })
    }

    const addQuantity = () => {
        const quantities = cart.map(item => item.quantity)
        const sumQuantity = quantities.reduce((acc, current) => acc + current, 0)

        return sumQuantity
    }

    const totalBuy = () => {
        const totalProduct = cart.map(item => item.quantity * item.price)
        const sumProducts = totalProduct.reduce((acc, current) => acc + current, 0)

        return sumProducts;
    }

    const emptyCart = () => setCart([])
    return (
        <CartContext.Provider value={{ cart, addProduct, addQuantity, totalBuy, removeProduct, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;