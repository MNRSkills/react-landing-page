/* eslint-disable react/prop-types */

const Button = ({ children }) => {
  console.log(children);
  return <button className="bg-cyan rounded-xl px-5">{children}</button>;
};

export default Button;
