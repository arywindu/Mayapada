import './Home.css';

import React, { useEffect, useState } from 'react';

import Carousel from '../../components/Carousel/Carousel';
import Layout from '../../Layout/Layout';
import LogoBanPt from '../../assets/images/LogoBAN-PT.svg';
import LogoLamKes from '../../assets/images/LogoLAMKes.svg';
import SectionBlue from '../../components/SectionBlue/SectionBlue';
import SectionNilaiUtamaKami from '../../components/SectionNilaiUtamaKami/SectionNilaiUtamaKami';
import SectionWhite from '../../components/SectionWhite/SectionWhite';
import Typhography from '../../components/Typhography/Typhography';
import axios from 'axios';

const Home = () => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [dataBanner, setDataBanner] = useState(null);

  useEffect(() => {
    getData();
    getDataBanner();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/homepage/1'
      );
      // console.log(response.data.data, 'res');
      setData(response.data.data);
    } catch (error) {}
  };

  const getDataBanner = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/homepage/1/banner'
      );
      // console.log(response.data, 'res');
      setDataBanner(response.data.data);
    } catch (error) {}
  };

  return (
    <Layout logo={data && data.logo_image}>
      <Carousel data={dataBanner} />
      <div className="home-container" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="text-center">
          <div class="container">
            <div class="row justify-content-center">
              <Typhography
                className="mt-5 mb-5"
                type="title"
                text="Sejarah Mayapada Nursing Academy"
              />
              <div class="circlesbox mb-5" style={{ color: '#278BC8' }}>
                <div class="circle">
                  <p>1996</p>
                </div>
                <div class="circle">2011</div>
                <div class="circle">2018</div>
                <div class="circle">2023</div>
              </div>

              <div class="col-lg-3 col-md-6 mb-5 pb-5">
                <ul style={{ textAlign: 'left', color: '#278BC8' }}>
                  <li className="mt-3">
                    Pendirian Akademi Keperawatan Anariksa oleh Yayasan Mitra
                    Antariksa
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-5 pb-5">
                <ul style={{ textAlign: 'left', color: '#278BC8' }}>
                  <li className="mt-3">Alih Bina</li>
                  <li className="mt-3">Akreditasi BAN-PT “C”</li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-5 pb-5">
                <ul style={{ textAlign: 'left', color: '#278BC8' }}>
                  <li className="mt-3">
                    Akreditasi BAN-PTkes “B” Diploma III Keperawatan
                  </li>
                  <li className="mt-3">
                    Ahli Kelola Mayapada Health Care Group
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-5 pb-5">
                <ul style={{ textAlign: 'left', color: '#278BC8' }}>
                  <li className="mt-3">
                    Perubahan Bentuk Sekolah Tinggi Ilmu Kesehatan Mayapada SK
                    Kemenristik Dikti No: Tanggal:
                  </li>
                  <li className="mt-3">
                    Program Studi:
                    <ul>
                      <li>Diploma III Keperawatan</li>
                      <li>Sarjana Administrasi Rumah Sakit</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionWhite>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div
                dangerouslySetInnerHTML={{ __html: data && data.text_visi }}
              ></div>
              <div
                dangerouslySetInnerHTML={{ __html: data && data.text_misi }}
              ></div>
            </div>
            <div class="col-md-6">
              <div
                dangerouslySetInnerHTML={{ __html: data && data.tujuan }}
              ></div>
            </div>
          </div>
        </div>
      </SectionWhite>
      <div className="mt-5 pt-5"></div>
      <SectionNilaiUtamaKami />
      <SectionBlue
        type="normal"
        text="Landasan Hukum"
        style={{ marginTop: '24px' }}
        liText="Undang-Undang No. 28 Tahun 2004 tentang Yayasan"
      >
        <div
          className="text-white"
          dangerouslySetInnerHTML={{ __html: data && data.landasan_hukum }}
        ></div>
      </SectionBlue>
      <SectionWhite text="Struktur Organisasi STIKes Mayapada">
        <br />
        <div
          dangerouslySetInnerHTML={{ __html: data && data.struktur_organisasi }}
        ></div>
      </SectionWhite>
      <div>
        <div class="container text-center mb-5">
          <div class="row gx-5 justify-content-center">
            <div class="col-md-6">
              <img src={LogoBanPt} alt="" />
              <p>
                No. 033/BAN-PT/Ak-XII/Dpl-III/XII/2012
                <br></br>
                <b>Akreditasi BAN-PT Hasil C</b>
              </p>
            </div>

            <div class="col-md-6">
              <img src={LogoLamKes} alt="" />
              <p>
                No. 0503/LAM-PTKes/Akr/Dpl/VII/2018
                <br></br>
                <b>Akreditasi LAM PT Kes Hasil B</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
