import React from 'react'
import '../../styles/home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../ChooseSection/ChooseSection';
import StartCoursesImg from '../../assets/home/b4.jpg';

import { Card } from 'react-bootstrap';

import Header from '../Navbar/Header';
import Footer from '../Footer/Footer';
import teacher1 from '../../assets/teachers/t1.jpg'
import teacher2 from '../../assets/teachers/t2.jpg'
import teacher3 from '../../assets/teachers/t3.jpg'
const blogs = [
    {
        id: 1,
        img: [teacher1],
        title: 'Mathematics Teacher: Mr. Nuwan Jayasiri',
        description: 'Meet Mr. Nuwan jayasiri, our expert Math teacher for Grade 10 and 11. With over 15 years of teaching experience, Mr. Smith is dedicated to making math understandable and enjoyable. His innovative teaching methods and personalized approach help students grasp complex concepts and excel in their studies.'
    },
    {
        id: 2,
        img: [teacher2],
        title: 'Science Teacher: Mr. Kapila Jayantha',
        description: "Introducing Mr. Kapila Jayantha, our passionate Science teacher for Grade 10 and 11. With a Master's degree in Science Education and a decade of teaching experience, Ms. Davis brings the subject to life through hands-on experiments and engaging lessons, inspiring students to explore the wonders of science. "
    },
    {
        id: 3,
        img: [teacher3],
        title: 'English Teacher: Mrs. Niluka Dilrukshi',
        description: 'Welcome Mrs. Niluka Dilrukshi, our dedicated English teacher for Grade 10 and 11. With a background in English Literature and 12 years of teaching experience, Mrs. Johnson fosters a love for language and literature. Her dynamic lessons and supportive approach help students develop strong reading and writing skills.'
    }
];
function Home() {
  return (
    <>
    <div>
        <Header/>
      <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>Nuwana Education Institute</h1>
                <p>Your gateway to academic excellence and personal growth. Our dedicated team of experienced educators is committed to providing personalized support and innovative teaching methods. We create a nurturing and dynamic environment that inspires students to achieve their full potential and develop a lifelong love for learning.

</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/enroll">
                        <button type='button' className='mx-0 my-2 btn btn-danger btn-lg mx-sm-2 my-sm-0'>Enroll</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='mx-0 my-2 btn btn-outline-light btn-lg mx-sm-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>2024 start Classes</h2>
                        <p>Join our classes at Nuwana Education Institute! Expert teachers, innovative methods, and a supportive environment ensure academic success and personal growth of students.</p>
                        <Link to="/courses">
                            <button type='button' className='mx-0 my-2 btn btn-danger btn-lg mx-sm-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='mt-5 col-lg-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>



        <div className='py-5 blog-section text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='mb-5 text-center text-capitalize'>Our teachers</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='shadow h-100 scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text className='text-black'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home
