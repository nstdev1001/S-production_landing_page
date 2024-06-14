import { Button } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200, // Độ trễ trước khi bắt đầu hiệu ứng
      delay: 50, // Độ trễ sau mỗi phần tử
      duration: 1000, // Thời gian hiệu ứng
      easing: "ease-in-out", // Easing mặc định cho hiệu ứng
      once: true, // Lặp lại hiệu ứng khi cuộn lại
    });
  }, []);
  return (
    <Fragment>
      <div className="hero flex relative m-10 mt-10 row">
        <div
          className="text mt-20 col-lg-6 col-md-12 col-sm-12"
          data-aos="fade-up"
        >
          <h1 className="text-3xl font-semibold text-hero" data-aos-delay="100">
            A Media Product Agency
          </h1>
          <div className="w-[400px]" data-aos="fade-up" data-aos-delay="150">
            <p className="mt-4 text-medium">
              We were born to provide you with Media products in a different
              way: Creative - Quintessential - Unique. We produce corporate
              films, TVCs, graphic design, content, and other social media
              products.
            </p>
          </div>
          <a href="#our-client">
            <Button
              data-aos="slide-left"
              data-aos-offset="300"
              data-aos-delay="500"
              variant="contained"
              style={{
                backgroundColor: "#124969",
                borderRadius: "60px",
                marginTop: "20px",
                zIndex: "1",
                padding: "15px",
                width: "170px",
                textTransform: "inherit",
                fontWeight: "bold",
              }}
            >
              Explore Us{" "}
              <span className="ml-3">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </Button>
          </a>

          <img
            src="../../public/img/dots.png"
            alt=""
            className="w-[300px] absolute z-0 top-[250px] left-[-35px]"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-delay="400"
          className="hero-img absolute right-0 w-[700px] col-lg-6 col-md-12 col-sm-12"
        >
          <img
            src="../../public/img/Ellipse 85.png"
            alt=""
            className="z-0 translate-x-[-50%] translate-y-5"
          />
          <img
            src="../../public/img/image 8.jpg"
            alt=""
            className="right-0 translate-y-[-27%]"
          />
          <img
            src="../../public/img/Rectangle 25.png"
            alt=""
            className="rotate-180 right-[100px] absolute bottom-10 z-[-1]"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
