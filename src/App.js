import React, { useState } from 'react'
import EmailVerification from './components/emailVerification'
import Login from './components/login'
import ResetPassword from './components/resetPassword'
import Signup from './components/signup'
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import AdminSignup from './admin-compo/adminsignup'
import AdminLogin from './admin-compo/adminlogin'
import Getmovies from './movies/getmovies'
import Navbar from './images/navbar'
import Footer from './footer'
import Homepage from './homepage'
import MovieDetails from './movies/movieDetails'
import Bookpage from './bookpage'
import { Provider } from './context'
import Seatarrangement from './movies/seatarrangement'
import Payment from './payment'



const App = () => {
  const [clickedFilm,setclickedFilm] = useState({})
  const updateClickedfilm = (list) => {
    setclickedFilm(list)
  }
let [seat,setseat] = useState([])
let [currentFilm,setcurrentFilm] = useState("")
let [userid,setuserid] = useState("")

  const bookClickSeat = (value) =>{
    setseat(value)
  }

  const updateCurrentFilm = (currentFilmvalue) => {
    setcurrentFilm(currentFilmvalue)
  }

  const updatemail = (mail) => {
    setuserid(mail)
  }

const listofarr = {
  seat,
  bookClickSeat,
  updateCurrentFilm,
  updatemail,
  userid,
  currentFilm
} 
  return (
    <div className='app'>
      <Provider value={listofarr}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/emailverification' element={<EmailVerification />} />
            <Route path='/resetpassword' element={<ResetPassword />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
            <Route path='/adminsignup' element={<AdminSignup />} />
            <Route path='/dashboard' element={<Getmovies updateClickedfilm={updateClickedfilm}/>} />
           <Route path='/movieDetails' element={<MovieDetails clickedFilm={clickedFilm}/>}/>
           <Route path='/bookpage' element={<Bookpage/>}/>
           <Route path='/payment' element={<Payment/>}/>
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App