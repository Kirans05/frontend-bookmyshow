import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../images/navbar';

const ResetPassword = () => {
  const nav = useNavigate()
  const [inputvalues,setinputvalues] = useState({
    email:"",
    password1:"",
    password2:""
  })

  const [responseMsg,setresponseMsg] = useState(null)

  const inputChangeHandler = (e) => {
    e.preventDefault()
    setinputvalues({...inputvalues,[e.target.name]:e.target.value})
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(inputvalues)
    if(inputvalues.password1 == inputvalues.password2){
      let options = {
        url:"https://bookmyshow2022.herokuapp.com/users/resetpassword",
        headers:{
          "content-type":"application/json",
        },
        method:"POST",
        data:inputvalues
      }
      let response = await axios(options)
      console.log(response)
                if(response.data == "Password Updated"){
                  nav("/login")
                    setresponseMsg("Password Updated")
                }else{
                  setresponseMsg("user not found")
                }
    }else{
      setresponseMsg("Password Does Not Match")
    }
              setTimeout(() => {
                  setresponseMsg(null)
              }, 3500);
  }
  return (
      <div className='signuppage'>
        <Navbar />
        <h3>Password Reset Form</h3>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='formsignup'
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
          label="New Password"
          type="password"
          name='password1'
          autoComplete="current-password"
          onChange={inputChangeHandler}
          required
        />
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          name='password2'
          autoComplete="current-password"
          onChange={inputChangeHandler}
          required
        />
        <Button variant="contained" onClick={submitHandler}>Reset Password</Button>
        </Box>
        {
          responseMsg ? <h6>{responseMsg}</h6> : null
        }
      </div>
  )
}

export default ResetPassword