import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios  from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../images/navbar';
import {user} from "../context"

const Login = () => {
  const value = useContext(user)
  const nav = useNavigate()
  const [inputvalues,setinputvalues] = useState({
    email:"",
    password:""
  })

  const [responseMsg,setresponseMsg] = useState(null)

  const inputChangeHandler = (e) => {
    e.preventDefault()
    setinputvalues({...inputvalues,[e.target.name]:e.target.value})
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(inputvalues)
    let options = {
      url:"https://bookmyshow2022.herokuapp.com/users/login",
      headers:{
        "content-type":"application/json",
      },
      method:"POST",
      data:inputvalues
    }
    let response = await axios(options)
    console.log(response)
              if(response.data == "Login SuccessFull"){
                value.updatemail(inputvalues)
                nav("/dashboard")
                  setresponseMsg("Login SuccessFull")
              }else if(response.data == "Incorrect Password"){
                setresponseMsg("Incorrect Password")
              }else{
                setresponseMsg("User Does Not Exists")
              }

              setTimeout(() => {
                  setresponseMsg(null)
              }, 3500);
  }
  return (
      <div className='loginpage'>
        <Navbar />
        <h3>Please Enter EmailId and Password to Login</h3>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='formlogin'
    >
        <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          name='email'
          autoComplete="current-password"
          onChange={inputChangeHandler}
          required
          />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name='password'
          autoComplete="current-password"
          onChange={inputChangeHandler}
          required
        />
        <br />
        <NavLink to="/emailverification" >Forgot Password</NavLink>
        <br />
        <Button variant="contained" onClick={submitHandler}>Login</Button>
        </Box>
        {
          responseMsg ? <h6>{responseMsg}</h6> : null
        }
      </div>
  )
}

export default Login