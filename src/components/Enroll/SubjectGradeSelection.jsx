import React, { useState,useEffect } from 'react';
import '../../styles/SubjectGradeSelection.css';
import Footer from '../Footer/Footer';
import Header from '../Navbar/Header';
import CheckToken from '../Api/CheckToken';
import { useCookies } from "react-cookie";
import APIService from '../Api/APIService';
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SubjectGradeSelection = ({ onSubmit }) => {
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender,setGender] = useState("");
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  let navigate = useNavigate();

  useEffect(() => {
    if (token["mytoken"] != null) {
      const emailToken = (jwtDecode(token["mytoken"]).sub);


      APIService.GetUserDetails(token["mytoken"],{email: emailToken})
        .then((resp) => {
          console.log(resp)
          setEmail(resp.email)
          setFirstName(resp.firstname)
          setLastName(resp.lastname)
          setGender(resp.gender)

        })
        .catch((error) => 

          removeToken(["mytoken"])
      );
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      firstname: firstName,
      lastname: lastName,
      gender: gender,
      status: 'pending',
      subject: subject,
      grade: grade
    };
    APIService.Enroll(token["mytoken"], formData)
      .then((response) => {
        console.log(response);
        toast.success("Course Registration Pending!")
        navigate("/home")
      })
      .catch((error) => {
        console.log(formData)
        console.error("Enrollment failed", error);
      });
  };

  return (
    <>
    <Header/>

    <div className="container-form">
      <form className="subject-grade-form" onSubmit={handleSubmit}>
      <h2 className="form-heading">Enroll Class</h2>
        <label htmlFor="subject">Subject:
        </label>
        <input type="email"  hidden name="email" value={email} />
        <input type="hidden" name="firstname" value={firstName} />
        <input type="hidden" name="lastname" value={lastName} />
        <input type="hidden" name="gender" value={gender} />
        <input type="hidden" name="status" value="pending" />

        <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
          
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
