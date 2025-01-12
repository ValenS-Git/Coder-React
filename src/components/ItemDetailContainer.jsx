import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getItem } from '../firebase/db'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({ thumbnail: [], title: '', description: '', history: '',price: undefined })
    const { id } = useParams()

    useEffect(() => {
        getItem(id)
            .then(data => {
                setItem(data);
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