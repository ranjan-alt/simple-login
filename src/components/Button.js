import React from "react";
import propTypes from "prop-types";

const Button = ({ onClick, color, text }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};
Button.defaultProps = {
  color: "steelblue",
};
Button.propTypes = {
  text: propTypes.string,
  color: propTypes.string,
  onClick: propTypes.func.isRequired,
};
// const buttonStyle = {
//   backgroundColor: "green",
// };

export default Button;
