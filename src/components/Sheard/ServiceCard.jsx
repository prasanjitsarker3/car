import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, service_id, price, img, _id } = service;
   
    return (
        <div>
            <div className="card w-80 mx-auto bg-base-100 shadow-xl ">
                <figure className="px-5 pt-7">
                    <img src={img} alt="Shoes" className="rounded-xl h-[200px] w-[300px]" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex justify-between  gap-28">
                        <p className='text-lg color font-serif'>Price: ${price}</p>
                        <Link to={`/book/${_id}`}> <FaArrowRight className='cursor-pointer ' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;