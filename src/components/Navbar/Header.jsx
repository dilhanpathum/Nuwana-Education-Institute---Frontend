import React from 'react';
import Logo from "../../assets/logo/logo1.png"
import { Avatar, Dropdown, Navbar } from "flowbite-react";

function Header() {
  return (
    <Navbar fluid rounded className='bg-gray-100 '>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src={Logo} className="mr-3 h-10 sm:h-9" alt="Flowbite React Logo" />
        
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
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
        <Navbar.Link className='text-lg' href="#">Services</Navbar.Link>
        <Navbar.Link className='text-lg' href="#">Virtual Tour</Navbar.Link>
        <Navbar.Link className='text-lg' href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header