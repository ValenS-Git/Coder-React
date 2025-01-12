import React, { useContext } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { CartContext } from '../context/cartContext';

const CartItem = ({ item }) => {
    const {removeProduct} = useContext(CartContext)
    const handleRemove = () => {
        removeProduct(item.id);
    }

    return (
        <div className='grid grid-cols-6 text-gray-200 p-6 border-t border-gray-500'>
            <div className='col-span-3 text-gray-300 flex items-center'>
                <img className='w-[150px] max-sm:w-[100px] object-contain rounded-lg' src={item.thumbnail} alt={item.title} />
                <h2 className='ml-20 text-2xl max-sm:text-base uppercase font-medium'>{item.title}</h2>
            </div>
            <div className='col-span-1 flex items-center text-gray-300 lg:text-lg sm:text-sm font-medium'>{item.quantity}</div>
            <div className='col-span-1 flex items-center text-gray-300 lg:text-lg sm:text-sm font-medium'>$ {item.price}</div>
            <div className='col-span-1 flex items-center text-gray-300 lg:text-lg sm:text-sm font-medium gap-10'>
                <h3>$ {item.price * item.quantity}</h3>
                <button className='text-red-500 text-2xl' onClick={handleRemove}><RiDeleteBin5Line /></button>
            </div>
        </div>
    )
}

export default CartItem