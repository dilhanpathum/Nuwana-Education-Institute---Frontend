import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo/logo1.png";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import profile from "../../assets/profile/p2.jpg";
import { jwtDecode } from "jwt-decode";
import APIService from "../Api/APIService";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role,setRole] = useState("");
  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (token["mytoken"] != null) {
      const emailToken = (jwtDecode(token["mytoken"]).sub);


      APIService.GetUserDetails(token["mytoken"],{email: emailToken})
        .then((resp) => {
          console.log(resp)
          setFirstName(resp.firstname)
          setLastName(resp.lastname)
          setEmail(resp.Email)
          setRole(resp.role)
        })
        .catch((error) => 

          removeToken(["mytoken"])
      );
    }
  }, []);
  const logoutBtn = () =>{
    removeToken(['mytoken'])
    navigate(0)
    navigate("/home")
  }

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "text-lg text-blue-500" : "text-lg";
  };
  return (
    <>
    <Navbar fluid rounded className="bg-gray-100 ">
      <Navbar.Brand href="http://localhost:3000/">
        <img src={Logo} className="h-10 mr-3 sm:h-9" alt="Logo" />
      </Navbar.Brand>
      
      <div className="flex md:order-2">
      {token["mytoken"] ? (
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={profile} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">{`${firstName} ${lastName}`}</span>
          </Dropdown.Header>
        {role === 'admin' ?(
          <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
        ):(
          <Dropdown.Item href="/profile">Profile</Dropdown.Item>
        )}
          <Dropdown.Divider />
          <Dropdown.Item onClick={logoutBtn}>Sign out</Dropdown.Item>
        </Dropdown>
      ):(
        <Navbar.Collapse className="text-9xl">
          <Navbar.Link className="text-lg" href="/signin">
          Sign In 
        </Navbar.Link>
        <Navbar.Link className="text-lg" href="/signup">
          Sign Up
        </Navbar.Link>
        </Navbar.Collapse>
      )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="text-9xl">
        <Navbar.Link href="/" className={getNavLinkClass("/")}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" className={getNavLinkClass("/about")}>
          About
        </Navbar.Link>
        {token["mytoken"] && role === "student" && (
          <>
        <Navbar.Link href="/enroll" className={getNavLinkClass("/enroll")}>
          Enroll
        </Navbar.Link>
        <Navbar.Link href="/quiz" className={getNavLinkClass("/quiz")}>
          Quiz
        </Navbar.Link>
        </>
        )}
        <Navbar.Link href="/leaderboard" className={getNavLinkClass("/leaderboard")}>
          Leaderboard
        </Navbar.Link>
        <Navbar.Link href="/gallery" className={getNavLinkClass("/gallery")}>
          Gallery
        </Navbar.Link>
        <Navbar.Link href="/virtualtour" className={getNavLinkClass("/virtualtour")}>
          Virtual Tour
        </Navbar.Link>
        <Navbar.Link href="/contact" className={getNavLinkClass("/contact")}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default Header;
