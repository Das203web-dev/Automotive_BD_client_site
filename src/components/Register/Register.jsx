import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../Provider/Provider';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import Swal from 'sweetalert2';



const Register = () => {
    // const provider = new GoogleAuthProvider()

    const { googleSignUp, userCreationWithEmailPassword } = useContext(ContextProvider);
    console.log(userCreationWithEmailPassword)
    const location = useLocation();
    const navigate = useNavigate();
    const createUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userCreationWithEmailPassword(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: 'Registration Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Registration Failed!',
                    text: `${error.message}`,
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
    }
    const handleSignUp = () => {
        googleSignUp()
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: 'Registration Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                Swal.fire({
                    title: 'Registration Failed!',
                    text: { error },
                    icon: 'error',
                    confirmButtonText: 'OK'
                })
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Here!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={createUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="bg-[red] py-3 text-white rounded-lg" type="submit" value="Register" />
                        </div>
                        <p>Already Have An Account ? Please <Link to={'/login'}>Login</Link></p>
                        <div className='flex mt-5 justify-center items-center gap-5 text-xl font-extrabold'>
                            <div className='p-2 rounded-full shadow-2xl shadow-black border-2 hover:text-[red]  hover:shadow-[red]'>
                                <Link>
                                    <FaFacebook></FaFacebook>
                                </Link>
                            </div>
                            <div className='p-2 rounded-full shadow-2xl shadow-black border-2 hover:text-[red]  hover:shadow-[red]'>
                                <Link>
                                    <FaGoogle onClick={handleSignUp}></FaGoogle>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;