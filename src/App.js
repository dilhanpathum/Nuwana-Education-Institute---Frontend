
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
import Home from './components/Test/Home';
import QuizStepper from './components/Quiz/QuizStepper';
import Quiz from './components/Quiz/Quiz';
import Admin from './components/Test/Admin';
import AddQuestion from './components/Question/AddQuestion';
import UpdateQuestion from './components/Question/UpdateQuestion';
import GetAllQuiz from './components/Quiz/GetAllQuiz';
import QuizResult from './components/Quiz/QuizResult';
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


          <Route path="/home" element={<Home />} />
					<Route path="/quiz-stepper" element={<QuizStepper />} />
					<Route path="/take-quiz" element={<Quiz />} />
					<Route path="/admin" element={<Admin />} />

					<Route path="/create-quiz" element={<AddQuestion />} />
					<Route path="/update-quiz/:id" element={<UpdateQuestion />} />
					<Route path="/all-quizzes" element={<GetAllQuiz />} />
					<Route path="/quiz-result" element={<QuizResult />} />

        </Routes>
        
      </Router>
      </CookiesProvider>
  );
}

export default App;
