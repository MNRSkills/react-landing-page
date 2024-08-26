// Depending on your editor, in this case we have VS code you can use intellesense
// to create the components with only a few characters.

// React rule is that components must be capitalized.
// I used Emmet to quickly set tags in this component.

// I am installing Reach Router here for the first time.

import { Link } from "react-router-dom";
import Button from "./button";

const Navbar = () => {
  return (
    <nav className="w-full h-40 bg-pink-300 flex justify-around items-center">
      <div className="p-10 ">Logo</div>
      <ul className="flex justify-center items-center">
        <li className="mx-auto px-10">
          <Link to="/" className="text-2xl text-grey">
            Overview
          </Link>
        </li>
        <li className="mx-auto px-10">
          <Link to="/example-page" className="text-2xl text-grey">
            Example
          </Link>
        </li>
        <li className="mx-auto px-10">
          <Link to="/Tour" className="text-2xl text-grey">
            Tour
          </Link>
        </li>
        <li className="mx-auto px-10">
          <Link to="/Blog" className="text-2xl text-grey">
            Blog
          </Link>
        </li>
       
      </ul>
      <div className="">
        <Button className="className " />
      </div>
    </nav>
  );
};

export default Navbar;
