import { Link } from "react-router-dom";
import BlogPost from "../../api/blog";

const Blog = () => {
  return (
    <div>
      <h2>Blog Page</h2>
      <Link to="/">Link to go back home</Link>
      <BlogPost />
    </div>
  );
};

export default Blog;
