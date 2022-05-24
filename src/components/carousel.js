import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './caraousel.css'
const Carousell = () => {
  return (
    <>  
    <Carousel className="overwritten">
  <Carousel.Item interval={2000}>
    <img
      className="d-block "
      src="./images/seven.jpg"
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block  "
      src="./images/eight.jpg"
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block "
      src="./images/nine.jpg"
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
    </>
  )
}

export default Carousell