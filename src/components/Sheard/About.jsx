import React from 'react';
import aboutImage from '../../assets/images/about_us/person.jpg'
import aboutImage1 from '../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className="hero py-12 bg-base-200">
                <div className="hero-content flex-col lg:flex-row justify-between ">
                    <div className='relative lg:w-1/2'>
                        <img src={aboutImage} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={aboutImage1} alt="" srcset="" className="w-1/2  rounded-lg shadow-2xl absolute top-1/2 right-5 border-8 border-white" />

                    </div>
                    <div className='lg:w-1/2 p-4'>
                        <h1 className='font-serif font-bold text-2xl text-yellow-400'>About Us</h1>
                        <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
                        <p className="py-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <p className='pb-3 font-serif'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='pb-2'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <button className="btn btn-error">Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;