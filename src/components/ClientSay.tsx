import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import AOS from "aos";
import "aos/dist/aos.css";
import FeedbackSlider from "./FeedbackClient";

export const ClientSay = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <Fragment>
      <div className="client-say mt-32 ">
        <h1
          className="text-center text-3xl font-bold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          What our happy client say
        </h1>
        <p className="text-center mt-2" data-aos="fade-up" data-aos-delay="150">
          Several selected clients, who already believe in our service.
        </p>

        <div className="flex justify-between items-center">
          <div className="img-wrapper relative">
            <img
              src="../../public/img/dots 2.png"
              className="absolute z-[-1] w-[150px] right-5"
              alt=""
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <img
              src="../../public/img/avatar.png"
              alt=""
              className="main-avatar "
              data-aos="fade-up"
              data-aos-delay="250"
            />
            <img
              src="../../public/img/Ellipse 87.png"
              className="absolute bottom-10 left-10 w-[100px] z-[-1]"
              alt=""
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </div>

          <div className="text" data-aos="fade-up" data-aos-delay="300">
            {/* <h4 className="font-bold">Nguyen Son Tung</h4>
            <p
              className="w-[300px] mt-3"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </p> */}
            <div className="w-[300px]">
              {" "}
              <FeedbackSlider />
            </div>
          </div>

          <div className="more-avatar relative w-[400px] h-[400px] ">
            <img
              src="../../public/img/Ellipse 93.png"
              className="absolute top-28 left-10 w-[160px] avt-client"
              alt=""
              data-aos="flip-left"
              data-aos-delay="100"
            />
            <img
              src="../../public/img/small avt/1.png"
              className="absolute top-16 left-1 avt-client"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="100"
            />
            <img
              src="../../public/img/small avt/2.png"
              className="absolute top-0 left-32 avt-client"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="110"
            />
            <img
              src="../../public/img/small avt/3.png"
              className="absolute top-16 right-28 avt-client"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="120"
            />
            <img
              src="../../public/img/small avt/4.png"
              className="absolute top-36 right-16 avt-client"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="130"
            />
            <img
              src="../../public/img/small avt/5.png"
              className="absolute bottom-28 right-28 avt-client"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="140"
            />
            <img
              src="../../public/img/small avt/6.png"
              className="absolute bottom-14 left-24 avt-client"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="150"
            />
            <img
              src="../../public/img/small avt/7.png"
              className="absolute bottom-36 left-7 avt-client"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="160"
            />
            <img
              src="../../public/img/small avt/8.png"
              className=" absolute top-24 left-28 avt-client"
              alt=""
              data-aos="zoom-in"
              data-aos-delay="170"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
