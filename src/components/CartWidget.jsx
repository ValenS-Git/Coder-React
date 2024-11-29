import React from 'react'
import { RiShoppingCartLine, RiMenu3Line} from "react-icons/ri";

const CartWidget = () => {
    return (
        <ul className='flex items-center gap-6 text-4xl'>
            <li className='hover:text-[#e58d27] transition-colors'>
                <button className='p-2 relative'>
                    <RiShoppingCartLine/>
                    <p className='absolute right-[-5px] bottom-[-5px] bg-[#e58d27] text-black rounded-full w-7 text-center text-lg font-bold'>2</p>
                </button>
            </li>
            <li className='hover:text-[#e58d27] transition-colors'>
                <button className='p-2'><RiMenu3Line/></button>
            </li>
        </ul>
    )
}

export default CartWidget