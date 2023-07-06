import React from 'react'
import car from '../assets/car.jpg'
import car1 from '../assets/car1.jpg'


const Landing = () => {
  return (
    <div>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={car} className="d-block w-100 landing-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={car1} className="d-block w-100 landing-img"  alt="..."/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </div>
  )
}

export default Landing