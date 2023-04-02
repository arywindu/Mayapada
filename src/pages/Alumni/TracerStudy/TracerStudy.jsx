import "./TracerStudy.css";

import Button from "../../../components/Button/Button";
import Layout from "../../../Layout/Layout";
import React from "react";
import Typhography from "../../../components/Typhography/Typhography";
import tracerStudy from "../../../assets/images/tracer_study.jpeg";

const TracerStudy = () => {
  return (
    <Layout>
      <div className="tracer-study-container">
        <img className="tracer-study-img" src={tracerStudy} />
        <div className="tracer-study-content">
          <div className="tracer-study-card">
            <Typhography type="title" text="Tracer Study" />
            <Typhography
              type="normal"
              text="Tracer study adalah studi pelacakan jejak lulusan/alumni yang dilakukan kepada alumni 2 tahun setelah lulus . Tracer study bertujuan untuk mengetahui outcomependidikan dalam bentuk transisi dari dunia pendidikan tinggi ke dunia kerja, output pendidikan yaitu penilaian diri terhadap penguasaan dan pemerolehan kompetensi, proses pendidikan berupa evaluasi proses pembelajaran dan kontribusi pendidikan tinggi terhadap pemerolehan kompetensi serta input pendidikan berupa penggalian lebih lanjut terhadap informasi sosiobiografis lulusan."
              style={{ marginTop: "24px" }}
            />
            <Button text="Download Form" style={{ marginTop: "24px" }} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TracerStudy;
