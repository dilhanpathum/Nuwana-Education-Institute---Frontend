import React, { useEffect, useState } from "react"
import "../../styles/addQuestion.css"
import { Link } from "react-router-dom"
import { createQuestion, getSubjects } from "../../components/Test/QuizService"


const AddQuestion = () => {
	const [question, setQuestionText] = useState("")
	const [questionType, setQuestionType] = useState("single")
	const [choices, setChoices] = useState([""])
	const [correctAnswers, setCorrectAnswers] = useState([""])
	const [subject, setSubject] = useState("")
	const [newSubject, setNewSubject] = useState("")
	const [subjectOptions, setSubjectOptions] = useState([""])

	useEffect(() => {
		fetchSubjects()
	}, [])

	const fetchSubjects = async () => {
		try {
			const subjectsData = await getSubjects()
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
		try {
			const result = {
				question,
				questionType,
				choices,
				correctAnswers: correctAnswers.map((answer) => {
					const choiceLetter = answer.charAt(0).toUpperCase()
					const choiceIndex = choiceLetter.charCodeAt(0) - 65
					return choiceIndex >= 0 && choiceIndex < choices.length ? choiceLetter : null
				}),

				subject
			}

			await createQuestion(result)

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
				
				<Link to={"/GetAllQuiz"} className=" right-0 py-2 px-4 bg-blue-500 hover:bg-blue-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
					Manage existing Quizzes
				</Link>
			</div>

			<div className="row justify-content-center">
				<div className="col-md-8  mt-5">
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
										className="rounded-lg border-gray-400 flex-1 appearance-none border w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
										<option value="">Select subject</option>
										<option value={"New"}>Add New</option>
										
											<option key="1" value="Maths">
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
											className="btn1 btn-outline-primary mt-2">
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
										className="rounded-lg border-gray-400 flex-1 appearance-none border w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
										<option className="text-blue-800" value="single">Single Answer</option>
										<option value="multiple">Multiple Answer</option>
									</select>
								</div>
								<div className="mb-3">
									<label htmlFor="choices" className="form-label text-primary">
										Choices
									</label>
									{choices.map((choice, index) => (
										<div key={index} className="input-group mb-3">
											<input
												type="text"
												value={choice}
												onChange={(e) => handleChoiceChange(index, e.target.value)}
												className="rounded-lg form-control"
											/>
											
											<button
												type="button"
												onClick={() => handleRemoveChoice(index)}
												className="px-6 py-2  transition ease-in duration-200   hover:bg-red-600  hover:text-white border-2 border-red-600 focus:outline-none text-red-600 rounded-lg">
												Remove
											</button>
										</div>
									))}
									<button
										type="button"
										onClick={handleAddChoice}
										className="px-6 py-2  transition ease-in duration-200  rounded-full hover:bg-blue-500 hover:text-white border-2 border-blue-500 focus:outline-none text-blue-500">
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
											className="rounded-lg border-gray-400 flex-1 appearance-none border w-full py-2 px-4 bg-white text-black placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
											<div key={index} className="d-flex mb-2">
												<input
													type="text"
													className="rounded-lg border-gray-400 flex-1 appearance-none border w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
													value={answer}
													onChange={(e) => handleCorrectAnswerChange(index, e.target.value)}
												/>
												{index > 0 && (
													<button
														type="button"
														className="px-6 py-2  transition ease-in duration-200   hover:bg-red-600  hover:text-white border-2 border-red-600 focus:outline-none text-red-600 rounded-lg"
														onClick={() => handleRemoveCorrectAnswer(index)}>
														Remove
													</button>
												)}
											</div>
										))}
										<button
											type="button"
											className="px-6 py-2  transition ease-in duration-200  rounded-full hover:bg-blue-500 hover:text-white border-2 border-blue-500 focus:outline-none text-blue-500"
											onClick={handleAddCorrectAnswer}>
											Add Correct Answer
										</button>
									</div>
								)}

								{!correctAnswers.length && <p>Please enter at least one correct answer.</p>}

								<div className="btn-group">
									<button type="submit" className="px-6 py-2  transition ease-in duration-200   hover:bg-green-500 hover:text-white border-2 border-green-500 focus:outline-none text-green-500">
										Save Question
									</button>
									<Link to={"/all-quizzes"} >
										<button className="px-6 py-2  transition ease-in duration-200   hover:bg-blue-500 hover:text-white border-2 border-blue-500 focus:outline-none text-blue-500">Back to existing questions</button>
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
