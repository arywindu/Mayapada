import "./Button.css";

import PropTypes from "prop-types";
import React from "react";

const Button = (props) => {
  const { text, ...rest } = props;

  return (
    <>
      <div className="btn-style" {...rest}>
        {text}
      </div>
    </>
  );
};

Button.defaultProps = {
  text: "Button",
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
