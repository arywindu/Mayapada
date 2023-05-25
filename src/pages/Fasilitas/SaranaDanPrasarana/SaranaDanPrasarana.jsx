import "./SaranaDanPrasarana.css";

import React, { useEffect, useState } from "react";

import Img01 from "../../../assets/images/Pendidikan1.png";
import Img02 from "../../../assets/images/Pendidikan2.png";
import Img03 from "../../../assets/images/Pendidikan3.png";
import Img04 from "../../../assets/images/Pendidikan4.png";
import Img05 from "../../../assets/images/Pendidikan5.png";
import Img06 from "../../../assets/images/Pendidikan6.png";
import Img07 from "../../../assets/images/Pendidikan7.png";
import Img08 from "../../../assets/images/Pendidikan8.png";
import Img09 from "../../../assets/images/Pendidikan9.png";
import ImgFas01 from "../../../assets/images/Fasilitas1.png";
import ImgFas02 from "../../../assets/images/Fasilitas2.png";
import ImgFas03 from "../../../assets/images/Fasilitas3.png";
import ImgFas04 from "../../../assets/images/Fasilitas4.png";
import ImgFas05 from "../../../assets/images/Fasilitas5.png";
import ImgFas06 from "../../../assets/images/Fasilitas6.png";
import Landing from "../../../assets/images/landingGallery.png";
import Layout from "../../../Layout/Layout";
import axios from "axios";

const SaranaDanPrasarana = () => {
  const [dataPendidikan, setDataPendidikan] = useState(null);
  const [dataUmum, setDataUmum] = useState(null);

  useEffect(() => {
    getDataPendidikan();
  }, []);

  useEffect(() => {
    getDataUmum();
  }, []);

  const getDataPendidikan = async () => {
    try {
      const response = await axios.get(
        "https://stikesmayapada.ac.id/api/sarana-prasarana/1/images"
      );
      console.log(response.data, "res");
      setDataPendidikan(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataUmum = async () => {
    try {
      const response = await axios.get(
        "https://stikesmayapada.ac.id/api/sarana-prasarana/2/images"
      );
      console.log(response.data, "res");
      setDataUmum(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="mb-5 pb-5">
        <div className="filter-blue">
          <img className="image-gallery" src={Landing}></img>
          <div class="centered">
            <h1 className="text-white">Sarana dan Prasarana</h1>
          </div>
        </div>
        <div className="galerry-container">
          <div className="text-center">
            <nav>
              <div
                class="justify-content-center mt-5"
                id="nav-tab"
                role="tablist"
              >
                <a
                  class="nav-menu text-reset active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  FASILITAS PENDIDIKAN
                </a>
                <a
                  class="nav-menu text-reset"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  FASILITAS UMUM
                </a>
              </div>
            </nav>
            <div class="tab-content mt-5" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabindex="0"
              >
                <div class="container">
                  <div class="row justify-content-center">
                    {dataPendidikan &&
                      dataPendidikan.map((item, i) => (
                        <div
                          class={
                            i % 3 ? `col-lg-4 col-md-6` : "col-lg-4 col-md-12"
                          }
                        >
                          <img src={item.card_image} width={"100%"}></img>
                          <p style={{ textAlign: "left", fontWeight: "bold" }}>
                            {item.card_description}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabindex="0"
              >
                <div class="container">
                  <div class="row justify-content-center">
                    {dataUmum &&
                      dataUmum.map((item, i) => (
                        <div
                          class={
                            i % 3 ? `col-lg-4 col-md-6` : "col-lg-4 col-md-12"
                          }
                        >
                          <img src={item.card_image} width={"100%"}></img>
                          <p style={{ textAlign: "left", fontWeight: "bold" }}>
                            {item.card_description}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SaranaDanPrasarana;
