import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarimage'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ192Kfjx6NT2jZIrogV7Np-o3-Ln7SmyyY6hYQ2rlhOG1nS5-XdrZckC4QETFVBnsbA18&usqp=CAU' alt='https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/21/w900X450/logo-on-gray.jpg?w=400&dpr=2.6'/>
        </div>
        <div className='navbarright'>
        <NavLink to={"/"} ><Button variant="contained" className='btn'>Home Page</Button></NavLink>
        <NavLink to={"/adminsignup"} ><Button variant="contained" className='btn'>Admin SignUp</Button></NavLink>
        <NavLink to={"/adminlogin"} ><Button variant="contained" className='btn'>Admin Login</Button></NavLink>
        <NavLink to={"/signup"} ><Button variant="contained" className='btn'>Sign Up</Button></NavLink>
        <NavLink to={"/login"} ><Button variant="contained" className='btn'>Login</Button></NavLink>
        </div>
       
    </div>
  )
}
// \images\logo1.png
export default Navbar