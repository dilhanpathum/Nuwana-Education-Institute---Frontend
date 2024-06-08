
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
import "./styles/quiz.css";

import QuizStepper from './components/Quiz/QuizStepper';
import Quiz from './components/Quiz/Quiz';
import Admin from './components/Test/Admin';
import AddQuestion from './components/Question/AddQuestion';
import UpdateQuestion from './components/Question/UpdateQuestion';
import GetAllQuiz from './components/Quiz/GetAllQuiz';
import QuizResult from './components/Quiz/QuizResult';
import Form from './components/ContactUs/Form';
import About from './components/AboutUs/About';

import Test3 from './components/Test/Test3';
import Test4 from './components/Test/Test4';
import Test5 from './components/Test/Test5';

import Profile2 from './components/UserProfile/Profile2';
import Leaderboard from './components/Leaderboard/Leaderboard';
import { Sidebar } from 'flowbite-react';
import Content from './components/Test/Content';

import Gallery from './components/Gallery/Gallery';



import SubjectGradeSelection from './components/Test/SubjectGradeSelection';


import Home from './components/Home/Home';




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
          <Route path='/Test2' element={<Test2/>}/>
          <Route path ="/Test3" element ={<Test3/>}/>
          <Route path ="/Test4" element ={<Test4/>}/>
          <Route path ="/Test5" element ={<Test5/>}/>
          <Route path ="/Sidebar" element ={<Sidebar/>}/>
          <Route path ="/Content" element ={<Content/>}/>
          <Route path ="/Gallery" element ={<Gallery/>}/>
          <Route path ="/SubjectGradeSelection" element ={<SubjectGradeSelection/>}/>


          <Route path="/AddQuestion" element={<AddQuestion/>}/>
          <Route path="/GetAllQuiz" element={<GetAllQuiz/>}/>



          <Route path='/contact' element={<Form/>}/>
          <Route path='/About' element={<About/>}/>


          
					<Route path="/quiz-stepper" element={<QuizStepper />} />
					<Route path="/take-quiz" element={<Quiz />} />
					<Route path="/admin" element={<Admin />} />

					<Route path="/create-quiz" element={<AddQuestion />} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion />} />
					<Route path="/all-quizzes" element={<GetAllQuiz />} />
					<Route path="/quiz-result" element={<QuizResult />} />

          
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        
      </Router>
      </CookiesProvider>
  );
}

export default App;
