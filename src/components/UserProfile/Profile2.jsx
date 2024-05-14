import React, { useState } from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
} from "mdb-react-ui-kit";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "flowbite-react";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";
import ReactApexChart from "react-apexcharts";
import "../../styles/profilepic.css";
import QRCode from "qrcode.react";

export default function Profile2() {
    var loadFile = function (event) {
        var image = document.getElementById("output");
        image.src = URL.createObjectURL(event.target.files[0]);
    };

    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    const url = "http://localhost:3000/profile";

    const downloadQR = () => {
        const canvas = document.getElementById("myqr");

        var pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "myqr.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    const [state, setState] = useState({
        series: [
            {
                name: "Maths",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 95, 25, 64, 100],
            },
            {
                name: "Science",
                data: [12, 41, 24, 66, 12, 76, 24, 21, 35, 97, 88, 98],
            },
            {
                name: "English",
                data: [45, 56, 83, 32, 16, 27, 87, 85, 90, 75, 88, 86],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "line",
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "straight",
            },
            title: {
                text: "Monthly Test Mark",
                align: "left",
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                    opacity: 0.5,
                },
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
        },
    });
    return (
        <>
            <Header />

            <div class="container max-w-3xl px-4 mx-auto sm:px-8">
                <div class="py-8">
                    <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                        <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
                            <h1 className="px-5 py-3">Attendance Mark : May</h1>
                            <table class="min-w-full leading-normal m-0.5">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                                        >
                                            1st Week
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                                        >
                                            2nd Week
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                                        >
                                            3rd Week
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                                        >
                                            4th Week
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="px-5 py-5 justify-content-center  text-sm bg-white border-b border-gray-200">
                                           
                                            <div class="flex items-center justify-content-center">
                                                <Checkbox {...label} defaultUnchecked color="success" />
                                                <span class="font-normal text-gray-700 dark:text-white">
                                                    Present
                                                </span>
                                            </div>
                                            <div class="flex justify-content-center items-center mt-2">
                                                <Checkbox
                                                    {...label}
                                                    defaultUnchecked
                                                    sx={{
                                                        color: pink[800],
                                                        "&.Mui-checked": {
                                                            color: pink[600],
                                                        },
                                                    }}
                                                />
                                                <span class="font-normal text-gray-700 dark:text-white">
                                                    Absent
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap items-start gap-2 mt-4 justify-content-center">

                                                <Button size="sm">Save</Button>

                                            </div>
                                            
                                        </td>
                                        <td class="px-5 py-5 justify-content-center  text-sm bg-white border-b border-gray-200">
                                           
                                            <div class="flex items-center justify-content-center">
                                                <Checkbox {...label} defaultUnchecked color="success" />
                                                <span class="font-normal text-gray-700 dark:text-white">
                                                    Present
                                                </span>
                                            </div>
                                            <div class="flex justify-content-center items-center mt-2">
                                                <Checkbox
                                                    {...label}
                                                    defaultUnchecked
                                                    sx={{
                                                        color: pink[800],
                                                        "&.Mui-checked": {
                                                            color: pink[600],
                                                        },
                                                    }}
                                                />
                                                <span class="font-normal text-gray-700 dark:text-white">
                                                    Absent
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap items-start gap-2 mt-4 justify-content-center">

                                                <Button size="sm">Save</Button>

                                            </div>
                                            
                                        </td>
                                        <td class="px-5 py-5 justify-content-center  text-sm bg-white border-b border-gray-200">
                                           
                                           <div class="flex items-center justify-content-center">
                                               <Checkbox {...label} defaultUnchecked color="success" />
                                               <span class="font-normal text-gray-700 dark:text-white">
                                                   Present
                                               </span>
                                           </div>
                                           <div class="flex justify-content-center items-center mt-2">
                                               <Checkbox
                                                   {...label}
                                                   defaultUnchecked
                                                   sx={{
                                                       color: pink[800],
                                                       "&.Mui-checked": {
                                                           color: pink[600],
                                                       },
                                                   }}
                                               />
                                               <span class="font-normal text-gray-700 dark:text-white">
                                                   Absent
                                               </span>
                                           </div>
                                           <div className="flex flex-wrap items-start gap-2 mt-4 justify-content-center">

                                               <Button size="sm">Save</Button>

                                           </div>
                                           
                                       </td>
                                       <td class="px-5 py-5 justify-content-center  text-sm bg-white border-b border-gray-200">
                                           
                                           <div class="flex items-center justify-content-center">
                                               <Checkbox {...label} defaultUnchecked color="success" />
                                               <span class="font-normal text-gray-700 dark:text-white">
                                                   Present
                                               </span>
                                           </div>
                                           <div class="flex justify-content-center items-center mt-2">
                                               <Checkbox
                                                   {...label}
                                                   defaultUnchecked
                                                   sx={{
                                                       color: pink[800],
                                                       "&.Mui-checked": {
                                                           color: pink[600],
                                                       },
                                                   }}
                                               />
                                               <span class="font-normal text-gray-700 dark:text-white">
                                                   Absent
                                               </span>
                                           </div>
                                           <div className="flex flex-wrap items-start gap-2 mt-4 justify-content-center">

                                               <Button size="sm">Save</Button>

                                           </div>
                                           
                                       </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <section style={{ backgroundColor: "#eee" }}>
                <MDBContainer className="py-5">
                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">
                                    <div class="profile-pic">
                                        <label class="-label" for="file">
                                            <span class="glyphicon glyphicon-camera"></span>
                                            <span>Change Image</span>
                                        </label>
                                        <input
                                            id="file"
                                            type="file"
                                            name="propic"
                                            accept=".png, .jpg, .jpeg"
                                            onchange={loadFile}
                                        />
                                        <img
                                            src="https://cdn.pixabay.com/photo/2017/08/06/21/01/louvre-2596278_960_720.jpg"
                                            id="output"
                                            width="200"
                                        />
                                    </div>
                                    <p className="mb-1 text-muted">Full Stack Developer</p>
                                    <p className="mb-4 text-muted">Bay Area, San Francisco, CA</p>
                                    <div className="mb-2 d-flex justify-content-center">
                                        <MDBBtn>Follow</MDBBtn>
                                        <MDBBtn outline className="ms-1">
                                            Message
                                        </MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4 mb-lg-0">
                                <MDBCardBody className="flex justify-center p-4">
                                    <MDBListGroup flush className="rounded-3">
                                        <div>
                                            <div className="myqr">
                                                <QRCode
                                                    id="myqr"
                                                    size={300}
                                                    value={url}
                                                    includeMargin={true}
                                                    renderAs="canvas"
                                                />
                                            </div>
                                            <br></br>
                                            <div className="flex justify-center">
                                                <button onClick={downloadQR}>Download QR Code</button>
                                            </div>
                                        </div>
                                    </MDBListGroup>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="8">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Full Name</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                Johnatan Smith
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Email</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                example@example.com
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Phone</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                (097) 234-5678
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Mobile</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                (098) 765-4321
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Address</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                Bay Area, San Francisco, CA
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBRow>
                                <MDBCol md="6">
                                    <MDBCard className="mb-4 mb-md-0">
                                        <MDBCardBody>
                                            <MDBCardText className="mb-4">
                                                <span className="text-primary font-italic me-1">
                                                    assigment
                                                </span>{" "}
                                                Project Status
                                            </MDBCardText>
                                            <MDBCardText
                                                className="mb-1"
                                                style={{ fontSize: ".77rem" }}
                                            >
                                                Web Design
                                            </MDBCardText>
                                            <MDBProgress className="rounded">
                                                <MDBProgressBar
                                                    width={80}
                                                    valuemin={0}
                                                    valuemax={100}
                                                />
                                            </MDBProgress>

                                            <MDBCardText
                                                className="mt-4 mb-1"
                                                style={{ fontSize: ".77rem" }}
                                            >
                                                Website Markup
                                            </MDBCardText>
                                            <MDBProgress className="rounded">
                                                <MDBProgressBar
                                                    width={72}
                                                    valuemin={0}
                                                    valuemax={100}
                                                />
                                            </MDBProgress>

                                            <MDBCardText
                                                className="mt-4 mb-1"
                                                style={{ fontSize: ".77rem" }}
                                            >
                                                One Page
                                            </MDBCardText>
                                            <MDBProgress className="rounded">
                                                <MDBProgressBar
                                                    width={89}
                                                    valuemin={0}
                                                    valuemax={100}
                                                />
                                            </MDBProgress>

                                            <MDBCardText
                                                className="mt-4 mb-1"
                                                style={{ fontSize: ".77rem" }}
                                            >
                                                Mobile Template
                                            </MDBCardText>
                                            <MDBProgress className="rounded">
                                                <MDBProgressBar
                                                    width={55}
                                                    valuemin={0}
                                                    valuemax={100}
                                                />
                                            </MDBProgress>

                                            <MDBCardText
                                                className="mt-4 mb-1"
                                                style={{ fontSize: ".77rem" }}
                                            >
                                                Backend API
                                            </MDBCardText>
                                            <MDBProgress className="rounded">
                                                <MDBProgressBar
                                                    width={66}
                                                    valuemin={0}
                                                    valuemax={100}
                                                />
                                            </MDBProgress>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>

                                <MDBCol md="6">
                                    <MDBCard className="mb-4 mb-md-0">
                                        <div>
                                            <div id="chart">
                                                <ReactApexChart
                                                    options={state.options}
                                                    series={state.series}
                                                    type="line"
                                                    height={350}
                                                />
                                            </div>
                                            <div id="html-dist"></div>
                                        </div>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
            <Footer />
        </>
    );
}
