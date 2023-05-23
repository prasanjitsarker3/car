import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Sheard/ServiceCard';
import { useRef } from 'react';

const Service = () => {
    const [services, setServices] = useState([])
    const [ase, setDes] = useState(true);
    const useSearch=useRef(null);
    const [search, setSearch]=useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&sort=${ase ? "ase" : "des"}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [ase,search])

    const handleSearch=(event)=>{
        event.preventDefault();
        const searchText=useSearch.current.value;
        setSearch(searchText);
        event.target.reset();
    }
    return (
        <div className=' bg-base-200'>
            <div className='text-center space-y-4 pt-2'>
                <h1 className='text-2xl font-serif color'>Service</h1>
                <h1 className='text-4xl font-serif'>Our Service Area</h1>
                <p className='font-serif lg:px-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div>
                    <button onClick={() => setDes(!ase)} className='btn btn-primary'>
                        {ase ? "Price Low To High" : "Price High To Low"}
                    </button>
                </div>
                <div>
                    <div className="form-control ">
                        <div className="input-group flex justify-center items-center py-2">
                            <input ref={useSearch} type="text" placeholder="Search…" className="input input-bordered" />
                            <button onClick={handleSearch} className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
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