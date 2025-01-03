import CartItem from "./CartItem";

const CartItems = ({items}) => {
    return (
        <div className="h-auto mx-28 shadow-lg shadow-[#e58d27] pb-28">
            <div className="flex justify-between text-gray-300 text-3xl font-bold uppercase p-6">
                <h2>Gaming Cart</h2>
                <p>{items.length} Items</p>
            </div>
            <div className="grid grid-cols-6 text-lg p-6 pb-8 text-gray-400 uppercase font-medium">
                <p className="col-span-3">Product Detail</p>
                <p className="col-span-1">Quantity</p>
                <p className="col-span-1">Price</p>
                <p className="col-span-1">Total</p>
            </div>
            <div>
                {items.map(item => {
                    return (
                        <CartItem item={item} key={item.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default CartItems;