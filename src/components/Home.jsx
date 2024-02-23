import React from 'react'
import vg from "../assets/2.jpg"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className='home'id='home'  >
      <main>
        <h1>TechDude</h1>
        <p>We are the solution to all your tech problems</p>
      </main>
    </div>

    <div className="home2">
    <img src={vg} alt="Graphics" />
    <div>
    <p>
        We are your one and only solution to the tech issues you're facing everyday. We are the leading company whose aim is to increase the problem solving ability in Children.

    </p>
    </div>
    </div>
    <div className="home3" id='about' >
      <div>
      <h1>Who we are?</h1>
      <p>We literally are the best in the world when it comes to solving your daily tech issues.
        With the trusted team of more than 200 Tech Guns, you can expect nothing but an amazing service.
        Our customer care service is always active for you 24x7. TechDude is higly dedicated towards it's customers.
        So, what are you waiting for now ! Grab your phone and raise the query. Our executives will directly contact you and get 
        your issue resolved in the fastest possible time. Still in doubt! Well, why not trying then? 
      </p>
      </div>
    </div>
    <div className="home4" id='brands' >
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay: "0.3s"
          }}>
          <AiFillGoogleCircle />
          <p>Google</p>
          </div>

          <div style={{
            animationDelay: "0.5s"
          }}>
          <AiFillAmazonCircle />
          <p>Amazon</p>
          </div>
          <div style={{
            animationDelay: "0.7s"
          }}>
          <AiFillYoutube />
          <p>Youtube</p>
          </div>

          <div style={{
            animationDelay: "1s"
          }}>
          <AiFillInstagram />
          <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home
