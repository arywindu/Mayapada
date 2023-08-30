import './Home.css';

import React, { useEffect, useState, useRef } from 'react';
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

  const sejarahRef = useRef(100);
  const visiMisiRef = useRef();
  const nilaiUtamaRef = useRef();
  const landasanHukumRef = useRef();
  const akreditasiRef = useRef();


  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [dataBanner, setDataBanner] = useState(null);

  useEffect(() => {
    getData();
    getDataBanner();
    const hash = window.location.hash;
    if (hash && sejarahRef.current) {
      sejarahRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/homepage/1'
      );
      // console.log(response.data.data, 'res');
      setData(response.data.data);
    } catch (error) { }
  };

  const getDataBanner = async () => {
    try {
      const response = await axios.get(
        'https://api.stikesmayapada.ac.id/api/homepage/1/banner'
      );
      // console.log(response.data, 'res');
      setDataBanner(response.data.data);
    } catch (error) { }
  };

  return (
    <Layout logo={data && data.logo_image}>
      <Carousel data={dataBanner} />
      <div id="sejarah" ref={sejarahRef} className="home-container mobile-hide" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="text-center">
          <div class="container">
            <div class="row justify-content-center">
              <Typhography
                className="mt-5 mb-5"
                type="title"
                text="Sejarah Mayapada Nursing Academy"
              />
              <div className="circlesbox mb-5" style={{ color: '#278BC8' }}>
                <div className="circle">1996</div>
                <div className="circle">2011</div>
                <div className="circle">2018</div>
                <div className="circle">2023</div>
              </div>

              <div class="col-lg-3 col-md-3 mb-5 pb-5">
                <ul style={{ textAlign: 'left', color: '#278BC8' }}>
                  <li className="mt-3">
                    Pendirian Akademi Keperawatan Anariksa oleh Yayasan Mitra
                    Antariksa
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-3 mb-5 pb-5">
                <ul style={{ textAlign: 'left', color: '#278BC8' }}>
                  <li className="mt-3">Alih Bina</li>
                  <li className="mt-3">Akreditasi BAN-PT “C”</li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-3 mb-5 pb-5">
                <ul style={{ textAlign: 'left', color: '#278BC8' }}>
                  <li className="mt-3">
                    Akreditasi BAN-PTkes “B” Diploma III Keperawatan
                  </li>
                  <li className="mt-3">
                    Ahli Kelola Mayapada Health Care Group
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-3 mb-5 pb-5">
                <ul style={{ textAlign: 'left', color: '#278BC8' }}>
                  <li className="mt-3">
                    Perubahan Bentuk Sekolah Tinggi Ilmu Kesehatan Mayapada SK
                    Kemenristik Dikti No: 234/E/O/2023 Tanggal: 7 Maret 2023
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
      {/* Mobile Section */}
      <div className="home-container desktop-hide" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="text-center">
          <div class="container">
            <div class="row justify-content-center">
              <Typhography
                className="mt-5 mb-5"
                type="title"
                text="Sejarah Mayapada Nursing Academy"
              />
              <div className="mb-5" style={{ color: '#278BC8' }}>

                <div class="col-lg-12 col-md-3">
                  <div className="circle">1996</div>
                  <ul style={{ textAlign: 'left', color: '#278BC8' }}>
                    <li className="mt-3">
                      Pendirian Akademi Keperawatan Anariksa oleh Yayasan Mitra
                      Antariksa
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-3 pt-5">
                  <div className="circle">2011</div>
                  <ul style={{ textAlign: 'left', color: '#278BC8' }}>
                    <li className="mt-3">Alih Bina</li>
                    <li className="mt-3">Akreditasi BAN-PT “C”</li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-3 pt-5">
                  <div className="circle">2018</div>
                  <ul style={{ textAlign: 'left', color: '#278BC8' }}>
                    <li className="mt-3">
                      Akreditasi BAN-PTkes “B” Diploma III Keperawatan
                    </li>
                    <li className="mt-3">
                      Ahli Kelola Mayapada Health Care Group
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-3 pt-5">
                  <div className="circle">2023</div>
                  <ul style={{ textAlign: 'left', color: '#278BC8' }}>
                    <li className="mt-3">
                      Perubahan Bentuk Sekolah Tinggi Ilmu Kesehatan Mayapada SK
                      Kemenristik Dikti No: 234/E/O/2023 Tanggal: 7 Maret 2023
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
      </div>
      {/*  end mobile section */}
      <SectionWhite>
        <div id="visiMisi" ref={visiMisiRef} class="container pb-5 mb-5">
          <div class="row">
            <div class="col-md-6">
              <Typhography
                className="mt-5 mb-5"
                type="title"
                text="Visi"
              />
              <div
                dangerouslySetInnerHTML={{ __html: data && data.text_visi }}
              ></div>
              <Typhography
                className="mt-5 mb-5"
                type="title"
                text="Misi"
              />
              <div
                dangerouslySetInnerHTML={{ __html: data && data.text_misi }}
              ></div>
            </div>
            <div class="col-md-6">
              <Typhography
                className="mt-5 mb-5"
                type="title"
                text="Tujuan"
              />
              <div
                dangerouslySetInnerHTML={{ __html: data && data.tujuan }}
              ></div>
            </div>
          </div>
        </div>
      </SectionWhite>
      <div id="nilaiUtama" ref={nilaiUtamaRef}>
        <SectionNilaiUtamaKami
        />
      </div>

      <SectionBlue
        type="normal"
        id="landasanHukum" ref={landasanHukumRef}
        text="Landasan Hukum"
        style={{ marginTop: '24px' }}
        liText="Undang-Undang No. 28 Tahun 2004 tentang Yayasan"
      >
        <div
          className="text-white"
          dangerouslySetInnerHTML={{ __html: data && data.landasan_hukum }}
        ></div>
      </SectionBlue>
      <div className='mt-5'>
      </div>
      <SectionWhite text="Struktur Organisasi STIKes Mayapada">
        <br />
        <div className='text-center'
          dangerouslySetInnerHTML={{ __html: data && data.struktur_organisasi }}
        ></div>
      </SectionWhite>
      <div>
        <div id="akreditasi" ref={akreditasiRef} class="container text-center mb-5">
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
