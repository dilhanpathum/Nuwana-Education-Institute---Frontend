
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login"
import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "react-cookie";
import Header from './components/Navbar/Header';
import Registation from './components/Login/Registation';
import Profile from './components/UserProfile/Profile';

import Test from './components/Test/Test';
import Test2 from './components/Test/Test2';

import Form from './components/ContactUs/Form';
import About from './components/AboutUs/About';


function App() {
  return (
    <CookiesProvider>
    <Toaster/>
      <Router>
        <Routes>
          <Route path="/Header" element={<Header/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/SignIn" element={<Login/>}/>
          <Route path="/SignUp" element={<Registation/>}/>
          <Route path='/Profile' element={<Profile/>}/>

          <Route path='/Test' element={<Test/>}/>
          <Route path='/Test2' element={<Test2/>}/>

          <Route path='/Form' element={<Form/>}/>
          <Route path='/About' element={<About/>}/>

        </Routes>
        
      </Router>
      </CookiesProvider>
  );
}

export default App;
