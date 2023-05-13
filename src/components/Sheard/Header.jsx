import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const { logOut, users } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100 mb-4">
                <div className="navbar-start font-semibold font-serif">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content font-semibold font-serif mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>About</Link></li>

                            {
                                users?.email ? <>
                                    <li><Link to='/bookings'>Booking</Link></li>
                                    <li><Link onClick={handleLogOut}>Log out</Link></li>
                                </> :
                                    <li><Link to='/login'>Login</Link></li>
                            }

                        </ul>
                    </div>
                    <Link to='/' className="py-2">
                        <img src={logo} alt="" className='h-[60px]' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex font-semibold font-serif">
                    <ul className="menu menu-horizontal d-flex gap-3 px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        {
                            users?.email ? <>
                                <li><Link to='/bookings'>Booking</Link></li>
                                <li><Link onClick={handleLogOut}>Log out</Link></li>
                            </> :
                                <li><Link to='/login'>Login</Link></li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline btn-warning">Appointment</button>

                </div>
            </div>
        </div>
    );
};

export default Header;