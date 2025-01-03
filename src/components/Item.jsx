import { Link } from "react-router";

const Item = ({item}) => {
    return (
        <div className="lg:col-span-3 sm:col-span-3 bg-[#242731] rounded-xl relative hover:shadow-lg hover:shadow-[#e58d27] transition-all">
            <img src={item.thumbnail} className="w-full rounded-t-xl" />
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-gray-200 font-semibold text-xl">{item.title}</h3>
                    <p className="text-[#e58d27] font-bold italic">${item.price}</p>
                </div>
                <p className="text-gray-400 italic capitalize">{item.category}</p>
                <p className="mt-4 mb-12 text-gray-300 italic">{item.description}</p>
                <Link className="bg-[#e58d27] text-black font-bold px-3 w-[90%] py-1 rounded-lg absolute bottom-3 text-center hover:bg-[#cf8129]" to={`/item/${item.id}`}>View details</Link>
            </div>
        </div>
    )
}

export default Item;