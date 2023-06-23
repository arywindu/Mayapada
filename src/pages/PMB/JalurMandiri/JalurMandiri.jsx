import "./JalurMandiri.css";

import React, { useEffect, useState } from "react";

import Layout from "../../../Layout/Layout";
import Typhography from "../../../components/Typhography/Typhography";
import axios from "axios";

const JalurMandiri = () => {
  const [data, setData] = useState(null);
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.stikesmayapada.ac.id/api/PMB/mandiri/1"
      );
      // console.log(response.data, 'res');
      const dataRes = response.data.data;
      setData(dataRes);
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <Layout>
      <div className="jalur-mandiri-container">
        {/* <Typhography type="title" text="Program Jalur Mandiri" /> */}
        <div className="ikatan-alumni-title">Program Jalur Mandiri</div>
        <div className="jalur-mandiri-progress">
          <div className="jalur-mandiri-progress-item">
            <img
              className="jalur-mandiri-progress-item-top"
              src={data && data.img_1}
            />
            <div className="jalur-mandiri-progress-item-bottom">
              {data && data.text_1}
            </div>
          </div>
          <div
            className="dot-item"
            style={{
              width: isMobile ? "20%" : "10%",
              height: "1px",
              borderBottom: "1px dashed #278BC8",
              marginBottom: "30px",
            }}
          />
          <div className="jalur-mandiri-progress-item">
            <img
              className="jalur-mandiri-progress-item-top"
              src={data && data.img_2}
            />
            <div className="jalur-mandiri-progress-item-bottom">
              {data && data.text_2}
            </div>
          </div>
          <div
            className="dot-item"
            style={{
              width: isMobile ? "20%" : "10%",
              height: "1px",
              borderBottom: "1px dashed #278BC8",
              marginBottom: "30px",
            }}
          />
          <div className="jalur-mandiri-progress-item">
            <img
              className="jalur-mandiri-progress-item-top"
              src={data && data.img_3}
            />
            <div className="jalur-mandiri-progress-item-bottom">
              {data && data.text_3}
            </div>
          </div>
        </div>

        <Typhography
          type="title"
          text="Persyaratan Beasiswa"
          style={{ marginTop: "40px" }}
        />
        {/* <div className="ikatan-alumni-titles" style={{ marginTop: '13px'}}>Persyaratan Beasiswa</div> */}

        <div className="jalur-mandiri-persyaratan">
          <Typhography
            text="Berikut adalah persyaratan mengikuti Program Beasiswa Jalur Mandiri  :"
            size="18px"
          />

          <div className="jalur-mandiri-persyaratan-card mt-4">
            <div
              dangerouslySetInnerHTML={{
                __html: data && data.konten,
              }}
            ></div>
          </div>
        </div>
      </div >
    </Layout >
  );
};

export default JalurMandiri;
