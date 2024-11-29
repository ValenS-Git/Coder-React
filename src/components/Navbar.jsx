import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () =>{
    return(
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
    )
}

export default Navbar