
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login"
import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "react-cookie";
import Header from './components/Navbar/Header';
import Registation from './components/Login/Registation';

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
        </Routes>
        
      </Router>
      </CookiesProvider>
  );
}

export default App;
