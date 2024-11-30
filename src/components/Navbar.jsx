import React from 'react';
import CartWidget from './CartWidget';
import { RiArrowDownSFill } from "react-icons/ri";

const Navbar = () =>{
    return(
        <>
        <header className='h-[10vh] text-gray-300 flex items-center justify-between py-4 px-10 z-40'>
            {/* Menu nav */}
            <nav className='flex items-center '>
                <h2 className='text-5xl font-bold mr-20'><span className='text-[#e58d27]'>Re:</span>Plays</h2>
                <ul className='flex items-center gap-8'>
                    <li>
                        <a href="#" className='hover:text-[#e58d27] font-semibold text-lg transition-colors'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='hover:text-[#e58d27] font-semibold text-lg transition-colors'>Game Store</a>
                    </li>
                    <li>
                        <a href="#" className='hover:text-[#e58d27] font-semibold text-lg transition-colors'>Contact</a>
                    </li>
                    <li>
                        <a href="#" className='hover:text-[#e58d27] font-semibold text-lg transition-colors'>News</a>
                    </li>
                </ul>
            </nav>
            {/* Cart */}
            <CartWidget />
        </header>
        <div className='text-gray-300 py-2 px-10 border-t border-gray-600'>
            <h3 className='font-semibold text-xl mb-1'>Categories</h3>
            <ul className='flex items-center gap-6 py-2'>
                <li className='flex items-center gap-1 hover:text-[#e58d27] transition-colors'>
                    <a href="#">Playstation</a>
                    <RiArrowDownSFill />
                </li>
                <li className='flex items-center gap-1 hover:text-[#e58d27] transition-colors'>
                    <a href="#">Xbox</a>
                    <RiArrowDownSFill />
                </li>
                <li className='flex items-center gap-1 hover:text-[#e58d27] transition-colors'>
                    <a href="#">Nintendo</a>
                    <RiArrowDownSFill />
                </li>
                <li className='flex items-center gap-1 hover:text-[#e58d27] transition-colors'>
                    <a href="#">Pc</a>
                    <RiArrowDownSFill />
                </li>
            </ul>
        </div>
        </>
    )
}

export default Navbar