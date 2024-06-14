import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import AOS from "aos";
import "aos/dist/aos.css";

const Business = () => {
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
      <div className="product flex gap-5 items-center mt-32">
        <div
          className="video-wrapper relative"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* <img
            src="../../public/img/unsplash_bzqU01v-G54.jpg"
            className="w-[550px] z-[1]"
            alt=""
          /> */}

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/olg8PLUWs4M?si=VQPdNzAp3Jdh_wrI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-[550px] z-[1]"
            style={{
              borderRadius: "30px",
              boxShadow: "2px 7px 20px rgba(0, 0, 0, 0.3)",
            }}
          ></iframe>

          <img
            src="../../public/img/Ellipse 86.png"
            className="absolute bottom-0 translate-x-10 translate-y-10 right-0 z-[-1]"
            alt=""
          />
        </div>
        <div className="text relative p-10">
          <img
            src="../../public/img/Rectangle 26.png"
            className="absolute z-[-1] w-[120px] top-6 translate-x-[-20px]"
            alt=""
            data-aos="fade-up"
            data-aos-delay="100"
          />

          <h1
            className="text-3xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Great Media Product
          </h1>
          <h1
            className="text-3xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            Viettel AI in 2022
          </h1>
          <p className="w-[450px] mt-4" data-aos="fade-up" data-aos-delay="400">
            Our mission in this project was to write the script and produce a
            promotional music video (MV) with the theme{" "}
            <span className="font-semibold">
              "The Development Journey of Viettel Cyber Space (Viettel AI)"
            </span>
            . The product needed to convey the full message, development
            factors, and strengths of the technology company while maintaining a
            cheerful, youthful vibe through the acting. The final product was a
            great success for both our partner and ourselves.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Business;
