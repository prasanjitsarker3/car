import React, { useContext, useState } from 'react';
import login from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import google from '../../assets/images/google.jpg'
// import facebook from '../../assets/images/facebook.jpg'
// import github from '../../assets/images/github1.jpg'
import { AuthContext } from '../Providers/AuthProvider';
import SocialLogin from '../Sheard/SocialLogin';


const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleUserLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            return setError("Ensure string has two digits !")
        }
        else if (password.length < 6) {
            return setError("Password Must be length 6")
        }

        setError('')
        setSuccess('')

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
                // const loggedUser = {
                //     email: user.email
                // }
                setSuccess("User Successfully Sign Up")
                form.reset()

                

            })
            .catch(error => {
                setError(error.message)
            })

    }
    return (
        <div>
            <div className="hero bg-base-200 p-5">
                <div className="hero-content flex-col lg:flex-row justify-between items-center gap-5">
                    <div className="w-1/2 mr-12 mx-auto">
                        <img src={login} alt="" srcset="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleUserLogin} className="card-body mb-0">
                            <p className='text-center text-lg font-serif'>Please Login !</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Your Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-sm">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2 ">
                                <button type='submit' className="btn btn-primary ">Sign Up</button>
                            </div>
                            <p className='text-center pb-4'>Have an account? <Link to='/register' className='color'>Sign In</Link></p>
                            <p className='text-center text-green-500'>{success}</p>
                            <p className='text-center text-red-600'>{error}</p>


                        </form>
                        <SocialLogin></SocialLogin>
                        {/* <div className='flex justify-center items-center gap-5 mt-0'>
                            <img src={google} className='h-[40px] w-[50px] cursor-pointer' alt="" />
                            <img src={facebook} className='h-[55px] w-[55px] cursor-pointer' alt="" />
                            <img src={github} className='h-[50px] w-[55px] cursor-pointer' alt="" />
                        </div> */}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;