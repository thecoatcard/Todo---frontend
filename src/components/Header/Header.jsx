import React, { useContext } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import TokenContext from '../../context/TokenContext.js';
import './header.css';

function Header() {
    const token = localStorage.getItem("authToken");
    const { user } = useContext(TokenContext);

    const logout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    };

    return (
        <div>
            <nav className="header bg-slate-200 flex justify-between items-center shadow-md p-4">
                <div className="logo text-2xl font-bold text-center">
                    <NavLink to="/" className="text-indigo-700 hover:text-indigo-900 transition-colors duration-300">Todo App</NavLink>
                </div>
                <div className='flex items-center justify-end space-x-6'>
                    {token ? (
                        <div className='flex items-center'>
                            <p className='mr-4 text-gray-700'>Welcome, <span className='text-xl text-blue-800 capitalize'>{user.name}</span></p>
                            <button onClick={logout} className="logout bg-red-500 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-red-600">Logout</button>
                        </div>
                    ) : (
                        <ul className='flex space-x-4'>
                            <li>
                                <NavLink to="/login" className="text-gray-700 hover:text-indigo-700 transition-colors duration-300">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className="text-gray-700 hover:text-indigo-700 transition-colors duration-300">Register</NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Header;
