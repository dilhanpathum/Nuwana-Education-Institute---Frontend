import React,{useEffect,useState} from "react"
import { useLocation} from "react-router-dom"
import "../../styles/quiz.css";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import APIService from "../Api/APIService";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

 const QuizResult = () => {
		const location = useLocation()
		const { quizQuestions, totalScores } = location.state
		const numQuestions = quizQuestions.length
		const percentage = Math.round((totalScores / numQuestions) * 100)
		const [token, setToken, removeToken] = useCookies(["mytoken"]);
		const [feedbackres,setFeedbackres] = useState("");
		const [firstName, setFirstName] = useState("");
  		const [lastName, setLastName] = useState("");
  		const [email, setEmail] = useState("");
		const [currentMonth, setCurrentMonth] = useState("");


		  useEffect(() => {
			const emailToken = jwtDecode(token["mytoken"]).sub;

			const fetchData = async () => {
				try {

					const userDetails = await APIService.GetUserDetails(token["mytoken"], { email: emailToken });
					setFirstName(userDetails.firstname);
					setLastName(userDetails.lastname);
					setEmail(userDetails.Email);
	
	
					const feedbackResponse = await APIService.feedback(token["mytoken"], percentage);
					setFeedbackres(feedbackResponse.feedback);
					
					


    				const today = new Date();

					const thisMonth = today.getMonth() + 1;


    				const monthName = today.toLocaleString('default', { month: 'long' });


					const data = {
						fullname: userDetails.firstname+" "+userDetails.lastname,
						subject: "Mathematics",
						email: emailToken,
						marks: percentage,
						grade: "10",
						month: monthName

					};
	

					await APIService.saveMarks(token["mytoken"], data)
					.then((resp) => {
						if (resp.message === "Unauthorized path") {
							toast("You already done this quiz!",
								{
								  icon: '⚠️',
								  
								}
							  );
							
						}
						else{
							toast.success('You successfully completed the quiz!')
						}
					})
					
				} catch (error) {
					toast("You already done this quiz!",
						{
						  icon: '⚠️',
						  
						}
					  );
					console.error("Error fetching data: ", error);
				}
			};
	
			fetchData();  // Call the async function
	
		}, [token]);
		const handleRetakeQuiz = () => {
			alert("Oops! this functionality was not implemented!!!")
		}

		return (
			<>
			<Header/>
			<section className="mt-5 container_result">
				<h3>Your Quiz Result Summary</h3>
				<hr />
				<h5 className="text-info">
					You answered {totalScores} out of {numQuestions} questions correctly.
				</h5>
				<p>Your total score is {percentage}%.</p>

				<button className="btn btn-primary btn-sm" onClick={handleRetakeQuiz}>
					Retake this quiz
				</button>
				<hr />
				<h5 className="text-info">
					Feedback
				</h5>
				<p>{feedbackres}</p>
			</section>
			<Footer/>
			</>
		)
 }

 export default QuizResult