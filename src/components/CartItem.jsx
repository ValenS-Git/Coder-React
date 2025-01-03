import React from 'react'

const CartItem = ({item}) => {
    return (
        <div className='grid grid-cols-6 text-gray-200 p-6 border-t border-gray-500'>
            <div className='col-span-3 text-gray-300 flex items-center'>
                <img className='w-[150px] object-contain rounded-lg' src={item.thumbnail} alt={item.title}/>
                <h2 className='ml-20 text-2xl uppercase font-medium'>{item.title}</h2>
            </div>
            <div className='col-span-1 flex items-center text-gray-300 text-lg font-medium'>{item.quantity}</div>
            <div className='col-span-1 flex items-center text-gray-300 text-lg font-medium'>$ {item.price}</div>
            <div className='col-span-1 flex items-center text-gray-300 text-lg font-medium'>$ {item.price * item.quantity}</div>
        </div>
    )
}

export default CartItem