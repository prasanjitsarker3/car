import React from 'react';
import carosol1 from '../../assets/images/banner/1.jpg'
import carosol2 from '../../assets/images/banner/2.jpg'
import carosol3 from '../../assets/images/banner/3.jpg'
import carosol4 from '../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className='px-3'>
            <div className="carousel w-full py-2 h-[500px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={carosol1} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='lg:text-6xl md:text-4xl text-3xl font-bold font-serif'>Affordable Price For Car Servicing</h2>
                            <p className='font-serif'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-warning mr-4">Discover More</button>
                                <button className="btn btn-outline btn-success">Latest Project</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={carosol2} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='lg:text-6xl md:text-4xl text-3xl font-bold font-serif'>Affordable Price For Car Servicing</h2>
                            <p className='font-serif'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-warning mr-4">Discover More</button>
                                <button className="btn btn-outline btn-success">Latest Project</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={carosol3} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='lg:text-6xl md:text-4xl text-3xl font-bold font-serif'>Affordable Price For Car Servicing</h2>
                            <p className='font-serif'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-warning mr-4">Discover More</button>
                                <button className="btn btn-outline btn-success">Latest Project</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={carosol4} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='lg:text-6xl md:text-4xl text-3xl font-bold font-serif'>Affordable Price For Car Servicing</h2>
                            <p className='font-serif'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-warning mr-4">Discover More</button>
                                <button className="btn btn-outline btn-success">Latest Project</button>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5  bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;