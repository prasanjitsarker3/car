import React from 'react';

const BookingRow = ({ book, handleDelete, handleBookingConfirm }) => {
    const { img, title, _id, status, email, date, price, service } = book;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className=" w-24  h-24">
                            {img && <img src={img} className='h-24 w-24' />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td className='font-semibold font-serif'>
                {date}
            </td>
            <td className='font-semibold font-serif'>$: {price}</td>
            <th>
                {
                    status === 'Confirm' ? <button className='btn btn-error'>Confirm</button>

                        : <button onClick={() => handleBookingConfirm(_id)} className="btn btn-error">Please Confirm</button>

                }
            </th>
        </tr>
    );
};

export default BookingRow;