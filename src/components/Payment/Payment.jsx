import React, { useState, useEffect } from "react";
import "../../styles/SubjectGradeSelection.css";
import APIService from "../Api/APIService";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";


const Payment = () => {
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [classFees, setClassFees] = useState("");
  let navigate = useNavigate();

  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  const [merchant_id, setMerchant_id] = useState();
  const [amount, setAmount] = useState();
  const [hash, setHash] = useState();
  const [order_id, setOrder_id] = useState();
  const [currency, setCurrency] = useState();

  
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };


  const query = useQuery();

  useEffect(() => {
    if (query.get("pay") === "1") {
      toast.success("Payment completed successfully!");
    } else if (query.get("pay") === "2") {
      toast.error("Payment was dismissed. Please try again.");
    }
  }, [query]);
  useEffect(() => {
    if (token["mytoken"] != null) {
      const emailToken = jwtDecode(token["mytoken"]).sub;

      APIService.GetUserDetails(token["mytoken"], { email: emailToken })
        .then((resp) => {
          console.log(resp);
          setEmail(resp.email);
          setFirstName(resp.firstname);
          setLastName(resp.lastname);
          setGender(resp.gender);
        })
        .catch((error) => removeToken(["mytoken"]));
    } else {
      navigate("/signin");
    }
  }, [token, navigate, removeToken]);

  useEffect(() => {
    APIService.payment(token["mytoken"])
      .then((resp) => {
        console.log(resp);
        setAmount(resp.amounts);
        setMerchant_id(resp.merahantID);
        setHash(resp.hash);
        setOrder_id(resp.orderID);
        setCurrency(resp.currency);
      })
      .catch((error) => removeToken(["mytoken"]));
  }, [token, removeToken]);

  useEffect(() => {
    if (grade === "10") {
      setClassFees("1000");
    } else if (grade === "11") {
      setClassFees("1500");
    } else {
      setClassFees("");
    }
  }, [grade]);

  const payment_object = {
    sandbox: true,
    preapprove: true,
    merchant_id: merchant_id, // Replace your Merchant ID
    return_url: "http://localhost:3000/", // Important
    cancel_url: "http://localhost:3000/", // Important
    notify_url: "http://localhost:3000/",
    order_id: order_id,
    items: "Class Fee",
    amount: amount,
    currency: currency,
    hash: hash,
    first_name: firstName,
    last_name: lastName,
    email: email,
    phone: "0771234567",
    address: "No.1, Galle Road",
    city: "Colombo",
    country: "Sri Lanka",
    delivery_address: "No. 46, Galle road, Kalutara South",
    delivery_city: "Kalutara",
    delivery_country: "Sri Lanka",
    custom_1: "",
    custom_2: "",
  };

  const handlePayment = () => {
    window.payhere.startPayment(payment_object);
  };

  window.payhere.onCompleted = function onCompleted(orderId) {
    console.log("Payment completed. OrderID:" + orderId);
    window.location.href = "http://localhost:3000/Pay?pay=1"
    //Note: validate the payment and show success or failure page to the customer
  };

  // Called when user closes the payment without completing
  window.payhere.onDismissed = function onDismissed() {
    window.location.href = "http://localhost:3000/Pay?pay=2"
    //Note: Prompt user to pay again or show an error page
    console.log("Payment dismissed");
  };

  // Called when error happens when initializing payment such as invalid parameters
  window.payhere.onError = function onError(error) {
    // Note: show an error page
    console.log("Error:" + error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      firstname: firstName,
      lastname: lastName,
      gender: gender,
      status: "pending",
      subject: subject,
      grade: grade,
    };
    APIService.Enroll(token["mytoken"], formData)
      .then((response) => {
        console.log(response);
        toast.success("Course Registration Pending!");
        navigate("/home");
      })
      .catch((error) => {
        console.log(formData);
        console.error("Enrollment failed", error);
      });
  };

  const fullName = `${firstName} ${lastName}`;

  return (
    <>
      <Header />
      <section className="bg-gray-50 background dark:bg-gray-900 ">
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
          <div className="px-4 py-8 sm:px-10">
            <div className="mt-6">
              <div className="w-full space-y-6">
                <div className="w-full">
                  <div className="relative">
                    <h2>Class Fee</h2>
                    <label className="text-gray-700" htmlFor="student-name">
                      Student Name
                    </label>
                    <input
                      type="text"
                      id="student-name"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      value={fullName}
                      readOnly
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <input type="email" hidden name="email" value={email} />
                <input type="hidden" name="firstname" value={firstName} />
                <input type="hidden" name="lastname" value={lastName} />
                <input type="hidden" name="gender" value={gender} />

                <label className="text-gray-700" htmlFor="subject">
                  Subject
                  <select
                    id="subject"
                    className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Sinhala">Sinhala</option>
                  </select>
                </label>
                <label className="text-gray-700" htmlFor="month">
                  Month
                  <select
                    id="month"
                    className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="month"
                  >
                    <option value="">Select Month</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </label>

                <label className="text-gray-700" htmlFor="grade">
                  Grade
                  <select
                    id="grade"
                    className="block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    name="grade"
                    onChange={(e) => setGrade(e.target.value)}
                  >
                    <option value="">Select Grade</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                  </select>
                </label>
                <div className="w-full">
                  <div className="relative">
                    <label className="text-gray-700" htmlFor="class-fees">
                      Your Class Fees (Rs:)
                    </label>
                    <input
                      type="text"
                      readOnly
                      id="class-fees"
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-transparent border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      value={classFees}
                      placeholder="Your Class Fees"
                    />
                  </div>
                </div>
                <div>
                  <span className="block w-full rounded-md shadow-sm">
                    <button
                      type="button"
                      onClick={handlePayment}
                      className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    >
                      Pay Now
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Payment;