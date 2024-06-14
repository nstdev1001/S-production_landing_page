import { Button } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Subscribe = () => {
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
      <div className="subscribe flex justify-between items-center relative mt-16">
        <img
          src="/img/Rectangle 225.png"
          className="absolute bottom-0 left-0 translate-x-[-30px] translate-y-[30px] z-[-1]"
          alt=""
        />
        <img
          src="/img/dot 3.png"
          className="absolute top-0 right-0 z-[-1] translate-x-[30px] translate-y-[-30px]"
          alt=""
        />
        <div className="text ml-20">
          <h1
            className="text-3xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Subscribe Newsletter
          </h1>
          <p className=" mt-4" data-aos="fade-up" data-aos-delay="150">
            I will update good news and promotion service not spam
          </p>
        </div>
        <div
          className="input relative"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="white-box absolute">
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              className="absolute top-[50%] translate-y-[-50%] left-8 w-[230px]"
            />
            <Button
              variant="contained"
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                right: "16px",
                borderRadius: "60px",
                height: "60px",
                width: "200px",
                backgroundColor: "#124969",
              }}
            >
              Connnet Now
            </Button>
          </div>
          <img src="/img/Rectangle 31.png" alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default Subscribe;
