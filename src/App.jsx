// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import "./App.css";
import Product from "./api/product"
import Header from "./Components/header"

function Home() {
  return (
    <>
      <header>
        <Header/>

        <Product className={"Props"} />
      </header>
    </>
  );
}
export default Home;
