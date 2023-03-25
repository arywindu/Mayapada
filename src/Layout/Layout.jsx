import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import React from "react";

const Layout = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
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
