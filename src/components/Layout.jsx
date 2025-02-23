import React from 'react';
import { motion } from 'framer-motion';
import TaskIndicator from './TaskIndicator';
import CreateTask from './createTask/CreateTask';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <div className='flex flex-col md:flex-row md:justify-between'>
                <CreateTask />
                <motion.div 
                    className='task-container w-auto mx-5 md:w-1/3 mt-3'
                    initial={{ opacity: 0, y: 20 }} // Initial state
                    animate={{ opacity: 1, y: 0 }} // Animate to this state
                    exit={{ opacity: 0, y: 20 }} // State on exit
                    transition={{ duration: 0.3 }} // Transition duration
                >
                    <div className='outlet'>
                        <Outlet />
                    </div>
                    <div className='indicator'>
                        <TaskIndicator />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Layout;
