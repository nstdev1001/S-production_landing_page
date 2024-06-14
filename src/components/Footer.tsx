import { Button } from "@mui/material";
import { Fragment } from "react/jsx-runtime";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Smooth scrolling
    });
  };

  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <div className="footer mt-32 border-t-2 pt-5 row relative">
        <div className="A-studio col-md-4 col-12">
          <img src="img/A+ Studio.svg" alt="" />
          <p className="w-[250px] mt-7">
            We were born to provide you with Media products in a different way:
            Creative - Quintessential - Unique. We produce corporate films,
            TVCs, graphic design, content, and other social media products.
          </p>
        </div>

        <div className="text row col-md-8 col-12">
          <div className="part col-3">
            <h3 className="h6 font-bold">What We Do</h3>
            <p className="mt-4 font-semibold">
              <a href="">Video Production</a>
            </p>
            <p className="mt-1 font-semibold">
              <a href="">Graphic Design</a>
            </p>
            <p className="mt-1 font-semibold">
              <a href="">Content Creative</a>
            </p>
            <p className="mt-1 font-semibold">
              <a href="">Social Media Manage</a>
            </p>
          </div>
          <div className="part col-3">
            <h3 className="h6 font-bold">Company</h3>
            <p className="mt-4 font-semibold">
              <a href="">About us</a>
            </p>
            <p className="mt-1 font-semibold">
              <a href="">Career</a>
            </p>
            <p className="mt-1 font-semibold">
              <a href="">Become investor</a>
            </p>
          </div>
          <div className="part col-3">
            <h3 className="h6 font-bold">Support</h3>
            <p className="mt-4 font-semibold">
              <a href="">FAQ</a>
            </p>
            <p className="mt-1 font-semibold">
              <a href="">Policy</a>
            </p>
            <p className="mt-1 font-semibold">
              <a href="">Business</a>
            </p>
          </div>
          <div className="part col-3">
            <h3 className="h6 font-bold">Contact</h3>
            <p className="mt-4 font-semibold">
              <a href="">WhatsApp</a>
            </p>
            <p className="mt-1 font-semibold">
              <a href="">Support 24/7</a>
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <a href="">
            {" "}
            <img src="/img/facebook.svg" className="inline-block" alt="" />
          </a>
          <a href="">
            {" "}
            <img src="/img/twitter.svg" className="inline-block" alt="" />
          </a>
          <a href="">
            {" "}
            <img src="/img/linkedin.svg" className="inline-block" alt="" />
          </a>
        </div>
        <Button
          style={{
            position: "absolute",
            display: "inline-block",
            width: "30px",
            bottom: "0",
            right: "0",
            opacity: "50%",
          }}
          onClick={scrollToTop}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </Button>
      </div>

      <div className="border-t-[1px] mt-4 pt-3 mb-4">
        <p className="text-center opacity-50">
          Copyright © {currentYear} Nguyen Son Tung
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
