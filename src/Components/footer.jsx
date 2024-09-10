import { useState } from "react";

const Footer = () => {
  const [count, setCount] = useState(7);

  const subtractCount = () => {
    // this.state.count = this.state.count - 1;
    setCount((prevCount) => prevCount - 1);
  };
  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <button
        className="mr-20 p-10 rounded-3xl bg-black text-white"
        onClick={() => subtractCount()}
      >
        click there -
      </button>
      {count}
      <button
        className="ml-20 p-10 rounded-3xl bg-black text-white"
        onClick={() => handleCount()}
      >
        click here +
      </button>
    </div>
  );
};

export default Footer;

// return (
//   <div>
//     <table>
//       <thead>
//         <tr>Col 1</tr>
//       </thead>
//       <thead>
//         <tr>Col 2</tr>
//       </thead>
//       <thead>
//         <tr>Col 3</tr>
//       </thead>
//     </table>
//   </div>
// );
