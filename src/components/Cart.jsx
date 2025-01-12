import React, { useContext } from 'react'
import CartItems from './CartItems'
import { Link } from "react-router";
import { CartContext } from '../context/cartContext'

const Cart = () => {
    const { cart, totalBuy } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='relative mx-28'>
                <h2 className='text-3xl uppercase font-bold text-gray-400 absolute right-[32%] bottom-1/4'>No tienes productos en el carrito!</h2>
                <CartItems items={cart} />
            </div>
        )
    }
    return (
        <div className='relative lg:mx-28 '>
            <CartItems items={cart} />
            <div className='bg-gray-300 shadow-gray-500 shadow-lg border-gray-300 p-6 w-full grid grid-cols-6 absolute bottom-0 rounded-b-xl text-xl font-semibold'>
                <p className='col-span-5 uppercase'>Total cost</p>
                <p className='col-span-1'>$ {totalBuy().toFixed(2)}</p>
                <Link className='mt-3 py-2 rounded-lg col-span-6 bg-[#e58d27] shadow-md shadow-[#845b45] uppercase text-center' to={`/checkout`}>Confirm purchase</Link>
            </div>
        </div>
    )
}

export default Cart;