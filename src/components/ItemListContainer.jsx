import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { name } = useParams()

    useEffect(() => {
        fetch("/products.json") 
            .then(res => res.json()) 
            .then(data => {
                const filteredItems = name
                    ? data.products.filter(product => product.category === name)
                    : data.products;

                setItems(filteredItems);
                setLoading(false); 
            })
            .catch(error => {
                console.error("Error al cargar los productos:", error);
                setLoading(false); 
            });
    }, [name]);

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-[#e58d27] rounded-full animate-spin"></div>
                </div>
            ) : (
                <ItemList items={items} /> 
            )}
        </>
    );
};

export default ItemListContainer;
