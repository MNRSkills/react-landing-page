// Depending on your editor, in this case we have VS code you can use intellesense
// to create the components with only a few characters.

// React rule is that components must be capitalized.
// I used Emmet to quickly set tags in this component.

// I am installing Reach Router here for the first time.

import { NavLink } from "react-router-dom";
import Button from "./button";

const Navbar = () => {
  return (
    <nav className="w-full h-40 bg-pink-300 flex justify-around items-center">
      <div className="p-10 ">Logo</div>
      <ul className="flex justify-center items-center">
        <li className="mx-auto px-10">
          <NavLink to="/overview" className="text-2xl text-grey">
            Overview
          </NavLink>
        </li>
        <li className="mx-auto px-10">
          <NavLink to="/example-page" className="text-2xl text-grey">
            Example
          </NavLink>
        </li>
        <li className="mx-auto px-10">
          <NavLink to="/Tour" className="text-2xl text-grey">
            Tour
          </NavLink>
        </li>
        <li className="mx-auto px-10">
          <NavLink to="/Blog" className="text-2xl text-grey">
            Blog
          </NavLink>
        </li>
      </ul>
      <div className="">
        <Button>
          <h1>Hi there</h1>
          <h2>Click here</h2>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
