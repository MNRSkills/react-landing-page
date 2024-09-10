import { useState, useEffect } from "react";
import BlogCards from "../Components/blogCard";
import data from "../../data.json";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// MOCKING A RESPONSE FROM API
const mock = new MockAdapter(axios, { delayResponse: 2000 });
mock.onGet("/blog").reply(200, data[1]);

// COMPONENT
const BlogPost = () => {
  const [blog, setBlog] = useState([]);

  // FETCHING THE DATA FROM MOCK WITH USEEFFECT
  useEffect(() => {
    try {
      axios.get("/blog").then((response) => {
        // console.log(response.data, " thsi is blog response")
        return setBlog(response.data);
      });
    } catch (error) {
      console.log(error, "this didn't work");
    }
  }, []);
  return (
    <div>
      {/* {blog.map((items, index) => {
        return (
          <BlogCards items={items} key={index} />
          //   <Cards key={index}>
          //     <h1>{items.title}</h1>
          //   </Cards>
        );
      })} */}
      This is the api
    </div>
  );
};

export default BlogPost;
