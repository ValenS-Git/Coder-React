import { RiShoppingCartLine, RiMenu3Line} from "react-icons/ri";
import { useContext } from 'react'
import { CartContext } from "../context/cartContext";
import { Link } from "react-router";

const CartWidget = () => {
    const {addQuantity} = useContext(CartContext)

    return (
        <ul className='flex items-center gap-6 text-4xl'>
            <li className='hover:text-[#e58d27] transition-colors'>
                <Link to={`/cart`} className='p-2 relative'>
                    <RiShoppingCartLine/>
                    <p className='absolute left-5 top-[55%] bg-[#e58d27] text-black rounded-full w-7 text-center text-lg font-bold'>{addQuantity ()}</p>
                </Link>
            </li>
            <li className='hover:text-[#e58d27] transition-colors'>
                <button className='p-2'><RiMenu3Line/></button>
            </li>
        </ul>
    )
}

export default CartWidget;