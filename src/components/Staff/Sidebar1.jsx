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



const Sidebar1 = () => {

    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        // Get the current path
        const currentPath = window.location.pathname;
        
        // Update activeItem based on the current path
        switch (currentPath) {
            case '/staff/teachers':
                setActiveItem('Assignment');
                break;
                case '/staff/students':
                setActiveItem('Dashboard');
                break;
                case '/staff/RegistrationTeacher':
                setActiveItem('QuizManage');
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
                <a href='http://localhost:3000/staff/students' className={activeItem === 'Dashboard' ? 'item active' : 'item'}>
                    <BiHome className='logo-icon'/>
                    Students
                </a>
                <a href='http://localhost:3000/staff/teachers' className={activeItem === 'Assignment' ? 'item active' : 'item'}>
                    <BiTask className='icon'/>
                    Teachers
                </a>
                <a href='http://localhost:3000/staff/RegistrationTeacher' className={activeItem === 'QuizManage' ? 'item active' : 'item'}>
                    <BiSolidReport className='icon'/>
                   Add Teachers
                </a>
               
                

            </div>
        </div>
    );
};

export default Sidebar1
