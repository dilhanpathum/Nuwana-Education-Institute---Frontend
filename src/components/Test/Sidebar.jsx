import React from 'react'
import { BiBookAlt, 
    BiHome,
    BiMessage, 
    BiSolidReport, 
    BiStats, 
    BiTask,
    BiHelpCircle, 
} from 'react-icons/bi';
import '../styles/sidebar.css'

import  { useState, useEffect } from 'react';



const Sidebar = () => {

    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        // Get the current path
        const currentPath = window.location.pathname;
        
        // Update activeItem based on the current path
        switch (currentPath) {
            case '/Test4':
                setActiveItem('Assignment');
                break;
                case '/Test5':
                setActiveItem('Dashboard');
                break;
        }
    }, []);

    return (
        <div className='menu'>
            <div className='logo'>
                <BiBookAlt className='logo-icon'/>
                <h2>Nuwana</h2>
            </div>

            <div className='menu--list'>
                <a href='http://localhost:3000/Test5' className={activeItem === 'Dashboard' ? 'item active' : 'item'}>
                    <BiHome className='logo-icon'/>
                    Dashboard
                </a>
                <a href='http://localhost:3000/Test4' className={activeItem === 'Assignment' ? 'item active' : 'item'}>
                    <BiTask className='icon'/>
                    Assignment
                </a>
                <a href='http://localhost:3000/AddQuestion' className='item'>
                    <BiSolidReport className='icon'/>
                   Quiz Manage
                </a>
                <a href='#' className='item'>
                    <BiStats className='icon'/>
                   Stats
                </a>
                <a href='#' className='item'>
                    <BiMessage className='icon'/>
                    Message
                </a>
                <a href='#' className='item'>
                    <BiHelpCircle className='icon'/>
                    Help
                </a>

            </div>
        </div>
    );
};

export default Sidebar
