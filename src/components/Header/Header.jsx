import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaCar } from "react-icons/fa6";
import { useContext } from "react";
import { ContextProvider } from "../Provider/Provider";
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";



const Header = () => {
    const { user, logOut } = useContext(ContextProvider);
    // console.log(user)


    const links = <>
        <NavLink
            to={`/`}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active"
                    : isPending
                        ? "pending"
                        : ""
            }
            style={({ isActive }) => ({
                color: isActive ? "Red" : ""
            })}
        >
            Home
        </NavLink>
        <NavLink
            to={`/addProduct`}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active"
                    : isPending
                        ? "pending"
                        : ""
            }
            style={({ isActive }) => ({
                color: isActive ? "Red" : ""
            })}
        >
            Add Product
        </NavLink>
        <NavLink
            to={`/myCart`}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active"
                    : isPending
                        ? "pending"
                        : ""
            }
            style={({ isActive }) => ({
                color: isActive ? "Red" : ""
            })}
        >
            My Cart
        </NavLink>
        <NavLink
            to={`/brand`}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active"
                    : isPending
                        ? "pending"
                        : ""
            }
            style={({ isActive }) => ({
                color: isActive ? "Red" : ""
            })}
        >
            Brand
        </NavLink>

    </>
    return (
        <div className="navbar p-0 relative shadow-2xl shadow-slate-300">
            <div className="navbar-start flex justify-between md:justify-normal w-full">
                <div className="dropdown z-50">
                    <div tabIndex={0} role="button" className=" p-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-6 z-[1] shadow-md shadow-white bg-black rounded text-lg font-semibold w-screen">
                        {links}
                    </ul>
                </div>
                <Link to={'/'}><a className="md:text-3xl text-left text-xl flex items-center ml-2 gap-2"><FaCar className=" "></FaCar> <span className="md:text-left text-center font-bold">AutomotiveBd</span></a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-lg font-bold w-full gap-5 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {/* <div className="flex"> */}
            {/* <div>
                    {
                        user ? user.photoUrl : ""
                    }
                </div> */}
            <div className="navbar-end w-full mr-1 gap-1">
                <div className="flex justify-center items-center">
                    {
                        user?.photoURL ? <div><img className="md:w-10  md:h-10 w-[30px] h-[30px] rounded-full" src={user.photoURL} alt="" /></div> : (
                            <div className="w-10  relative h-10  rounded-full"><CgProfile className="md:text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl"></CgProfile></div>
                        )
                    }
                </div>
                <div>
                    {
                        user ? <Link to={'/'}><button onClick={logOut} className="px-4 py-2 rounded font-bold bg-[red] text-xl">Logout</button></Link > : <Link to={'/login'} ><button className="px-4 py-2 rounded font-bold bg-[red] text-xl">Login</button></Link>
                    }
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Header;