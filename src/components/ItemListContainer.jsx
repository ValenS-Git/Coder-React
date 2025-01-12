import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProducts, getProductsByCategory } from "../firebase/db";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { name } = useParams()

    useEffect(() => {
        if (name) {
            getProductsByCategory(name)
                .then(res => setItems(res))
        }
        getProducts()
            .then(data => {
                const filteredItems = name
                    ? data.filter(product => product.category === name)
                    : data;

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
