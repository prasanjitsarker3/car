import React from 'react';

const DateInfo = () => {
    return (
        <div className=' bg-base-200'>
            <div className=' p-12 '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 bg-black text-white rounded'>
                    <div className='mx-auto py-5'>

                        <div>
                            <p className='text-xl font-bold font-serif'>We are open monday-friday</p>
                            <p className='text-lg font-bold font-serif'>7.00 am- 9.00 pm</p>
                        </div>
                    </div>
                    <div className='mx-auto py-5'>
                        <h1 className='text-xl font-bold font-serif'>Have a question?</h1>
                        <p className='text-xl font-bold font-serif'>+2546 251 2658</p>
                    </div>
                    <div className='mx-auto py-5'>
                        <h1 className='text-xl font-bold font-serif'>Need a repair? our address</h1>
                        <p className='text-xl font-bold font-serif'>Liza Street, New York</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateInfo;