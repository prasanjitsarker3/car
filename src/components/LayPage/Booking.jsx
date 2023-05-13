import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import photo from '../../assets/images/checkout/checkout.png'
import BookingRow from './BookingRow';

const Booking = () => {
    const { users } = useContext(AuthContext);
    const [booking, setBooking] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${users?.email}`)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [users?.email])

    const handleDelete = (id) => {
        const proceed = confirm("Are You Sure Delete");
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = booking.filter(book => book._id !== id)
                    setBooking(remaining)
                })
        }
    }

    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = booking.filter(book => book._id !== id)
                    const update = booking.find(book => book._id === id)
                    update.status = 'Confirm'
                    const newBooking = [update, ...remaining]
                    setBooking(newBooking);
                }
            })
    }
    return (
        <div lassName='bg-base-100'>
            <div className='relative mx-12 '>
                <img src={photo} alt="" srcset="" className='h-[200px] w-full ' />
                <div className="absolute rounded-xl h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className=' flex justify-center align-center '>
                        <h1 className=' text-xl  font-semibold font-serif text-white left-1/2 top-15'>Car Details</h1>
                    </div>
                </div>

            </div>
            <div>
                <div className="mx-12 py-12">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='font-serif'>
                                    Book Service
                                </th>
                                <th>Photo</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booking.map(book => <BookingRow book={book} key={book._id} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>)
                            }
                        </tbody>


                    </table>
                </div>

            </div>
        </div >


    );
};

export default Booking;