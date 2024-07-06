import React from 'react'
import Logo from "../../assets/logo/logo2.png"

import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'
import teacher1 from '../../assets/teachers/t1.jpg'
import teacher2 from '../../assets/teachers/t2.jpg'
import teacher3 from '../../assets/teachers/t3.jpg'
import background from'../AboutUs/img/background.jpg'

import '../AboutUs/styles/style.css'

export default function About() {
    return (
    <>
  <Header/>

   {/*About Start */}
     <div className="py-5 container-xxl">
        <div className="container">
            <div className="row g-5">
                <div className="pt-4 col-lg-6" style={{minHeight: '400px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src={background} style={{objectFit: 'cover'}} alt=""/>
                        <div className="top-0 px-5 py-4 position-absolute end-0 mt-n4 me-n4" style={{background: 'rgba(0, 0, 0, .08)'}}>
                            <h1 class="display-4 text-gray mb-0">3 <span className="fs-4">Years</span></h1>
                            <h4 className="text-white">Experience</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h6 className="text-primary text-uppercase"> About Us </h6>
                    <h1 className="mb-4"><span class="text-primary">Nuwana</span> Is The Best Place For Your Education Excellence </h1>
                    <p className="mb-4">At Nuwana educattional Instiute , we are dedicated to providing an exceptional educational experience for our students. With a focus on excellence and innovation, we strive to nurture the intellectual, emotional, and social growth of every individual who walks through our doors.</p>
                    <div className="pb-3 mb-3 row g-4">
                        <div >
                            <div className="d-flex">
                                <div className="flex-shrink-0 mt-1 bg-light d-flex align-items-center justify-content-center" style={{width:' 45px',height: '45px'}}>
                                    <span className="fw-bold text-secondary">01</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Our Commitment to Excellence</h6>
                                    <span>We pride ourselves on our commitment to academic excellence and holistic development.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 " >
                            <div className="d-flex">
                                <div className="flex-shrink-0 mt-1 bg-light d-flex align-items-center justify-content-center" style={{width:' 45px',height: '45px'}}>
                                    <span className="fw-bold text-secondary">02</span>
                                </div>
                                <div className="ps-3">
                                    <h6>A Diverse Learning Community</h6>
                                    <span>We celebrate diversity and believe in creating an inclusive learning environment where students from all backgrounds can thrive..</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 " >
                            <div className="d-flex">
                                <div className="flex-shrink-0 mt-1 bg-light d-flex align-items-center justify-content-center" style={{width: '45px', height: '45px'}}>
                                    <span className="fw-bold text-secondary">03</span>
                                </div>
                                <div className="ps-3">
                                    <h6>A Tradition of Excellence</h6>
                                    <span> We are committed to nurturing the next generation of leaders and innovators who will make a positive impact on the world.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="" className="px-5 py-3 btn btn-primary">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </div>
        </div>
    </div>
    {/*} About End */}

    {/*Fact Start */}
      <div className="py-5 my-5 container-fluid fact bg-dark">
        <div className="container">
            <div className="row g-4">
                <div className="text-center col-md-6 col-lg-3" >
                    <i className="mb-3 text-white fa fa-check fa-2x"></i>
                    <h2 className="mb-2 text-white" >3</h2>
                    <p className="mb-0 text-white">Years Experience</p>
                </div>
                <div className="text-center col-md-6 col-lg-3" >
                    <i className="mb-3 text-white fa fa-users-cog fa-2x"></i>
                    <h2 className="mb-2 text-white" >4</h2>
                    <p className="mb-0 text-white">Expert Teachers</p>
                </div>
                <div className="text-center col-md-6 col-lg-3 " >
                    <i className="mb-3 text-white fa fa-users fa-2x"></i>
                    <h2 className="mb-2 text-white">100
                    </h2>
                    <p className="mb-0 text-white">Students</p>
                </div>
                <div className="text-center col-md-6 col-lg-3 " >
                    <i className="mb-3 text-white fa fa-users fa-2x"></i>
                    <h2 className="mb-2 text-white" >25</h2>
                    <p className="mb-0 text-white">Excellence</p>
                </div>
            </div>
        </div>
    </div>
    {/*Fact End */}

    {/*} Team Start */}
    <div className="py-5 container-xxl">
        <div className="container">
            <div className="text-center " >
                <h6 className="text-primary text-uppercase">Our Staff</h6>
                <h1 className="mb-5">Our Expert Teachers</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 " data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src={teacher1} alt=""/>
                            <div className="top-0 team-overlay position-absolute start-0 w-100 h-100">
                                <a className="mx-1 btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                <a className="mx-1 btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                <a className="mx-1 btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="p-4 text-center bg-light">
                            <h5 className="mb-0 fw-bold">Mr. Nuwan Jayasiri</h5>
                            <small>Mathematics</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src={teacher2} alt=""/>
                            <div className="top-0 team-overlay position-absolute start-0 w-100 h-100">
                                <a className="mx-1 btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                <a className="mx-1 btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="mx-1 btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="p-4 text-center bg-light">
                            <h5 className="mb-0 fw-bold">Mr. Kapila Jayantha</h5>
                            <small>Science</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <div className="overflow-hidden position-relative">
                            <img className="img-fluid" src={teacher3} alt=""/>
                            <div className="top-0 team-overlay position-absolute start-0 w-100 h-100">
                                <a className="mx-1 btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                <a className="mx-1 btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="mx-1 btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="p-4 text-center bg-light">
                            <h5 className="mb-0 fw-bold">Mrs. Niluka Dilrukshi</h5>
                            <small>English</small>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    {/* Team End*/}

  <Footer/>

</>
)
}


