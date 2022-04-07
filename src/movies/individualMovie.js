import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



const IndividualMovie = ({item,gendata,updateClickedfilm}) => {
  const nav = useNavigate()
  const movieClicked = (movieDetails) => {
    updateClickedfilm(movieDetails)
    nav("/movieDetails")
  }
  return (
    <div className='moviesDetails' onClick={()=>movieClicked(item)}>
        <img src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} alt={item.path} className="movieIMG"/>
        <div className='insideindividualbody'>
        <h6 className='movietitle'>{item.title}</h6>
        </div>
    </div>
  )
}

export default IndividualMovie