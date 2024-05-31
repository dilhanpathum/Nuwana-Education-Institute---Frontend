import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo/logo2.png";
import "../../styles/login.css";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import { Datepicker } from "flowbite-react";
import { useCookies } from "react-cookie";
import APIService from "../Api/APIService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RadioButton } from "primereact/radiobutton";

function Registation() {
  const [response, setResponse] = useState([]);
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [fullname, setFullname] = useState("");
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  // handle submit
  const onSubmit = (data) => {
    console.log(data);
    APIService.RegisterUser(data)
      .then((resp) => setResponse(resp))
      .catch((error) => console.log(error));
  };

  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  // handle confirm password eye
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  const password = watch("password");
  const email = watch("email");
  return (
    <>
      <Header />
      <section class="bg-gray-50 background dark:bg-gray-900 ">
        <div class=" flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 ">
          <a
            href="#"
            class="flex items-center mb-4 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img class="w-60 h-41 mr-2" src={Logo} alt="logo" />
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 lg:mb-20 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h1>
              <form onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="hidden"
                    name="role"
                    id="role"
                    value="student"
                    {...register("role")}
                  />
                </div>

                <div>
                  <label
                    for="firstName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Miyuni"
                    {...register("firstname", {
                      required: "First Name is required",
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-sm text-red-500">
                      {errors.firstName.message}
                    </span>
                  )}
                  <br></br>
                </div>
                <div>
                  <label
                    for="lastName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tharushika"
                    {...register("lastname", {
                      required: "Last Name is required",
                    })}
                  />
                  {errors.lastName && (
                    <span className="text-sm text-red-500">
                      {errors.lastName.message}
                    </span>
                  )}
                  <br></br>
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    {...register("email", { required: "Email is required" })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  <br></br>
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={passwordEye === false ? "password" : "text"}
                    placeholder="Password"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                    {...register("password", {
                      required: "Password is required",

                      minLength: {
                        value: 8,
                        message: "Minimum Required length is 8",
                      },
                      maxLength: {
                        value: 20,
                        message: "Maximum Required length is 20",
                      },
                    })}
                  />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      {errors.password.message}
                    </span>
                  )}

                  {/* eye section */}

                  <br></br>
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type={confirmPasswordEye === false ? "password" : "text"}
                    placeholder="Confirm Password"
                    onPaste={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                    {...register("confirmPassword", {
                      required: "confirm password is required",
                      validate: (value) =>
                        value === password || "The passwords do not match",
                    })}
                  />
                  {errors.confirmPassword && (
                    <span className="text-sm text-red-500">
                      {errors.confirmPassword.message}
                    </span>
                  )}

                  <br></br>
                </div>

                <div>
                  <label
                    for="contact"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contact No
                  </label>
                  <input
                    type="contact"
                    name="contact"
                    id="contact"
                    onPaste={(e) => {
                      e.preventDefault();
                      return false;
                    }}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="07*********"
                    {...register("contact", {
                      required: "Contact number is required",
                    })}
                  />
                  {errors.contact && (
                    <span className="text-sm text-red-500">
                      {errors.contact.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-4 mt-2 mb-2 align-items-center">
                  <label
                    for="lastName"
                    class="block  text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gender
                  </label>
                  <div class="flex items-center gap-8">
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        class="w-5 h-5 text-blue-600"
                        {...register("gender")}
                      />
                      <span class="ml-2 text-gray-700">Male</span>
                    </label>
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        class="w-5 h-5 text-blue-600"
                        {...register("gender")}
                      />
                      <span class="ml-2 text-gray-700">Female</span>
                    </label>
                  </div>

                  <br></br>
                  <br></br>
                </div>
                <div>
                  <button
                    onClick={handleSubmit(onSubmit)}
                    type="submit"
                    class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Create an account
                  </button>
                </div>
                <div>
                  <p class="text-sm font-light mt-4 text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <a
                      href="#"
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Registation;
