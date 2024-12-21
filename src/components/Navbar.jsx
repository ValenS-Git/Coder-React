import React from 'react';
import CartWidget from './CartWidget';
import { RiArrowDownSFill } from "react-icons/ri";
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <>
            <header className='h-[10vh] text-gray-300 flex items-center justify-between py-4 px-10 z-40 mb-5'>
                {/* Menu nav */}
                <nav className='flex items-center '>
                    <Link to={"/"}><h2 className='text-5xl font-bold mr-20'><span className='text-[#e58d27]'>Re:</span>Plays</h2></Link>
                    <ul className='flex items-center gap-6 py-2 text-lg font-light'>
                        <li className='flex items-center gap-1 hover:text-[#e58d27] transition-colors'>
                            <button className='flex items-center gap-1'>
                                <Link to={"/category/accion"}>Accion</Link>
                                <RiArrowDownSFill />
                            </button>
                        </li>
                        <li className='flex items-center gap-1 hover:text-[#e58d27] transition-colors'>
                            <button className='flex items-center gap-1'>
                                <Link to={"/category/aventura"}>Aventura</Link>
                                <RiArrowDownSFill />
                            </button>
                        </li>
                        <li className='flex items-center gap-1 hover:text-[#e58d27] transition-colors'>
                            <button className='flex items-center gap-1'>
                                <Link to={"/category/carrera"}>Carreras</Link>
                                <RiArrowDownSFill />
                            </button>
                        </li>
                        <li className='flex items-center gap-1 hover:text-[#e58d27] transition-colors'>
                            <button className='flex items-center gap-1'>
                                <Link to={"/category/mundo-abierto"}>Mundo abierto</Link>
                                <RiArrowDownSFill />
                            </button>
                        </li>
                        <li className='flex items-center gap-1 hover:text-[#e58d27] transition-colors'>
                            <button className='flex items-center gap-1'>
                                <Link to={"/category/terror"}>Terror</Link>
                                <RiArrowDownSFill />
                            </button>
                        </li>
                    </ul>
                </nav>
                {/* Cart */}
                <CartWidget />
            </header>
        </>
    )
}

export default Navbar