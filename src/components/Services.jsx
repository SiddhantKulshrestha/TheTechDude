import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/22.png"
import img2 from "../assets/3.png"

const Services = () => {
  return (
    <div className='services' >
      <Carousel infiniteLoop autoPlay showStatus = {false} showArrows = {false} interval={1000} showThumbs = {false}  >
        <div>
            <img src={img1} alt="Item 1" />
            <p className='legend' >Full Service</p>
        </div>

        <div>
            <img src={img2} alt="Item 2" />
            <p className='legend' >Peer-2-peer Support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Services
