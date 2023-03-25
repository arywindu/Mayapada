import Carousel from "../../components/Carousel/Carousel";
import Layout from "../../Layout/Layout";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Carousel />
      <div className="home-container">sss</div>
    </Layout>
  );
};

export default Home;
