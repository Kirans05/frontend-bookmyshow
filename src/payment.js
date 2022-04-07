import { Button } from '@mui/material'
import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {user} from "./context"

const Payment = () => {
  const nav = useNavigate()
    const value = useContext(user)
    const filternumber = value.seat.filter(item => item.done == false)

    const submitPay = async (e) => {
      e.preventDefault()
      let price = (filternumber.length)*100
      const datainput = {
          userid:value.userid,
          film:value.currentFilm.title,
          filmid:value.currentFilm.id,
          numofTickets:filternumber.length,
          price:price
      }
      let options = {
        url:"https://bookmyshow2022.herokuapp.com/users/paymentticket",
        headers:{
          "content-type":"application/json",
        },
        method:"POST",
        data:datainput
      }
      let response = await axios(options)
      alert("Payment SuccessFull")
      nav("/dashboard")
    }
  return (
    <div className='paymentpageedit'>
        <h1>Payment Page</h1>
        {
          value.seat.map((item,index) => {
           return (item.done == false) ? <h1 key={index}>Seat Number : {item.seat}</h1>:null
          })
        }
        <Button variant="contained" onClick={submitPay}>Pay</Button>
    </div>
  )
}

export default Payment