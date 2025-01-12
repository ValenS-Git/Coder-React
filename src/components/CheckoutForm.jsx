import React from 'react'

const CheckoutForm = ({values, handleInput, handleForm}) => {
    return (
        <div className='w-1/2 py-16 px-12'>
            <h2 className='text-4xl mb-4 uppercase font-bold text-gray-200'><span className='text-[#e58d27]'>Gaming</span> order</h2>
            <p className='text-lg text-gray-200 italic'>Complete the form to finish the purchase</p>
            <form onSubmit={handleForm}>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                    <input
                        placeholder='Jane'
                        type="text"
                        name='name'
                        required
                        onChange={handleInput}
                        className='text-white rounded-lg py-1 px-2 col bg-gray-600 placeholder:text-white outline-none' />
                    <input
                        placeholder='Doe'
                        type="text"
                        name='lastName'
                        required
                        onChange={handleInput}
                        className='text-white rounded-lg py-1 px-2 col bg-gray-600 placeholder:text-white outline-none' />
                </div>
                <div className='mt-5'>
                    <input
                        placeholder='janedoe@gmail.com'
                        type="email"
                        name='email'
                        required
                        onChange={handleInput}
                        className='text-white rounded-lg py-1 px-2 col bg-gray-600 placeholder:text-white w-full outline-none' />
                </div>
                <div className='mt-5'>
                    <input
                        placeholder='0115239921'
                        type="text"
                        name='phone'
                        onChange={handleInput}
                        className='text-white rounded-lg py-1 px-2 col bg-gray-600 placeholder:text-white w-full outline-none' />
                </div>
                <div className='mt-5'>
                    <textarea className='text-white rounded-lg py-1 px-2 col bg-gray-600 placeholder:text-white w-full outline-none' name="textarea" onChange={handleInput} placeholder='Your message'></textarea>
                </div>
                <div className='mt-5 flex items-center gap-4'>
                    <input type="checkbox" name="checkbox" onChange={handleInput} className='checked:bg-[#e58d27] w-4 h-4 appearance-none border rounded-sm focus:outline-none' />
                    <p className='text-gray-200 italic'>I accept <span className='underline hover:text-[#e58d27]'>Terms of use</span> & <span className='underline hover:text-[#e58d27]'>Privacy Policy</span></p>
                </div>
                <button className='w-full bg-[#e58d27] mt-3 py-2 rounded-lg  shadow-md shadow-[#845b45] uppercase font-semibold hover:bg-[#c77a22]' type='submit'>Confirm purchase</button>
            </form>
        </div>
    )
}

export default CheckoutForm;