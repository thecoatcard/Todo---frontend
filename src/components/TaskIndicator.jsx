import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function TaskIndicator() {
    return (
        <div className='flex-grow'>
            <nav>
                <motion.ul
                    className='flex gap-3 justify-between p-3 bg-slate-400 rounded-lg shadow-2xl'
                    initial={{ opacity: 0, y: -20 }} // Initial state
                    animate={{ opacity: 1, y: 0 }} // Animate to this state
                    transition={{ duration: 0.3 }} // Transition duration
                >
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                        >
                            All Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/active" 
                            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                        >
                            Active
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/completed" 
                            className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
                        >
                            Completed
                        </NavLink>
                    </li>
                </motion.ul>
            </nav>
        </div>
    );
}

export default TaskIndicator;
