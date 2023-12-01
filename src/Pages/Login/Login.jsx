import React, { useContext } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../../components/Provider/Provider';
import Swal from 'sweetalert2';

const Login = () => {
    const { googleSignUp, loginWithEmailPass } = useContext(ContextProvider);
    const location = useLocation();
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmailPass(email, password)
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: 'Login Success!',
                        text: "Continue",
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    navigate(location?.state ? location.state : "/")

                }
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        title: 'Registration Failed!',
                        text: `${error.message}`,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    // const handleLoginByGoogle = () => {
    //     googleSignUp()
    //         .then(result => {
    //             if (result.user) {
    //                 Swal.fire({
    //                     title: 'Login Success!',
    //                     text: "Continue",
    //                     icon: 'success',
    //                     confirmButtonText: 'OK'
    //                 })
    //             }
    //             navigate(location?.state ? location.state : "/")
    //         })
    //         .catch(error => {
    //             if (error) {
    //                 Swal.fire({
    //                     title: 'Registration Failed!',
    //                     text: `${error.message}`,
    //                     icon: 'error',
    //                     confirmButtonText: 'OK'
    //                 })
    //             }
    //         })
    // }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={login} className="card-body">
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
                                <button className="bg-[red] py-3 text-white rounded-lg">Login</button>
                            </div>
                            <p>Dont Have Account ? Please <Link to={'/register'}>Register</Link></p>
                            {/* <div className='flex mt-5 justify-center items-center gap-5 text-xl font-extrabold'>
                                <div className='p-2 rounded-full shadow-2xl shadow-black border-2 hover:text-[red]  hover:shadow-[red]'>
                                    <Link>
                                        <FaFacebook></FaFacebook>
                                    </Link>
                                </div>
                                <div className='p-2 rounded-full shadow-2xl shadow-black border-2 hover:text-[red]  hover:shadow-[red]'>
                                    <Link>
                                        <FaGoogle onClick={handleLoginByGoogle}></FaGoogle>
                                    </Link>
                                </div>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;