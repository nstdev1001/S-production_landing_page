import { Fragment } from "react/jsx-runtime";

const Navbar = () => {
  return (
    <Fragment>
      <div className="navbar flex justify-between p-7">
        <img src="img/A+ Studio.svg" alt="" />
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
