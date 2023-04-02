import PropTypes from "prop-types";
import React from "react";

const Typhography = (props) => {
  const { text, type, size, color, fontWeight, ...rest } = props;
  const typhographyType = () => {
    if (type === "title") {
      return (
        <div
          className="typography"
          style={{
            fontSize: "40px",
            fontWeight: "600",
            color: "#278BC8",
          }}
        >
          {text}
        </div>
      );
    }
    if (type === "normal") {
      return (
        <div
          className="typography"
          style={{
            fontSize: size,
            fontWeight: fontWeight,
            color: color,
          }}
        >
          {text}
        </div>
      );
    }
  };
  return <div {...rest}>{typhographyType()}</div>;
};

Typhography.defaultProps = {
  text: "Typography",
  type: "normal",
  size: "18px",
  color: "#525252",
  fontWeight: "400",
};

Typhography.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default Typhography;
