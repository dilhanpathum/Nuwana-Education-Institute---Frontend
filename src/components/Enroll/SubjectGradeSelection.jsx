import React, { useState } from 'react';
import '../../styles/SubjectGradeSelection.css';
import Footer from '../Footer/Footer';
import Header from '../Navbar/Header';
import CheckToken from '../Api/CheckToken';

const SubjectGradeSelection = ({ onSubmit }) => {
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ subject, grade });
  };

  return (
    <>
    <Header/>
    <CheckToken/>
    <div className="container-form">
      <form className="subject-grade-form" onSubmit={handleSubmit}>
      <h2 className="form-heading">Enroll Class</h2>
        <label htmlFor="subject">Subject:
        </label>
        <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          <option value="maths">Maths</option>
          <option value="science">Science</option>
          <option value="english">English</option>
          
        </select>
        <label htmlFor="grade">Grade:</label>
        <select id="grade" value={grade} onChange={(e) => setGrade(e.target.value)}>
          <option value="">Select Grade</option>
          <option value="10">10</option>
          <option value="11">11</option>

          
        </select>
        
        <button type="submit" style={{ backgroundColor: '#5A93E0' }}>Submit</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default SubjectGradeSelection;
