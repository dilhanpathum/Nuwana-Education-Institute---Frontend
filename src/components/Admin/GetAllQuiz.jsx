import React, { useEffect, useState } from "react"
import { deleteQuestion, getAllQuestions } from "../Admin/QuizService"

import { Link } from "react-router-dom"
import {FaPlus} from "react-icons/fa"

const GetAllQuiz = () => {
	const [questions, setQuestions] = useState([
		{ id: "", question: "", correctAnswers: "", choices: [] }
	])
	const [isLoading, setIsLoading] = useState(true)
	const [isQuestionDeleted, setIsQuestionDeleted] = useState(false)
	const [deleteSuccess, setDeleteSuccess] = useState("")

	useEffect(() => {
		fetchQuestions()
	}, [])

	const fetchQuestions = async () => {
		try {
			const data = await getAllQuestions()
			setQuestions(data)
			setIsLoading(false)
		} catch (error) {
			console.error(error)
		}
	}

	const handleDeleteQuestion = async (id) => {
		try {
			await deleteQuestion(id)
			setQuestions(questions.filter((question) => question.id !== id))
			setIsQuestionDeleted(true)
			setDeleteSuccess("Question deleted successfully.")
		} catch (error) {
			console.error(error)
		}
		setTimeout(() => {
			setDeleteSuccess("")
		}, 4000)
	}

	if (isLoading) {
		return <p>Loading...</p>
	}

	return (
		<section className="container">
			<div className="mt-5 row">
				<div className="mb-2 col-md-6 md-mb-0" style={{ color: "GrayText" }}>
					<h4>All Quiz Questions</h4>
				</div>
				<div >
					<Link to={"/AddQuestion"} className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 rounded-lg shadow-md hover:bg-blue-500 focus:ring-blue-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
						 Add Question
					</Link>
				</div>

				
				
			</div>
			<hr />
			{isQuestionDeleted && <div className="alert alert-success">{deleteSuccess}</div>}
			{questions.map((question, index) => (
				<div key={question.id}>
					<pre>
						<h4 style={{ color: "GrayText" }}>{`${index + 1}. ${question.question}`}</h4>
					</pre>
					<ul>
						{question.choices.map((choice, index) => (
							<li key={index}>{choice}</li>
						))}
					</ul>
					<p className="text-success">Correct Answer: {question.correctAnswers}</p>
					<div className="mb-4 btn-group">
						<Link to={`/update-quiz/${question.id}`}>
							<button className="mr-2 btn btn-sm btn-outline-warning">Edit Question</button>
						</Link>
						<button
							className="btn btn-sm btn-outline-danger"
							onClick={() => handleDeleteQuestion(question.id)}>
							Delete Question
						</button>
					</div>
				</div>
			))}
		</section>
	)
}

export default GetAllQuiz
