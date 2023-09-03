import React from 'react';
import logo from '../images/Logo.png'
const Header = () => {
    return (
        <div>
            {/* Navber */}
            <div className="navbar  bg-[#1C2B35] text-white px-[80px]">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="text-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow hover:bg-sky-700 rounded-box w-52">
                            <li><a>Order</a></li>
                            <li>
                                <a>Order Review</a>
                            </li>
                            <li><a>Manage Inventory</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl" alt="" href=''><img src={logo} alt="" /></a>
                </div>
                <div className="navbar-end hidden  lg:flex items-center text-white">
                    <ul className="menu menu-horizontal px-1">
                        <li className='hover:bg-sky-300 hover:text-base rounded  text-base' ><a>Order</a></li>
                        <li className='hover:bg-sky-300 hover:text-base rounded  text-base'> <a>Order Review</a>
                        </li>
                        <li className='hover:bg-sky-300 hover:text-base rounded  text-base' ><a>Manage Inventory</a></li>
                        <li className='hover:bg-sky-300 hover:text-base rounded  text-base' ><a>Login</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;