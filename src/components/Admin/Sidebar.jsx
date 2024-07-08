import React from 'react'
import { BiBookAlt, 
    BiHome,
    BiMessage, 
    BiSolidReport, 
    BiStats, 
    BiTask,
    BiHelpCircle, 
} from 'react-icons/bi';
import '../../styles/sidebar.css'

import  { useState, useEffect } from 'react';



const Sidebar = () => {

    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        // Get the current path
        const currentPath = window.location.pathname;
        
        // Update activeItem based on the current path
        switch (currentPath) {
            case '/admin/students':
                setActiveItem('Assignment');
                break;
                case '/admin/enrollstudents':
                setActiveItem('Dashboard');
                break;
                case '/admin/AddQuestion':
                setActiveItem('QuizManage');
                break;
                case '/admin/qrscan':
                setActiveItem('QRScanner');
                break;
        }
    }, []);

    return (
        <div className='menu'>
            {/* <div className='logo'>
                <BiBookAlt className='logo-icon'/>
                <h2>Nuwana</h2>
            </div> */}

            <div className='menu--list'>
                <a href='http://localhost:3000/admin/enrollstudents' className={activeItem === 'Dashboard' ? 'item active' : 'item'}>
                    <BiHome className='logo-icon'/>
                    Students
                </a>
                <a href='http://localhost:3000/admin/students' className={activeItem === 'Assignment' ? 'item active' : 'item'}>
                    <BiTask className='icon'/>
                    Pending
                </a>
                <a href='http://localhost:3000/admin/AddQuestion' className={activeItem === 'QuizManage' ? 'item active' : 'item'}>
                    <BiSolidReport className='icon'/>
                   Quiz Manage
                </a>
                <a href='http://localhost:3000/admin/qrscan' className={activeItem === 'QRScanner' ? 'item active' : 'item'}>
                    <BiStats className='icon'/>
                   Qr Scanner
                </a>
                

            </div>
        </div>
    );
};

export default Sidebar
