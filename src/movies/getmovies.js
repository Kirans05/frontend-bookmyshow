import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../footer'
import DashboardNav from '../images/dashboardNav'
import IndividualMovie from './individualMovie'
import MovieDetails from './movieDetails'

const Getmovies = ({updateClickedfilm}) => {
    const [popularmovies,setpopularmovies] = useState([])
    const [gendata,setgendata] = useState([])
    useEffect(() => {
        getMoviesList()
        gener_details()
    },[])


    const getMoviesList = async () => {
        let response = await axios("https://api.themoviedb.org/3/movie/popular?api_key=e32908f372e0f99282d482708426fc72&language=en-US&page=1")
        setpopularmovies(response.data.results)
        let options = {
            url:"https://bookmyshow2022.herokuapp.com/users/savefilms",
            headers:{
                "content-type":"application/json"
            },
            method:"POST",
            data:response.data.results
        }
        let sendData = await axios(options)

    }

    const gener_details = async () => {
        let response = await axios("https://api.themoviedb.org/3/genre/movie/list?api_key=e32908f372e0f99282d482708426fc72&language=en-US")
        setgendata(response.data.genres)
    }
  return (
    <div className='dashboardnavback'>
        <DashboardNav />
        <h1 className='h1'>Movies List</h1>
       <div className='moviesListOrder'>
       {
            popularmovies ? 
            popularmovies.map((item,index)  => {
                return <IndividualMovie key={index} item={item} gendata={gendata} className="indibody" updateClickedfilm={updateClickedfilm}/>
            }) 
             : <h1>no</h1>
        }
       </div>
       <Footer />
       
    </div>
  )
}

export default Getmovies