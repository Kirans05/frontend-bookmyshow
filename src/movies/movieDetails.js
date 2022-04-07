import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DashboardNav from "../images/dashboardNav";
import Footer from "../footer"
import MovieListFooter from "../movielistfooter";
import { user } from "../context";

const MovieDetails = ({ clickedFilm }) => {
  const value = useContext(user)
  
  useEffect(()=>{
    sendCurrentData()
  },[])

  const sendCurrentData = () => {
    value.updateCurrentFilm(clickedFilm)
  }
  return (
    <div className="mainMoviesection">
      <DashboardNav />
      <div className="movieSection">
        <img
          src={"https://image.tmdb.org/t/p/w500" + clickedFilm.backdrop_path}
          alt={clickedFilm.path}
        />
        <div className="movieDescription">
          <h6 className="h6">{clickedFilm.title}</h6>
          <h6 className="h6">Popularity - {clickedFilm.popularity}</h6>
          <h6 className="h6">ReleaseDate - {clickedFilm.release_date}</h6>
          <h6 className="h6">Vote - {clickedFilm.vote_average}</h6>
          <h6 className="h6">MovieId - {clickedFilm.id}</h6>
          <NavLink to={"/bookpage"} ><Button variant="contained" className='btn'>Book Ticket</Button></NavLink> 
        </div>
      </div>
      <h1>OverView</h1>
      <p>{clickedFilm.overview}</p>
      <MovieListFooter />
    </div>
  );
};

export default MovieDetails;
