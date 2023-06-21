import "./JalurBeasiswa.css";

import React, { useEffect, useState } from "react";

import Layout from "../../../Layout/Layout";
import Typhography from "../../../components/Typhography/Typhography";
import axios from "axios";

const JalurBeasiswa = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://api.stikesmayapada.ac.id/api/PMB/beasiswa/1"
      );
      // console.log(response.data, 'res');
      const dataRes = response.data.data;
      setContent(dataRes.konten);
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <Layout>
      <div className="jalur-beasiswa-container">
        {/* <Typhography type="title" text="Program Jalur Beasiswa" /> */}
        <div className="ikatan-alumni-titles">Program Jalur Beasiswa</div>
        <div className="jalur-beasiswa-type-row">
          <div className="jalur-beasiswa-type">
            <Typhography
              text="Jalur Prestasi Akademi"
              size="24px"
              fontWeight="600"
              color="#000000"
            />

            <Typhography
              text="(Peluang beasiswa 50%)"
              size="20px"
              fontWeight="400"
              color="#278BC8"
            />

            <Typhography
              text="Peserta dengan nilai semester 1 s/d 6 rata-rata ≥80 bebas test tulis, dan berhak mengikuti test wawancara."
              size="20px"
              fontWeight="400"
              color="#525252"
              style={{ marginTop: "20px" }}
            />
          </div>

          <div className="jalur-beasiswa-type">
            <Typhography
              text="Jalur Beasiswa & Tes Tertulis"
              size="24px"
              fontWeight="600"
              color="#000000"
            />

            <Typhography
              text="(Peluang beasiswa 30%, 40%, 60%, 80%, 90%)"
              size="20px"
              fontWeight="400"
              color="#278BC8"
            />

            <Typhography
              text="Akper Antariksa menyediakan berbagai jenis beasiswa."
              size="20px"
              fontWeight="400"
              color="#525252"
              style={{ marginTop: "20px" }}
            />
          </div>
        </div>

        <Typhography
          type="title"
          text="Persyaratan Beasiswa"
          style={{ marginTop: "40px" }}
        />
        {/* <div className="ikatan-alumni-titles" style={{ marginTop: '13px'}}>Persyaratan Beasiswa</div> */}

        <div className="jalur-beasiswa-persyaratan">
          <Typhography
            text="Berikut adalah persyaratan mengikuti Program Beasiswa Jalur Mandiri  :"
            size="18px"
          />
          <br />
          <div className="jalur-beasiswa-persyaratan-card">
            <div
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JalurBeasiswa;
