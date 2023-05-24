import "./Sop.css";

import React, { useEffect, useState } from "react";

import Layout from "../../../Layout/Layout";
import Typhography from "../../../components/Typhography/Typhography";
import axios from "axios";

const Sop = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://stikesmayapada.ac.id/api/spmi/1/sop"
      );
      console.log(response.data, "res");
      setData(response.data.data);
    } catch (error) {}
  };
  return (
    <Layout>
      <div className="sop-container">
        <Typhography type="title" text="Standar Operasional Prosedur" />
        {/* <Typhography
          type="normal"
          text="Standar Mutu SPMI"
          style={{ marginTop: "24px" }}
        /> */}
        <div dangerouslySetInnerHTML={{ __html: data && data.sop }}></div>
      </div>
    </Layout>
  );
};

export default Sop;
