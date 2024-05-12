import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/quiz.css";

const Admin = () => {
	return (
		<section className="container_adminpage">
			<h2 className="mt-5">Welcome to admin page</h2>
			<hr />
			<div className="button-container admin">
				<Link to={"/create-quiz"} className="btn btn-primary">
					Create a New Quiz
				</Link>
				<Link to={"/all-quizzes"} className="btn btn-primary">
					Manage existing Quizzes
				</Link>
			</div>
		</section>
	)
}

export default Admin
