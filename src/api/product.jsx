import { useState, useEffect } from "react";
import ProductCards from "../Components/productCards";
import data from "../../data.json";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

// MOCKING A RESPONSE FROM API
const mock = new MockAdapter(axios, { delayResponse: 1000 });
mock.onGet("/product").reply(200, data[1]);

// COMPONENT
const Product = () => {
  const [product, setProduct] = useState([]);

  // FETCHING THE DATA FROM MOCK WITH USEEFFECT
  useEffect(() => {
    try {
      axios.get("/product").then((response) => {
        return setProduct(response.data);
      });
    } catch (error) {
      console.log(error, "this didn't work");
    }
  }, []);
  return (
    <div>
      {product.map((items, index) => {
        return <ProductCards items={items} key={index} />;
      })}
    </div>
  );
};

export default Product;
