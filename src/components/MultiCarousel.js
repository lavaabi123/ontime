import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    slidesToSlide: 1
  }
};

const MultiCarousel = ({ deviceType }) => {
  return (
    <Carousel arrows={false} deviceType={deviceType} itemClass="image-item" responsive={responsive} 
    autoPlay={true} draggable={false} autoPlaySpeed={2000} >
      <img alt="" style={{ width: "100%", height: "100%" }} src={require("./assets/img/company1.png").default}/>
      <img alt="" style={{ width: "100%", height: "100%" }} src={require("./assets/img/company2.png").default}/>
      <img alt="" style={{ width: "100%", height: "100%" }} src={require("./assets/img/company3.png").default}/> 
      </Carousel>
  );
};

export default MultiCarousel;
