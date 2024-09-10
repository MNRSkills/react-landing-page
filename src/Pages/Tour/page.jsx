import { Link } from "react-router-dom";
import Product from "../../api/product";

const Tour = () => {
  return (
    <div>
      <h2>Tour</h2>
      <Link to="/">click here to go back home</Link>
      <Product/>
    </div>
  );
};

export default Tour;
