import PropTypes from "prop-types";
import React from "react";

const Typhography = (props) => {
  const { text, type, ...rest } = props;
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
            fontSize: "18px",
            fontWeight: "400",
            color: "#525252",
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
};

Typhography.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Typhography;
