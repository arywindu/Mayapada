import "./Button.css";

import PropTypes from "prop-types";
import React from "react";

const Button = (props) => {
  const { text, type, borderColor, ...rest } = props;

  const buttonType = () => {
    if (type === "btn-border") {
      return (
        <div className="btn-style-border" {...rest}>
          {text}
        </div>
      );
    } else {
      return (
        <div className="btn-style" {...rest}>
          {text}
        </div>
      );
    }
  };

  return <>{buttonType()}</>;
};

Button.defaultProps = {
  text: "Button",
  type: "",
  borderColor: "white",
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  borderColor: PropTypes.string,
};

export default Button;
