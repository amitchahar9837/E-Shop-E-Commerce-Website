import React from "react";
import Slider from "react-slick";
import slideImg1 from "../../assets/hero/headphone.png";
import slideImg2 from "../../assets/category/vr.png";
import slideImg3 from "../../assets/category/macbook.png";
import Button from "../shared/Button";
const Hero = ({handleOrderPopup}) => {
  const heroSlide = [
    {
      id: 1,
      img: slideImg1,
      subtitle: "Beast Solo",
      title: "Wireless",
      title2: "Headphone",
    },
    {
      id: 2,
      img: slideImg2,
      subtitle: "Beast Solo",
      title: "Wireless",
      title2: "Virtual",
    },
    {
      id: 3,
      img: slideImg3,
      subtitle: "Beast Solo",
      title: "Branded",
      title2: "Laptop",
    },
  ];
  var settings = {
    dots:false,
    arrows:false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    autoplaySpeed: 5000,
    autoplay: true,
  };
  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl max-h-[550px] sm:max-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="container pb-8 sm:pb-0">
          {/* Hero Section */}
          <Slider {...settings}>
            {heroSlide.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* Text Content Section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-23 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold ">{data.subtitle}</h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7 xl font-bold">{data.title}</h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold">{data.title2}</h1>
                    <div>
                      <Button text="Shop By Category" bgColor={"bg-primary"} textColor={"text-white"} handler={handleOrderPopup}/>
                    </div>
                  </div>
                  {/* Img Section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img
                        src={data.img}
                        alt=""
                        className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
