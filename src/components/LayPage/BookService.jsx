import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import bookPhoto from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../Providers/AuthProvider';

const BookService = () => {
    const { users } = useContext(AuthContext)
    const bookData = useLoaderData();
    const { price, title, _id, img } = bookData;

    const handleBookService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = users?.email;
        const order = {
            customerName: name,
            email,
            img,
            date,
            title,
            service: _id,
            price: price
        }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                
            })
    }
    return (
        <div className='bg-base-100'>
            <div className='relative mx-12 '>
                <img src={bookPhoto} alt="" srcset="" className='h-[200px] w-full ' />
                <div className="absolute rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className=' flex justify-center align-center '>
                        <h1 className=' text-xl  font-semibold font-serif text-white left-1/2 bottom-0'>{bookData.title}</h1>
                    </div>
                </div>
            </div>
            <div>
                <form onSubmit={handleBookService} className=" m-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <div className="form-control">
                            <input type="text" name='name' defaultValue={users?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="date" name='date' placeholder="Date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="email" name='email' defaultValue={users?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='price' defaultValue={'Due amount: $' + price} className="input input-bordered" />
                        </div>


                    </div>
                    <div className="form-control py-6 text-center mx-auto md:px-64">
                        <button type='submit' className="btn  w-full">Confirm Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookService;
