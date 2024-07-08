import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'
import  './../../styles/adminpanel.css'
import AddQuestion from './AddQuestion'
import GetAllQuiz from './GetAllQuiz'
import EnrollStudents from './EnrollStudents';
import Students from './Students';
import { Routes, Route, Outlet } from "react-router-dom";
import QrScan from './QrScan'
import UpdateQuestion from '../Question/UpdateQuestion'



export default function Adminpanel() {
  return (
    <>
    <Header/>
      <div className='dashboard'>
        <Sidebar />
        <div className='dashboard--content'>
          
          <Routes>
          <Route path="update-quiz/:id" element={<UpdateQuestion />} />
        <Route path="enrollstudents" element={<EnrollStudents/>} />
        <Route path="students" element={<Students/>} />
        <Route path="AddQuestion" element={<AddQuestion/>}/>
        <Route path="GetAllQuiz" element={<GetAllQuiz/>}/>
        <Route path="qrscan" element={<QrScan/>}/>
      </Routes>
      <Outlet />
        </div>

      </div>

     <Footer/>
     
    </>
  )
}
