import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import AOS from "aos";
import "aos/dist/aos.css";

const OurClient = () => {
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
      <div
        id="our-client"
        className="our-client-container m-10 mt-[320px] relative flex items-center justify-between"
      >
        <div className="text">
          <h1
            className="text-3xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Our Client
          </h1>
          <p className="w-[300px] mt-4" data-aos="fade-up" data-aos-delay="200">
            Several selected clients, who already believe in our service.
          </p>
        </div>
        <div className="logo-brand flex justify-around gap-8 absolute items-center right-32">
          <img
            src="/img/Google Logo.svg"
            alt=""
            className="w-[120px]"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <img
            src="/img/Vector.svg"
            alt=""
            className="w-[120px]"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <img
            src="/img/Panasonic_logo_(Blue).svg.png"
            alt=""
            className="w-[140px]"
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <img
            src="/img//viettel logo.png"
            alt=""
            className="w-[110px] h-fit"
            data-aos="fade-up"
            data-aos-delay="500"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default OurClient;
