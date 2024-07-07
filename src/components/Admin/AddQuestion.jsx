import React, { useEffect, useState } from "react"
import "../../styles/addQuestion.css"
import { Link } from "react-router-dom"
import { createQuestion, getSubjects } from "../Admin/QuizService"
import { useCookies } from "react-cookie";

const AddQuestion = () => {
	const [question, setQuestionText] = useState("")
	const [questionType, setQuestionType] = useState("single")
	const [choices, setChoices] = useState([""])
	const [correctAnswers, setCorrectAnswers] = useState([""])
	const [subject, setSubject] = useState("")
	const [newSubject, setNewSubject] = useState("")
	const [subjectOptions, setSubjectOptions] = useState([""])
	const [token, setToken, removeToken] = useCookies(["mytoken"]);
	useEffect(() => {
		fetchSubjects()
	}, [])

	const fetchSubjects = async () => {
		try {
			const subjectsData = await getSubjects(token["mytoken"])
			setSubjectOptions(subjectsData)
		} catch (error) {
			console.error(error)
		}
	}

	const handleAddChoice = () => {
		const lastChoice = choices[choices.length - 1]
		const lastChoiceLetter = lastChoice ? lastChoice.charAt(0) : "A"
		const newChoiceLetter = String.fromCharCode(lastChoiceLetter.charCodeAt(0) + 1)
		const newChoice = `${newChoiceLetter}.`
		setChoices([...choices, newChoice])
	}

	const handleRemoveChoice = (index) => {
		setChoices(choices.filter((choice, i) => i !== index))
	}

	const handleChoiceChange = (index, value) => {
		setChoices(choices.map((choice, i) => (i === index ? value : choice)))
	}

	const handleCorrectAnswerChange = (index, value) => {
		setCorrectAnswers(correctAnswers.map((answer, i) => (i === index ? value : answer)))
	}

	const handleAddCorrectAnswer = () => {
		setCorrectAnswers([...correctAnswers, ""])
	}

	const handleRemoveCorrectAnswer = (index) => {
		setCorrectAnswers(correctAnswers.filter((answer, i) => i !== index))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(correctAnswers)
		try {
			const result = {
				question,
				questionType,
				choices,
				correctAnswers: correctAnswers,
				// correctAnswers: correctAnswers.map((answer) => {
				// 	const choiceLetter = answer.charAt(0).toUpperCase();
				// 	const choiceIndex = choiceLetter.charCodeAt(0) - 65; 
				// 	return choiceIndex >= 0 && choiceIndex < choices.length ? choiceLetter : null;
				//   }),

				subject
			}
			console.log(result)
			await createQuestion(result,token["mytoken"])

			setQuestionText("")
			setQuestionType("single")
			setChoices([""])
			setCorrectAnswers([""])
			setSubject("")
		} catch (error) {
			console.error(error)
		}
	}

	const handleAddSubject = () => {
		if (newSubject.trim() !== "") {
			setSubject(newSubject.trim())
			setSubjectOptions([...subjectOptions, newSubject.trim()])
			setNewSubject("")
		}
	}

	return (
		<div className="container">

<div className="flex justify-end">
				
				<Link to={"/admin/GetAllQuiz"} className="right-0 px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-500 rounded-lg shadow-md hover:bg-blue-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2">
					Manage existing Quizzes
				</Link>
			</div>

			<div className="row justify-content-center">
				<div className="mt-5 col-md-8">
					<div className="card">
						<div className="card-header">
							<h5 className="card-title">Add New Questions</h5>
						</div>
						<div className="card-body">
							<form onSubmit={handleSubmit} className="p-2">
								<div className="mb-3">
									<label htmlFor="subject" className="form-label text-info">
										Select a Subject
									</label>
									<select
										id="subject"
										value={subject}
										onChange={(e) => setSubject(e.target.value)}
										className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
										<option value="">Select subject</option>
										<option value={"New"}>Add New</option>
										
											<option selected key="1" value="Maths">
												Maths
											</option>
										
									</select>
								</div>

								{subject === "New" && (
									<div className="mb-3">
										<label htmlFor="new-subject" className="form-label text-info">
											Add New Subject
										</label>
										<input
											type="text"
											id="new-subject"
											value={newSubject}
											onChange={(event) => setNewSubject(event.target.value)}
											className="form-control"
										/>
										<button
											type="button"
											onClick={handleAddSubject}
											className="mt-2 btn1 btn-outline-primary">
											Add Subject
										</button>
									</div>
								)}
								<div className="mb-3">
									<label htmlFor="question-text" className="form-label text-info">
										Question
									</label>
									<textarea
										className="flex-1 w-full px-4 py-2 text-base text-black placeholder-gray-400 bg-white border border-gray-400 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										rows={4}
										value={question}
										onChange={(e) => setQuestionText(e.target.value)}></textarea>
								</div>
								<div className="mb-3">
									<label htmlFor="question-type" className="form-label text-info">
										Question type
									</label>
									<select
										id="question-type"
										value={questionType}
										onChange={(event) => setQuestionType(event.target.value)}
										className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
										<option className="text-blue-800" value="single">Single Answer</option>
										<option value="multiple">Multiple Answer</option>
									</select>
								</div>
								<div className="mb-3">
									<label htmlFor="choices" className="form-label text-primary">
										Choices
									</label>
									{choices.map((choice, index) => (
										<div key={index} className="mb-3 input-group">
											<input
												type="text"
												value={choice}
												onChange={(e) => handleChoiceChange(index, e.target.value)}
												className="rounded-lg form-control"
											/>
											
											<button
												type="button"
												onClick={() => handleRemoveChoice(index)}
												className="px-6 py-2 text-red-600 transition duration-200 ease-in border-2 border-red-600 rounded-lg hover:bg-red-600 hover:text-white focus:outline-none">
												Remove
											</button>
										</div>
									))}
									<button
										type="button"
										onClick={handleAddChoice}
										className="px-6 py-2 text-blue-500 transition duration-200 ease-in border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white focus:outline-none">
										Add Choice
									</button>
								</div>
								{questionType === "single" && (
									<div className="mb-3">
										<label htmlFor="answer" className="form-label text-success">
											Correct Answer
										</label>
										<input
											type="text"
											className="flex-1 w-full px-4 py-2 text-base text-black placeholder-gray-400 bg-white border border-gray-400 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											id="answer"
											value={correctAnswers[0]}
											onChange={(e) => handleCorrectAnswerChange(0, e.target.value)}
										/>
									</div>
								)}
								{questionType === "multiple" && (
									<div className="mb-3">
										<label htmlFor="answer" className="form-label text-success">
											Correct Answer(s)
										</label>
										{correctAnswers.map((answer, index) => (
											<div key={index} className="mb-2 d-flex">
												<input
													type="text"
													className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-400 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
													value={answer}
													onChange={(e) => handleCorrectAnswerChange(index, e.target.value)}
												/>
												{index > 0 && (
													<button
														type="button"
														className="px-6 py-2 text-red-600 transition duration-200 ease-in border-2 border-red-600 rounded-lg hover:bg-red-600 hover:text-white focus:outline-none"
														onClick={() => handleRemoveCorrectAnswer(index)}>
														Remove
													</button>
												)}
											</div>
										))}
										<button
											type="button"
											className="px-6 py-2 text-blue-500 transition duration-200 ease-in border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white focus:outline-none"
											onClick={handleAddCorrectAnswer}>
											Add Correct Answer
										</button>
									</div>
								)}

								{!correctAnswers.length && <p>Please enter at least one correct answer.</p>}

								<div className="btn-group">
									<button type="submit" className="px-6 py-2 text-green-500 transition duration-200 ease-in border-2 border-green-500 hover:bg-green-500 hover:text-white focus:outline-none">
										Save Question
									</button>
									<Link to={"/admin/GetAllQuiz"} >
										<button className="px-6 py-2 text-blue-500 transition duration-200 ease-in border-2 border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none">Back to existing questions</button>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddQuestion
