import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Sheard/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=' bg-base-200'>
            <div className='text-center space-y-4 pt-2'>
                <h1 className='text-2xl font-serif color'>Service</h1>
                <h1 className='text-4xl font-serif'>Our Service Area</h1>
                <p className='font-serif lg:px-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12'>
                {
                    services.map(service => <ServiceCard service={service} key={service.service_id}></ServiceCard>)
                }
            </div>
            <div className='text-center py-4'>
                <button className="btn btn-outline btn-error">See More</button>
            </div>
        </div>
    );
};

export default Service;