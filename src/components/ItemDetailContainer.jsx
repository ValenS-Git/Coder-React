import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({ thumbnail: [], title: '', description: '', history: '',price: undefined })
    const { id } = useParams()

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => {
                const filterItem = data.products.find(prod => prod.id === parseInt(id))
                setItem(filterItem);
            })
            .catch(err => {
                console.error("Error al cargar el producto", err)
            })
    }, [id]);
    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;