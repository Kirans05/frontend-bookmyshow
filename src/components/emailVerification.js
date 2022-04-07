import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Navbar from '../images/navbar';



const EmailVerification = () => {
  const nav = useNavigate()
  const [inputvalues,setinputvalues] = useState({
    email:"",
    otp:""
  })

  const[btnvalue,setbtnvalue] = useState("Send OTP")
  const [responseMsg,setresponseMsg] = useState(null)

  const inputChangeHandler = (e) => {
    e.preventDefault()
    if([e.target.name] == "email"){
      setinputvalues({...inputvalues,[e.target.name]:e.target.value})
      setbtnvalue("Send OTP")
    }else{
      setinputvalues({...inputvalues,[e.target.name]:e.target.value})
      setbtnvalue("Submit")
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(inputvalues)
            if(inputvalues.otp == ""){
              // setbtnvalue("Send OTP")
              let options = {
                url:"https://bookmyshow2022.herokuapp.com/users/emailverification",
                headers:{
                  "content-type":"application/json",
                },
                method:"POST",
                data:inputvalues
              }
              let response = await axios(options)
              if(response.data == "Mail sent"){
                setresponseMsg("OTP Sent Please Check Your Mail id")
              }else if(response.data == "Email Id Does Not Exists"){
                setresponseMsg("Email Id Does Not Exists")
              }else{
                              setresponseMsg("Internal Server Problem Please Try Agian Later")
                            }
            }else{
              // setbtnvalue("Submit")
              let options = {
                url:"https://bookmyshow2022.herokuapp.com/users/otpverification",
                headers:{
                  "content-type":"application/json",
                },
                method:"POST",
                data:inputvalues
              }
              let response = await axios(options)
                console.log(response.data)
                if(response.data == "Email id does not exists"){
                  setresponseMsg("User Does Not Exists")
                }else if(response.data == "Incorrect OTP"){
                  setresponseMsg("Incorrect OTP")
                }else{
                  nav("/resetpassword")
                  setresponseMsg("Correct OTP")
                }
            }
              setTimeout(() => {
                  setresponseMsg(null)
              }, 3500);
  }
  return (
    <div className='emailpage'>
      <Navbar />
        <h3>Email Verification</h3>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      className='formemail'
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
          label="OTP"
          type="text"
          name='otp'
          autoComplete="current-password"
          onChange={inputChangeHandler}
        />
        <Button variant="contained" onClick={submitHandler}>{btnvalue}</Button>
        </Box>
        {
          responseMsg ? <h6>{responseMsg}</h6> : null
        }
    </div>
  )
}

export default EmailVerification