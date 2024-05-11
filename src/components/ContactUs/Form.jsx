import React, { useState,useEffect } from 'react';

import Logo from "../../assets/logo/logo2.png"
import "../../styles/login.css"
import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'


export default function Form() {
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
};
    return (
      <>
<Header/>

   {/*Contact Start */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center" >
                <h6 className="text-primary text-uppercase"> Contact Us </h6>
                <h1 className="mb-5">Contact For Any Query</h1>
            </div>
            <div className="row g-4">
                <div className="col-12">
                    <div className="row gy-4">
                        <div class="col-md-4">
                            <div className="bg-gray-300 d-flex flex-column justify-content-center p-4">
                                <h5 className="text-uppercase">Email</h5>
                                <p className="m-0"><i className="fa fa-envelope text-primary me-2" aria-hidden="true"></i> nuwana@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-gray-300 d-flex flex-column justify-content-center p-4">
                                <h5 className="text-uppercase"> Call</h5>
                                <p className="m-0"><i className= "fa fa-phone text-primary me-2" aria-hidden="true"></i> +94 715431995</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-gray-300 d-flex flex-column justify-content-center p-4">
                                <h5 className="text-uppercase"> Open Hours </h5>
                                <p className="m-0"><i className="fa fa-clock text-primary me-2" aria-hidden="true"  ></i> Sunday-Friday:
08:00 AM - 09.00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 " >
                <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7929.406736882674!2d80.53506968471344!3d5.954258186169264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25eb06ba6d593%3A0x1ad4e6c30e33240c!2sYatiyana%2C%20Matara%2C%20Sri%20Lanka!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder="0" style={{ minHeight: '350px', border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>

                
                
                </div>
                <div className="col-md-6">
                    <div>
                        <form id="contactForm" action="" method="">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" name="name" id="name" placeholder="Your Name"  value={formData.name} onChange={handleChange} required />
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" rvalue={formData.email} onChange={handleChange} required />
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" name="message" id="message" placeholder="Leave a message here" style={{ height: '100px' }} value={formData.message} onChange={handleChange} required></textarea>
                                                <label htmlFor="message">Message</label>
                                       
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

                {/*Contact End */}


 <Footer/>

 </>
  )
}