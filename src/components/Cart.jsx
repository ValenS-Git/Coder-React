import React, { useContext } from 'react'
import CartItems from './CartItems'
import { CartContext } from '../context/cartContext'

const Cart = () => {
    const { cart, totalBuy } = useContext(CartContext)

    return (
        <div>
            <CartItems items={cart}/>
            <div className='bg-gray-300 shadow-gray-500 shadow-lg border-gray-300 p-6 w-[86.5%] mx-28 grid grid-cols-6 fixed bottom-0 rounded-b-xl text-xl font-semibold'>
                    <p className='col-span-5 uppercase'>Total cost</p>
                    <p className='col-span-1'>$ {totalBuy()*10/10}</p>
                    <button className='mt-3 py-2 rounded-lg col-span-6 bg-[#e58d27] shadow-md shadow-[#845b45] uppercase'>Confirm purchase</button>
            </div>
        </div>
    )
}

export default Cart;