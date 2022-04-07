import { Button } from '@mui/material'
import React, { useState } from 'react'

const Seatarrangement = ({item,bookedseatvalue}) => {
  const [btnvalue,setbtnvalue] = useState(true)

  const bookButtonHnadler = (item) => {
    if(btnvalue == true){
      setbtnvalue(false)
      item.done = false
      bookedseatvalue(item,false)
    }else{
      setbtnvalue(true)
      item.done = true
      bookedseatvalue(item,false)
    }
  }
  return (
    <div className={item.done ? "notbooked" : "booked"}>
      <Button variant="contained"   onClick={()=>bookButtonHnadler(item)}>{item.seat}</Button>
    </div>
    )
}

export default Seatarrangement