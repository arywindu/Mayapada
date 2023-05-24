import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import React from "react";

const Layout = (props) => {
  const { logo } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header logo={logo} />
      <div
        style={{
          flex: 1,
        }}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
