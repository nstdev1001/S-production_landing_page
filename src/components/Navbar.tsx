import { useEffect, useState } from "react";
import { Fragment } from "react/jsx-runtime";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className={`navbar ${scroll ? "navbar-scroll" : ""}`}>
        <img src="/img/AStudio.svg" alt="" />
        <div className="grid grid-cols-6 gap-4">
          <a href="#" className="grid place-items-center font-semibold">
            Home
          </a>
          <a href="#" className="grid place-items-center font-semibold">
            What we do
          </a>
          <a href="#" className="grid place-items-center font-semibold">
            Service
          </a>
          <a href="#" className="grid place-items-center font-semibold">
            Project
          </a>
          <a href="#" className="grid place-items-center font-semibold">
            Blog
          </a>
          <a href="#" className="grid place-items-center font-semibold">
            Contact
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
