import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios from "axios"
import Navbar from '../images/navbar';

const AdminSignup = () => {
  const [inputvalues,setinputvalues] = useState({
    username:"",
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
    if(inputvalues.email != "" && inputvalues.username != "" && inputvalues.password != "" ){
      let options = {
        url:"https://bookmyshow2022.herokuapp.com/users/adminsignup",
        headers:{
          "content-type":"application/json",
        },
        method:"POST",
        data:inputvalues
      }
      let response = await axios(options)
                if(response.data == "Admin SignUp successfull"){
                    setresponseMsg("Admin SignUp successfull")
                }else{
                  setresponseMsg("AdminId already Exists")
                }
  
                setTimeout(() => {
                    setresponseMsg(null)
                }, 3500);
    }else{
      alert("please Fill All The Fields")
    }
  }
  return (
    <div className='signuppage'>
      <Navbar />
        <h3>Please Enter the user details to signup</h3>
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
          label="Admin UserName"
          name='username'
          type="text"
          autoComplete="current-password"
          onChange={inputChangeHandler}
          required
          />
        <TextField
          id="outlined-password-input"
          label="Admin Email"
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
        <Button variant="contained" onClick={submitHandler}>SignUp</Button>
        </Box>
        {
          responseMsg ? <h6>{responseMsg}</h6> : null
        }
    </div>
  )
}

export default AdminSignup