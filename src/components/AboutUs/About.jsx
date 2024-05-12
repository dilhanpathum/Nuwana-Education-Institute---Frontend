import React from 'react'
import Logo from "../../assets/logo/logo2.png"

import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'
import img1 from '../AboutUs/img/team-1.jpg'
import img2 from '../AboutUs/img/team-2.jpg'
import img3 from '../AboutUs/img/team-3.jpg'
import img4 from '../AboutUs/img/team-4.jpg'
import background from'../AboutUs/img/background.jpg'

import '../AboutUs/styles/style.css'

export default function About() {
    return (
    <>
  <Header/>

   {/*About Start */}
     <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 pt-4" style={{minHeight: '400px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src={background} style={{objectFit: 'cover'}} alt=""/>
                        <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5" style={{background: 'rgba(0, 0, 0, .08)'}}>
                            <h1 class="display-4 text-gray mb-0">3 <span className="fs-4">Years</span></h1>
                            <h4 className="text-white">Experience</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h6 className="text-primary text-uppercase"> About Us </h6>
                    <h1 className="mb-4"><span class="text-primary">Nuwana</span> Is The Best Place For Your Education Excellence </h1>
                    <p className="mb-4">At Nuwana educattional Instiute , we are dedicated to providing an exceptional educational experience for our students. With a focus on excellence and innovation, we strive to nurture the intellectual, emotional, and social growth of every individual who walks through our doors.</p>
                    <div className="row g-4 mb-3 pb-3">
                        <div >
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width:' 45px',height: '45px'}}>
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
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width:' 45px',height: '45px'}}>
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
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{width: '45px', height: '45px'}}>
                                    <span className="fw-bold text-secondary">03</span>
                                </div>
                                <div className="ps-3">
                                    <h6>A Tradition of Excellence</h6>
                                    <span> We are committed to nurturing the next generation of leaders and innovators who will make a positive impact on the world.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="" className="btn btn-primary py-3 px-5">Read More<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </div>
        </div>
    </div>
    {/*} About End */}

    {/*Fact Start */}
      <div className="container-fluid fact bg-dark my-5 py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-md-6 col-lg-3 text-center" >
                    <i className="fa fa-check fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" >3</h2>
                    <p className="text-white mb-0">Years Experience</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center" >
                    <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" >4</h2>
                    <p className="text-white mb-0">Expert Teachers</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center " >
                    <i className="fa fa-users fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2">100
                    </h2>
                    <p className="text-white mb-0">Students</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center " >
                    <i className="fa fa-users fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" >25</h2>
                    <p className="text-white mb-0">Excellence</p>
                </div>
            </div>
        </div>
    </div>
    {/*Fact End */}

    {/*} Team Start */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center " >
                <h6 className="text-primary text-uppercase">Our Staff</h6>
                <h1 className="mb-5">Our Expert Teachers</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 " data-wow-delay="0.1s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src={img1} alt=""/>
                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a className="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                <a className="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="fw-bold mb-0">Mr.Udara</h5>
                            <small>Mathematics</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src={img2} alt=""/>
                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a className="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="fw-bold mb-0">Mr.Sunil</h5>
                            <small>English</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src={img3} alt=""/>
                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a className="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="fw-bold mb-0">Mr.Nimal</h5>
                            <small>Sinhala</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src={img4} alt=""/>
                            <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                <a className="btn btn-square mx-1" href="https://www.facebook.com/kethsiriautocare?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="fw-bold mb-0">Mr.Padamasiri</h5>
                            <small>Science</small>
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


