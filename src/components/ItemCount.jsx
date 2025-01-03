import React, { useContext, useState } from 'react'
import { RiShoppingCartLine } from "react-icons/ri";
import { CartContext } from '../context/cartContext';

const ItemCount = ({item}) => {
    const [count, setCount] = useState(0)
    const {addProduct} = useContext(CartContext);

    const addToCart = () => {
        addProduct({...item, quantity: count})
    }

    return (
        <div className='grid grid-cols-12 text-white mt-10 items-center'>
            <button className='px-2 pt-2 pb-3 text-center rounded-l-xl text-[#e58d27] bg-gray-300 text-3xl font-bold col-span-2' onClick={() => setCount((count) => count + 1)}>+</button>
            <p className='col-span-2 text-center font-bold text-3xl bg-gray-300 text-black px-2 pt-2 pb-3 border-x-2 border-gray-600'>{count}</p>
            <button className='px-2 pt-2 pb-3 text-center rounded-r-xl text-[#e58d27] bg-gray-300 text-3xl font-bold col-span-2' onClick={() => setCount((count) => count > 0 ? count - 1 : count)}>-</button>
            <button onClick={addToCart} disabled={count <= 0} className={`${count <= 0 ? "bg-[#e58c27a1]": "bg-[#e58d27] shadow-[#845b45]"} flex gap-3 col-span-6 justify-center items-center py-4 rounded-xl ml-3 w-full  text-black font-semibold  shadow-lg`}>
                <RiShoppingCartLine className='text-2xl'/>
                <p className="text-lg" >Add to cart</p>
            </button>
        </div>
    )
}

export default ItemCount