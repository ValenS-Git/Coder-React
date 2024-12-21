import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegLightbulb, FaRegUser } from "react-icons/fa";
import { SiPlaystation5 } from "react-icons/si";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className='flex h-full'>
            <div className='w-1/2 flex items-center justify-center p-8'>
                <img src={item.thumbnail} alt={item.title} className='max-w-full max-h-full object-contain rounded-xl' />
            </div>
            <div className='w-1/2 p-8 flex flex-col h-full'>
                <h2 className='text-7xl text-[#e58d27] uppercase tracking-wide font-bold'>{item.title}</h2>
                <h4 className='text-2xl font-sans capitalize text-gray-400 mt-2'>{item.category}</h4>
                <h4 className='mt-8 text-gray-100 uppercase font-semibold text-[26px]'>{item.description}</h4>
                <p className='text-gray-500 mt-6 italic'>"{item.history}"</p>
                <div className='grid grid-cols-6 text-lg text-gray-400 mt-10 gap-5 items-center'>
                    <div className='col-span-3 flex items-center gap-4'>
                        <AiOutlineGlobal className='text-2xl text-[#e58d27]' />
                        <p>Juego offline activado</p>
                    </div>
                    <div className='col-span-3 flex items-center gap-4'>
                        <SiPlaystation5 className='text-2xl text-[#e58d27]' />
                        <p>PS5 Pro Enhanced</p>
                    </div>
                    <div className='col-span-3 flex items-center gap-4'>
                        <FaRegLightbulb className='text-2xl text-[#e58d27]' />
                        <p>Compatible con ayuda</p>
                    </div>
                    <div className='col-span-3 flex items-center gap-4'>
                        <FaRegUser className='text-2xl text-[#e58d27]' />
                        <p>1 - 2 jugadores</p>
                    </div>
                    <p className="text-3xl text-[#e58d27] font-semibold italic my-4">$ {item.price}</p>
                </div>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail