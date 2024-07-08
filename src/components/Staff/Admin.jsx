import React from 'react'

import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'
import  './../../styles/adminpanel.css'

import { Routes, Route, Outlet } from "react-router-dom";

import Sidebar1 from './Sidebar1'
import Teachers from './Techers'
import Students1 from './Students1'
import RegistationTeacher from './RegistationTeacher';



export default function Admin() {
  return (
    <>
    <Header/>
      <div className='dashboard'>
        <Sidebar1 />
        <div className='dashboard--content'>
          
          <Routes>

        <Route path="teachers" element={<Teachers/>} />
        <Route path="students" element={<Students1/>} />
        <Route path="RegistrationTeacher" element={<RegistationTeacher/>} />
      </Routes>
      <Outlet />
        </div>

      </div>

     <Footer/>
     
    </>
  )
}
