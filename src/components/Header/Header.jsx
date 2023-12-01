import { NavLink } from "react-router-dom";

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
        <NavLink
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
        </NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu w-full gap-5 menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;