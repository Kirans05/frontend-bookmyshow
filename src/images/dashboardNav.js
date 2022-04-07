import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';


const DashboardNav = () => {
  return (
    <div className='navbardash'>
        <div className='navbarimage'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ192Kfjx6NT2jZIrogV7Np-o3-Ln7SmyyY6hYQ2rlhOG1nS5-XdrZckC4QETFVBnsbA18&usqp=CAU' alt='https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/21/w900X450/logo-on-gray.jpg?w=400&dpr=2.6'/>
        </div>
        <div className='navbardashMiddle'>
          <input type={"search"} placeholder="Enter to Search" />
          <SearchIcon />
          <MicIcon />
        </div>
        <div className='navbarrightdash'>
        <NavLink to={"/"} ><Button variant="contained" className='btn'>LogOut</Button></NavLink>
        </div>
    </div>
  )
}
// \images\logo1.png
export default DashboardNav