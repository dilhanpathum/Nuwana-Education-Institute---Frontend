
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../src/components/Login/Login"
import { Toaster } from "react-hot-toast";
import { CookiesProvider } from "react-cookie";
import Header from './components/Navbar/Header';
import Registation from './components/Login/Registation';
import Profile from './components/UserProfile/Profile';
import Test from './components/Test/Test';

import "./styles/quiz.css";

import QuizStepper from './components/Quiz/QuizStepper';
import Quiz from './components/Quiz/Quiz';


import UpdateQuestion from './components/Question/UpdateQuestion';

import QuizResult from './components/Quiz/QuizResult';
import Form from './components/ContactUs/Form';
import About from './components/AboutUs/About';

import Test3 from './components/Test/Test3';


import Profile2 from './components/UserProfile/Profile2';
import Leaderboard from './components/Leaderboard/Leaderboard';



import Gallery from './components/Gallery/Gallery';






import Home from './components/Home/Home';
import SubjectGradeSelection from './components/Enroll/SubjectGradeSelection';

import Adminpanel from './components/Admin/Adminpanel';
import Content from './components/Admin/Content';





function App() {
  return (
    
    <CookiesProvider>
    <Toaster/>
      <Router>
        <Routes>
          <Route path="/Header" element={<Header/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/SignIn" element={<Login/>}/>
          <Route path="/SignUp" element={<Registation/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Profile2' element={<Profile2/>}/>
          <Route path="/home" element={<Home />} />

          <Route path='/Test' element={<Test/>}/>

          <Route path ="/Test3" element ={<Test3/>}/>


          <Route path ="/Gallery" element ={<Gallery/>}/>
          <Route path ="/Enroll" element ={<SubjectGradeSelection/>}/>





          <Route path='/contact' element={<Form/>}/>
          <Route path='/About' element={<About/>}/>


          

					<Route path="/quiz" element={<QuizStepper />} />
					<Route path="/admin/*" element={<Adminpanel />} />


					
          <Route path="/take-quiz" element={<Quiz />} />
					<Route path="/quiz-result" element={<QuizResult />} />

          
          <Route path="/leaderboard" element={<Leaderboard />} />

        </Routes>
        
      </Router>
      </CookiesProvider>
  );
}

export default App;
