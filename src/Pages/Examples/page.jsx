import {Link} from "react-router-dom"

// import Button from "../../Components/button";

const ExamplePage = () => {
  return (
    <div className="text-3xl text-grey">
      ExamplePage
      <Link to="/"><h2>click to go back home</h2></Link>
    </div>
  );
};

export default ExamplePage;
