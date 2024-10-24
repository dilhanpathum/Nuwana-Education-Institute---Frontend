import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate  } from "react-router-dom";
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

import Admin from './components/Staff/Admin';
import Payment from './components/Payment/Payment';

import Virtual from './components/VirtualTour/Virtual';
import ErrorBoundary from './components/Error/ErrorBoundary';
import Error from './components/Error/Error';








function App() {
  return (
    <CookiesProvider>
      <Toaster />
      <Router>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </Router>
    </CookiesProvider>
  );
}

function AppRoutes() {
  const navigate = useNavigate();

  React.useEffect(() => {
    window.onerror = (message, source, lineno, colno, error) => {
      console.error('Global error caught:', { message, source, lineno, colno, error });
      navigate('/notfound');
    };

    window.onunhandledrejection = (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      navigate('/notfound');
    };
  }, [navigate]);

  return (
    <Routes>
      <Route path="/Header" element={<Header />} />
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<Login />} />
      <Route path="/SignUp" element={<Registation />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/attendence/:id' element={<Profile2 />} />
      <Route path="/home" element={<Home />} />
      <Route path='/Test' element={<Test />} />
      <Route path="/Test3" element={<Test3 />} />
      <Route path="/class" element={<Virtual />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/Enroll" element={<SubjectGradeSelection />} />
      <Route path='/contact' element={<Form />} />
      <Route path='/About' element={<About />} />
      <Route path='/pay' element={<Payment />} />
      <Route path="/quiz" element={<QuizStepper />} />
      <Route path="/admin/*" element={<Adminpanel />} />
      <Route path="/staff/*" element={<Admin />} />
      <Route path="/take-quiz" element={<Quiz />} />
      <Route path="/quiz-result" element={<QuizResult />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/notfound" element={<Error />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
