import React, { useState, useContext } from 'react'
import { createOrder } from '../firebase/db'
import { CartContext } from '../context/cartContext'
import { serverTimestamp } from 'firebase/firestore'
import CheckoutForm from './CheckoutForm'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Checkout = () => {
    const { totalBuy, cart, emptyCart } = useContext(CartContext)

    const [values, setValues] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        textarea: '',
    })
    const handleInput = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    const getModal = (id) => {
        const MySwal = withReactContent(Swal)

        MySwal.fire({
            title: <h2 className="text-2xl font-bold text-[#181818] uppercase">¡Gracias por confiar en nosotros!</h2>,
            html: (
                <div className="text-center">
                    <p className="text-lg text-gray-600">El id de tu compra es:</p>
                    <p className="text-xl font-semibold text-[#e58d27]">{id}</p>
                </div>
            ),
            imageUrl: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/06/playstation-studios-2384125.jpg',
            imageAlt: 'Imagen de compra',
            showConfirmButton: false,
            timer: 8000,
            timerProgressBar: true,
            didOpen: () => {
                MySwal.showLoading();
            },
        }).then(() => {
            return MySwal.fire(<p>Vuelvas prontos!</p>)
        })
    }

    const handleForm = async (event) => {
        event.preventDefault();

        const order = {
            buyer: {
                name: values.name,
                lastName: values.lastName,
                email: values.email,
                phone: values.phone
            },
            total: totalBuy(),
            items: cart,
            time: serverTimestamp()
        }

        const id = await createOrder(order)
        getModal(id);
        emptyCart();
    }

    if (cart.length === 0) {
        return (
            <div className='mx-auto py-20'>
                <h2 className='text-4xl text-gray-300 text-center font-semibold uppercase'>Primero debes agregar un producto al carrito!</h2>
            </div>
        )
    }
    return (
        <div className='container mx-auto py-10'>
            <div className='flex w-9/12 rounded-xl mx-auto overflow-hidden'>
                <div className='w-1/2 flex flex-col justify-center items-center p-12 bg-no-repeat bg-cover bg-center rounded-xl' style={{ backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987722169-VV6ZASHHZNRBJW9X0PLK/Key_Art_02_layeredjpg.jpg?format=1500w)" }}>
                    <h1 className='text-3xl text-center uppercase text-[#e58d27] font-bold italic'>Muchas gracias por su compra</h1>
                    <div>
                        <p className='text-center text-white italic w-3/4 mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur laboriosam consectetur, animi nesciunt vero sequi.</p>
                    </div>
                </div>
                <CheckoutForm
                    values={values}
                    handleInput={handleInput}
                    handleForm={handleForm}
                />
            </div>
        </div>
    )
}

export default Checkout