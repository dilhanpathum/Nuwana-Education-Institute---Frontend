import React from 'react'
import { BiSearch, BiNotification } from 'react-icons/bi';
import "../../styles/content.css"


const ContentHeader = () => {
    return (
        <>
        <div className='content--header'>
           <div className='header-title-container'>
            <h1 className='header--title'>Dashboard</h1>
            <h2>Student Details</h2>

            </div>
            
            <div className='header--activity'>
                <div className='search-box'>
                    <input type='text' placeholder='Search anything here..' />
                    <BiSearch className='icon' />
                </div>
                
            </div>
            
            </div>
            

</>
        

        


    )
}

export default ContentHeader
