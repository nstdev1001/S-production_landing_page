import { useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
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
      <div className="m-10 relative flex items-center justify-between ">
        <img
          src="../../public/img/Rectangle 25.png"
          className="absolute z-[-1] w-[120px] translate-x-[-25px] top-[250px]"
          alt=""
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
        />
        <img
          src="../../public/img/dot 4.png"
          className="absolute z-[-1] w-[250px] bottom-[50px] left-[140px]"
          alt=""
        />
        <div className="text mt-20">
          <h1
            className="text-3xl font-semibold w-[250px]"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
          >
            How can we help your Business ?
          </h1>
          <p
            className="w-[300px] mt-4"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="200"
          >
            We provide a full range of advertising services for your business,
            from concept development and design to image and video production.
          </p>
        </div>
        <img
          src="../../public/img/Rectangle 24.png"
          className="absolute z-[-1] w-[850px] right-0"
          alt=""
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
        />
        <div className="product-wrapper flex gap-6 justify-around relative right-52">
          <div className="2-product-left mt-10">
            <div
              className="logo-box p-6 pb-9 mb-6"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="100"
            >
              <img
                src="../../public/img/box-search 1.svg"
                alt=""
                className="logo logo-bussiness"
              />
              <h4 className="font-bold mt-4">Business Idea</h4>
              <h4 className="font-bold">Planning</h4>
              <p className="mt-4">
                We provide suitable script content for all social media
                platforms.
              </p>
            </div>
            <div
              className="logo-box p-6 pb-9"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="300"
            >
              <img
                src="../../public/img/code-1 1.svg"
                alt=""
                className="logo logo-graphic"
              />
              <h4 className="font-bold mt-4">Graphic Design</h4>
              <h4 className="font-bold">For Bussiness</h4>
              <p className="mt-4">
                We provide graphic design products with cutting-edge visual.
              </p>
            </div>
          </div>
          <div className="2-product-right">
            <div
              className="logo-box p-6 pb-9 mb-6"
              data-aos="fade-up"
              data-aos-offset="200px"
              data-aos-delay="200"
            >
              <img
                src="../../public/img/empty-wallet 1.svg"
                alt=""
                className="logo logo-financial"
              />
              <h4 className="font-bold mt-4">Financial</h4>
              <h4 className="font-bold">Savings</h4>
              <p className="mt-4">
                We bring the best quality at the best price for your business.
              </p>
            </div>
            <div
              className="logo-box p-6 pb-9"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="400"
            >
              <img
                src="../../public/img/chart-square 1.svg"
                alt=""
                className="logo logo-trend"
              />
              <h4 className="font-bold mt-4">Market Trend</h4>
              <h4 className="font-bold">Analysis</h4>
              <p className="mt-4">
                We empower you to thrive on every digital platform.
              </p>
            </div>
          </div>
        </div>
        <img
          src="../../public/img/Ellipse 87.png"
          className="absolute bottom-0 w-[100px] right-[170px] z-[-2]"
          alt=""
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="500"
        />
      </div>
    </Fragment>
  );
};

export default Product;
