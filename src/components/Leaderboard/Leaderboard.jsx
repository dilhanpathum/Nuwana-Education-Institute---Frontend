import React, { useState, useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";
import leaderboard1 from "../../assets/profile/leaderboard1.png";
import leaderboard2 from "../../assets/profile/leaderboard2.png";
import place1 from "../../assets/medal/1.png";
import place2 from "../../assets/medal/2.png";
import place3 from "../../assets/medal/3.png";
import place4 from "../../assets/medal/4.png";
import place5 from "../../assets/medal/5.png";
import cup from "../../assets/leaderboard/cup.png";
import "../../styles/leaderboard.css";
import { FaStar } from "react-icons/fa6";
import { GiPartyPopper } from "react-icons/gi";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import APIService from "../Api/APIService";
export default function Leaderboard() {
  const [monthname, setMonthname] = useState("");

  const [marks, setMarks] = useState([]);
  useEffect(() => {
    
    const today = new Date();

    const thisMonth = today.getMonth() + 1;


    setMonthname(today.toLocaleString('default', { month: 'long' }));
    APIService.getMarks()
      .then((resp) => {
        setMarks(resp);
        console.log(resp);
        console.log(marks);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Header />
      <div className="background">
        <MDBContainer className="py-5 ">
          <p class="text-5xl font-bold text-center  text-white">Leaderboard - {monthname}</p>
          <MDBRow>
            <MDBCol md="12" xl="8">
              <div class="container flex flex-col items-center justify-center w-full mx-auto">
                {marks.length > 0 && (
                  <>
                    <ul class="flex flex-col md:w-full">
                      <li class="flex flex-row mb-2 border-gray-400">
                        <div class="shadow border select-none cursor-pointer bg-yellow-400 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                          <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                            <a href="#" class="relative block">
                              <img
                                alt="profil"
                                src={leaderboard1}
                                class="mx-auto object-cover rounded-full border-white  h-10 w-10 "
                              />
                            </a>
                          </div>
                          <div class="flex-1 pl-1 md:mr-16">
                            <div class="text-lg text-white font-bold">
                              {marks[0].fullname}
                            </div>
                          </div>
                          <div class="text-lg text-white font-bold">
                            {marks[0].marks}
                          </div>
                          <div class=" items-center flex   justify-end h-12 w-12   ml-4">
                            <img
                              alt="profil"
                              src={place1}
                              class="mx-auto object-cover h-12 w-12"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul class="flex flex-col md:w-full">
                      <li class="flex flex-row mb-2 border-gray-400">
                        <div class="shadow border select-none cursor-pointer bg-gray-700 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                          <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                            <a href="#" class="relative block">
                              <img
                                alt="profil"
                                src={leaderboard1}
                                class="mx-auto object-cover rounded-full border-white  h-10 w-10 "
                              />
                            </a>
                          </div>
                          <div class="flex-1 pl-1 md:mr-16">
                            <div class="text-lg text-white font-bold">
                              {marks[1].fullname}
                            </div>
                          </div>
                          <div class="text-lg text-white font-bold">
                            {marks[1].marks}
                          </div>
                          <div class=" items-center flex   justify-end h-12 w-12   ml-4">
                            <img
                              alt="profil"
                              src={place2}
                              class="mx-auto object-cover h-12 w-12"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul class="flex flex-col md:w-full">
                      <li class="flex flex-row mb-2 border-gray-400">
                        <div class="shadow border select-none cursor-pointer bg-red-800 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                          <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                            <a href="#" class="relative block">
                              <img
                                alt="profil"
                                src={leaderboard1}
                                class="mx-auto object-cover rounded-full border-white  h-10 w-10 "
                              />
                            </a>
                          </div>
                          <div class="flex-1 pl-1 md:mr-16">
                            <div class="text-lg text-white font-bold">
                              {marks[2].fullname}
                            </div>
                          </div>
                          <div class="text-lg text-white font-bold">
                            {marks[2].marks}
                          </div>
                          <div class=" items-center flex   justify-end h-12 w-12   ml-4">
                            <img
                              alt="profil"
                              src={place3}
                              class="mx-auto object-cover h-12 w-12"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul class="flex flex-col md:w-full">
                      <li class="flex flex-row mb-2 border-gray-400">
                        <div class="shadow border select-none cursor-pointer bg-gray-200 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                          <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                            <a href="#" class="relative block">
                              <img
                                alt="profil"
                                src={leaderboard1}
                                class="mx-auto object-cover rounded-full border-white  h-10 w-10 "
                              />
                            </a>
                          </div>
                          <div class="flex-1 pl-1 md:mr-16">
                            <div class="text-lg text-black font-bold">
                              {marks[3].fullname}
                            </div>
                          </div>
                          <div class="text-lg text-black font-bold">
                            {marks[3].marks}
                          </div>
                          <div class=" items-center flex   justify-end h-12 w-12   ml-4">
                            <img
                              alt="profil"
                              src={place4}
                              class="mx-auto object-cover h-12 w-12"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>

                    <ul class="flex flex-col md:w-full">
                      <li class="flex flex-row mb-2 border-gray-400">
                        <div class="shadow border select-none cursor-pointer bg-gray-200 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                          <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                            <a href="#" class="relative block">
                              <img
                                alt="profil"
                                src={leaderboard1}
                                class="mx-auto object-cover rounded-full border-white  h-10 w-10 "
                              />
                            </a>
                          </div>
                          <div class="flex-1 pl-1 md:mr-16">
                            <div class="text-lg text-black font-bold">
                              {marks[4].fullname}
                            </div>
                          </div>
                          <div class="text-lg text-black font-bold">
                            {marks[4].marks}
                          </div>
                          <div class=" items-center flex   justify-end h-12 w-12   ml-4">
                            <img
                              alt="profil"
                              src={place5}
                              class="mx-auto object-cover h-12 w-12"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </>
                )}

                {marks.length === 0 && (
                  <p className="text-white">Loading data...</p>
                )}
              </div>
            </MDBCol>

            <MDBCol md="12" xl="4">
              <div class="container flex flex-col items-center justify-center w-full mx-auto">
                <MDBCard
                  className="border-gray-400 background-leaderboard"
                  style={{ borderRadius: "15px" }}
                >
                  <MDBCardBody className="text-center">
                    <div className="flex mt-3 mb-4 justify-content-center">
                      <MDBCardImage
                        src={leaderboard2}
                        className="rounded-circle"
                        fluid
                        style={{ width: "100px" }}
                      />
                    </div>
                    <br></br>
                    {marks.length > 0 && (
                      <>
                        <MDBTypography className="font-bold" tag="h4">
                          {marks[0].fullname}
                        </MDBTypography>
                      </>
                    )}

                    {marks.length === 0 && (
                      <p className="text-white">Loading data...</p>
                    )}
                    <div className="pb-2 mb-4">
                      <div class=" items-center flex  ml-4">
                        <img
                          alt="profil"
                          src={cup}
                          class="mx-auto object-cover h-30 w-20"
                        />
                      </div>
                    </div>
                    <div>
                      <span class="px-4 py-2 justify-content-center  rounded-full text-lg text-white w-full h-10 bg-indigo-500 font-bold">
                        <FaStar className="text-yellow-300" />
                        <FaStar className="text-yellow-300" />
                        <FaStar className="text-yellow-300" /> &ensp; 1st Place
                        &ensp;
                        <FaStar className="text-yellow-300" />
                        <FaStar className="text-yellow-300" />
                        <FaStar className="text-yellow-300" />
                      </span>
                    </div>
                    <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-800 mt-2 p-2">
                      <div class="flex-row gap-4 flex justify-center items-center">
                        <span class="px-4 py-2 justify-content-center  rounded-full text-lg text-black w-full h-10 font-bold">
                          <GiPartyPopper className="text-red-700" /> &ensp;
                          Congratulations !!! &ensp;{" "}
                          <GiPartyPopper className="text-red-700" />
                        </span>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Footer />
    </>
  );
}
