import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import DashboardNav from './images/dashboardNav'
import Seatarrangement from './movies/seatarrangement'
import {user} from "./context"
import { useNavigate } from 'react-router-dom'

const Bookpage = () => {
  const nav = useNavigate()
  const value = useContext(user)
  const [arr,setarr] = useState([{seat:1,done:true}, {seat:2,done:true}, {seat:3,done:true}, {seat:4,done:true}, {seat:5,done:true}, {seat:6,done:true}, {seat:7,done:true}, {seat:8,done:true}, {seat:9,done:true}, {seat:10,done:true}, {seat:11,done:true}, {seat:12,done:true}, {seat:13,done:true}, {seat:14,done:true}, {seat:15,done:true}, {seat:16,done:true}, {seat:17,done:true}, {seat:18,done:true}, {seat:19,done:true}, {seat:20,done:true}, {seat:21,done:true}, {seat:22,done:true}, {seat:23,done:true}, {seat:24,done:true}, {seat:25,done:true}, {seat:26,done:true}, {seat:27,done:true}, {seat:28,done:true}, {seat:29,done:true}, {seat:30,done:true}, {seat:31,done:true}, {seat:32,done:true}, {seat:33,done:true}, {seat:34,done:true}, {seat:35,done:true}, {seat:36,done:true}, {seat:37,done:true}, {seat:38,done:true}, {seat:39,done:true}, {seat:40,done:true}, {seat:41,done:true}, {seat:42,done:true}, {seat:43,done:true}, {seat:44,done:true}, {seat:45,done:true}, {seat:46,done:true}, {seat:47,done:true}, {seat:48,done:true}, {seat:49,done:true}, {seat:50,done:true}, {seat:51,done:true}, {seat:52,done:true}, {seat:53,done:true}, {seat:54,done:true}, {seat:55,done:true}, {seat:56,done:true}, {seat:57,done:true}, {seat:58,done:true}, {seat:59,done:true}, {seat:60,done:true}, {seat:61,done:true}, {seat:62,done:true}, {seat:63,done:true}, {seat:64,done:true}, {seat:65,done:true}, {seat:66,done:true}, {seat:67,done:true}, {seat:68,done:true}, {seat:69,done:true}, {seat:70,done:true}, {seat:71,done:true}, {seat:72,done:true}, {seat:73,done:true}, {seat:74,done:true}, {seat:75,done:true}, {seat:76,done:true}, {seat:77,done:true}, {seat:78,done:true}, {seat:79,done:true}, {seat:80,done:true}, {seat:81,done:true}, {seat:82,done:true}, {seat:83,done:true}, {seat:84,done:true}, {seat:85,done:true}, {seat:86,done:true}, {seat:87,done:true}, {seat:88,done:true}, {seat:89,done:true}, {seat:90,done:true}, {seat:91,done:true}, {seat:92,done:true}, {seat:93,done:true}, {seat:94,done:true}, {seat:95,done:true}, {seat:96,done:true}, {seat:97,done:true}, {seat:98,done:true}, {seat:99,done:true}, {seat:100,done:true}])

    const bookedseatvalue = (item,bool) => {
      console.log(item)
      if(bool == false){
        let filterposition = arr.findIndex(list => list.seat == item.seat)
        console.log(filterposition)
        const newarr = arr
        newarr[filterposition] = item
        setarr(newarr)
      }else{
        let filterposition = arr.findIndex(list => list.seat == item
          .seat)
          console.log(filterposition)
          const newarr = arr
          newarr[filterposition] = item
          setarr(newarr)
      }
    } 

    const submibookedlist = (e) => {
      e.preventDefault()
      value.bookClickSeat(arr)
      nav("/payment")
    }
      return (
        <div className='bookpageseating'>
        <DashboardNav />
        <h1>Please Select Your Desired Seat Number</h1>
        <div className='btn-groups'>
        {
          arr.map((item,index) => {
            return <Seatarrangement key={index} item={item} bookedseatvalue={bookedseatvalue}/>
          })
        }
        <br />
        <br />
        <Button variant="contained" onClick={submibookedlist}>Book</Button>
        </div>
    </div>
  )
}

export default Bookpage