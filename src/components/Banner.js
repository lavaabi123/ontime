import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Banner extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      accessibility:false,
      adaptiveHeight: false
    };
    return (
      <div className="banner">
        <Slider {...settings}>
          <div>
            <img alt="Banner" src={require("./assets/img/banner1.png").default} />
          </div> 
          <div>
            <img alt="Banner" src={require("./assets/img/banner4.png").default} />
          </div>          
        </Slider>     
        <div className="employer-message">            
          <div className="psec offset-lg-6 col-lg-6 offset-md-6 col-md-6">Exactly what I needed in a timekeeping solution to keep accurate time for my employees who are working on multiple projects throughout the day.
          <div className="text-right">- Van Chung, Project Superviosr</div>
          </div>          
        </div>   
      </div>
    );
  }
}
export default Banner;