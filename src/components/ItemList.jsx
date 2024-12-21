import Item from "./Item";

const ItemList = ({items}) => {
    return (
        <main className="h-[90vh] mx-28">
            <div className="grid sm:grid-cols-6 lg:grid-cols-12 gap-4">
                {items.map(item => {
                    return (
                        <Item item={item}/>
                    )
                })}
            </div>
        </main>
    )
}

export default ItemList;