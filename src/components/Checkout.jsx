import React, { useState, useContext } from 'react'
import { createOrder } from '../firebase/db'
import { CartContext } from '../context/cartContext'
import { serverTimestamp } from 'firebase/firestore'
import CheckoutForm from './CheckoutForm'

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

    const handleForm = (event) => {
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

        createOrder(order)
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