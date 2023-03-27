import "./PusatKarir.css";

import Layout from "../../Layout/Layout";
import React from "react";
import Typhography from "../../components/Typhography/Typhography";

const PusatKarir = () => {
  return (
    <Layout>
      <div className="pusat-karir-container">
        <Typhography type="title" text="Pusat Karir" />
        <Typhography
          type="normal"
          text="Belum Tersedia Lowongan Pekerjaan Untuk Saat Ini, akan di Update Kemudian"
          style={{ marginTop: "24px" }}
        />
      </div>
    </Layout>
  );
};

export default PusatKarir;
