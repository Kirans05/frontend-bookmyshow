import React from 'react'
import Footer from './footer'
import Navbar from './images/navbar'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className='homwpageImages'>
          <img src="https://upload.wikimedia.org/wikipedia/en/b/b1/Beast_2022_poster.jpg" alt="no image" />
          <img src="https://static.toiimg.com/photo/msid-88773431/88773431.jpg?108312" alt="no image" />
          <img src="https://www.filmibeat.com/img/popcorn/movie_posters/james-20210317121941-14306.jpg" alt="no image" />
          <img src="https://qqcdnpictest.mxplay.com/pic/37bb5a667ab66ef69f895d7eae935d3f/en/2x3/320x480/test_pic1635763170598.webp" alt="no image" />
          <img src="https://1.bp.blogspot.com/-3RrWfcb_ELA/W7sNB6KWxGI/AAAAAAAAVVE/retT1teKyXYyPBESKlYfZZwKvD4elQ-cACLcBGAs/s1600/upcoming-kannada-movies-release-date-star-cast-list-mt-wiki..jpg" alt="no image" />
        </div>
        <Footer />
    </div>
  )
}

export default Homepage