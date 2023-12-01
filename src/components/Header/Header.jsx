import { Link, NavLink } from "react-router-dom";
import { FaCar } from "react-icons/fa6";


const Header = () => {
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
        {/* <NavLink
            to={`/login`}
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
            Login
        </NavLink> */}
    </>
    return (
        <div className="navbar shadow shadow-black">
            <div className="navbar-start flex justify-between md:justify-normal w-full">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" p-0 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-6 z-[1] shadow bg-[black] rounded text-lg font-semibold w-screen">
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
            <Link to={'/login'} className="navbar-end w-full">
                <a className="btn">Login</a>
            </Link>
        </div>
    );
};

export default Header;