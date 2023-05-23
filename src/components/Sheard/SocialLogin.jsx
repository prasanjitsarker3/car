import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const handleGoogleSignUp = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <div className="flex flex-col w-full text-center border-opacity-50">
                <div className="divider">OR</div>
                <div className='flex justify-center pb-2'>
                    <button onClick={handleGoogleSignUp} className="btn btn-circle btn-outline text-green-700">
                        G
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;