import "./IkatanAlumni.css";

import Layout from "../../../Layout/Layout";
import React from "react";
import Typhography from "../../../components/Typhography/Typhography";
import ikatanAlumni from "../../../assets/images/ikatan_alumni.jpeg";

const IkatanAlumni = () => {
  return (
    <Layout>
      <div className="ikatan-alumni-container">
        <img className="ikatan-alumni-img" src={ikatanAlumni} />
        <div className="ikatan-alumni-content">
          <div className="ikatan-alumni-card">
            <Typhography type="title" text="Ikatan Alumni" />
            <Typhography
              type="normal"
              text="Kami selaku pengurus mengharapkan kesediaan Bapak/Ibu untuk mengisi formulir keanggotaan ini. Data ini akan digunakan sebagai database alumni pendidikan dan mendapatkan nomor keanggotaan. Biodata anda selanjutnya digunakan sebagai korespondensi tentang seluruh informasite Kemudian"
              style={{ marginTop: "24px" }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IkatanAlumni;
