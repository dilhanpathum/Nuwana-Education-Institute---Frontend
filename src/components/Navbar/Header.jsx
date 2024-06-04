import React from 'react';
import Logo from "../../assets/logo/logo1.png"
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import profile from "../../assets/profile/p2.jpg"

function Header() {
  return (
    <Navbar fluid rounded className='bg-gray-100 '>
      <Navbar.Brand href="http://localhost:3000/">
        <img src={Logo} className="mr-3 h-10 sm:h-9" alt="Logo" />
        
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={profile} rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>

          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Profile</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className='text-9xl'>
        <Navbar.Link href="#" active className='text-blue-950 text-lg'>
          Home
        </Navbar.Link>
        <Navbar.Link className='text-lg' href="#">About</Navbar.Link>
        <Navbar.Link className='text-lg' href="#">Enroll</Navbar.Link>
        <Navbar.Link className='text-lg' href="#">Quiz</Navbar.Link>
        <Navbar.Link className='text-lg' href="#">Leaderboard</Navbar.Link>
        <Navbar.Link className='text-lg' href="#">Gallery</Navbar.Link>
        <Navbar.Link className='text-lg' href="#">Virtual Tour</Navbar.Link>
        <Navbar.Link className='text-lg' href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header