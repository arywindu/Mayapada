import './GalleryKegiatan.css';

import Layout from '../../../Layout/Layout';
import React, { useEffect, useState } from 'react';
import Img01 from '../../../assets/images/gallery1.png';
import Img02 from '../../../assets/images/gallery2.png';
import Img03 from '../../../assets/images/gallery3.png';
import Img04 from '../../../assets/images/gallery4.png';
import Img05 from '../../../assets/images/gallery5.png';
import Img06 from '../../../assets/images/gallery6.png';
import Landing from '../../../assets/images/landingGallery.png';
import axios from 'axios';

const GalleryKegiatan = () => {
  const [dataImgKegiatan, setDataImgKegiatan] = useState(null);
  const [dataImgOrientasi, setDataImgOrientasi] = useState(null);
  const [dataImgWisuda, setDataImgWisuda] = useState(null);

  useEffect(() => {
    getDataKegiatan();
    getDataOrientasi();
    getDataWisuda();
  }, []);

  const getDataKegiatan = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/galery-kegiatan/1/images?selectBy=KEGIATAN_MAHASISWA '
      );
      const responseData = response.data;
      // console.log(responseData, 'pantek');
      setDataImgKegiatan(responseData);
    } catch (error) { }
  };
  const getDataOrientasi = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/galery-kegiatan/1/images?selectBy=ORIENTASI_MAHASISWA'
      );
      const responseData = response.data;
      setDataImgOrientasi(responseData);
    } catch (error) { }
  };
  const getDataWisuda = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/galery-kegiatan/1/images?selectBy=WISUDA'
      );
      const responseData = response.data;
      setDataImgWisuda(responseData);
    } catch (error) { }
  };
  return (
    <Layout>
      <div className="mb-5 pb-5 mobile-hide">
        <div className="filter-blue">
          <img className="image-gallery" src={Landing}></img>
          <div class="centered mt-5 pt-5">
            <h1 className="text-white mt-5 pt-5">Gallery Kegiatan </h1>
          </div>
        </div>
        <div className="galerry-container">
          <div className="text-center">
            <nav>
              <div class="justify-content-center" id="nav-tab" role="tablist">
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
                  KEGIATAN MAHASISWA
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
                  ORIENTASI MAHASISWA BARU
                </a>
                <a
                  class="nav-menu text-reset"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  WISUDA
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
                    {dataImgKegiatan &&
                      dataImgKegiatan.map((item) => (
                        <div class="col-lg-4 col-md-12">
                          <img src={item.card_image} width={'100%'}></img>
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
                    {dataImgOrientasi &&
                      dataImgOrientasi.map((item) => (
                        <div class="col-lg-4 col-md-12">
                          <img src={item.card_image} width={'100%'}></img>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
                tabindex="0"
              >
                <div class="container">
                  <div class="row justify-content-center">
                    {dataImgWisuda &&
                      dataImgWisuda.map((item) => (
                        <div class="col-lg-4 col-md-12">
                          <img src={item.card_image} width={'100%'}></img>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Mobile Section */}
      <div className="mb-5 pb-5 desktop-hide">
        <div className="filter-blue">
          <img className="image-gallery-sarana-mobile" src={Landing}></img>
          <div class="centered">
            <h1 className="text-white">Galery Kegiatan</h1>
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
                <h3 style={{ color: '#278bc8', fontWeight: 'bold' }}>
                  KEGIATAN MAHASISWA
                </h3>
              </div>
            </nav>
            <div class="tab-content mt-5">
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  {dataImgKegiatan &&
                    dataImgKegiatan.map((item, index) => {
                      return (
                        <div class={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          <img src={item.card_image} class="d-block w-100"></img>
                          <p className='mt-2'><b>{item.card_description}</b></p>
                        </div>
                      )
                    })}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <nav>
              <div
                class="justify-content-center mt-5"
                id="nav-tab"
                role="tablist"
              >
                <h3 style={{ color: '#278bc8', fontWeight: 'bold' }}>
                  ORIENTASI MAHASISWA BARU
                </h3>
              </div>
            </nav>
            <div class="tab-content mt-5" id="nav-tabContent">
              <div id="carouselExampleControls2" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  {dataImgOrientasi &&
                    dataImgOrientasi.map((item, index) => {
                      return (
                        <div class={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          <img src={item.card_image} class="d-block w-100"></img>
                          <p className='mt-2'><b>{item.card_description}</b></p>
                        </div>
                      )
                    })}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <nav>
              <div
                class="justify-content-center mt-5"
                id="nav-tab"
                role="tablist"
              >
                <h3 style={{ color: '#278bc8', fontWeight: 'bold' }}>
                  WISUDA
                </h3>
              </div>
            </nav>
            <div class="tab-content mt-5" id="nav-tabContent">
              <div id="carouselExampleControls3" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  {dataImgWisuda &&
                    dataImgWisuda.map((item, index) => {
                      return (
                        <div class={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          <img src={item.card_image} class="d-block w-100"></img>
                          <p className='mt-2'><b>{item.card_description}</b></p>
                        </div>
                      )
                    })}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GalleryKegiatan;
