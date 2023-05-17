import "./Home.css";

import React, { useEffect, useState } from "react";

import Carousel from "../../components/Carousel/Carousel";
import Layout from "../../Layout/Layout";
import LogoBanPt from "../../assets/images/LogoBAN-PT.svg";
import LogoLamKes from "../../assets/images/LogoLAMKes.svg";
import SectionBlue from "../../components/SectionBlue/SectionBlue";
import SectionNilaiUtamaKami from "../../components/SectionNilaiUtamaKami/SectionNilaiUtamaKami";
import SectionWhite from "../../components/SectionWhite/SectionWhite";
import Typhography from "../../components/Typhography/Typhography";
import axios from "axios";

const Home = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/homepage/1");
      console.log(response.data, "res");
      setData(response.data.homePage);
    } catch (error) {}
  };

  return (
    <Layout>
      <Carousel />
      <div className="home-container" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="text-center">
          <div class="container">
            <div class="row justify-content-center">
              <Typhography
                className="mt-5 mb-5"
                type="title"
                text="Sejarah Mayapada Nursing Academy"
              />
              <div class="circlesbox mb-5" style={{ color: "#278BC8" }}>
                <div class="circle">
                  <p>1996</p>
                </div>
                <div class="circle">2011</div>
                <div class="circle">2018</div>
                <div class="circle">2023</div>
              </div>

              <div class="col-lg-3 col-md-6 mb-5 pb-5">
                <ul style={{ textAlign: "left", color: "#278BC8" }}>
                  <li className="mt-3">
                    Pendirian Akademi Keperawatan Anariksa oleh Yayasan Mitra
                    Antariksa
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-5 pb-5">
                <ul style={{ textAlign: "left", color: "#278BC8" }}>
                  <li className="mt-3">Alih Bina</li>
                  <li className="mt-3">Akreditasi BAN-PT “C”</li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-5 pb-5">
                <ul style={{ textAlign: "left", color: "#278BC8" }}>
                  <li className="mt-3">
                    Akreditasi BAN-PTkes “B” Diploma III Keperawatan
                  </li>
                  <li className="mt-3">
                    Ahli Kelola Mayapada Health Care Group
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-5 pb-5">
                <ul style={{ textAlign: "left", color: "#278BC8" }}>
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
              <h2 className="text-blue">Visi</h2>
              <p style={{ textAlign: "left" }}>
                Menjadikan Institusi yang unggul dalam menghasilkan tenaga
                kesehatan yang berdasarkan nilai-nilai integritas, profesional,
                komitmen, belas kasih, kepercayaan dan berdaya saing nasional
                maupun internasional, tahun 2032
              </p>
              <h2 className="text-blue mt-5">Misi</h2>
              <ol style={{ textAlign: "left" }}>
                <li className="mb-4">
                  Menyelenggarakan pendidikan dan pengajaran yang berfokus pada
                  kajian ilmiah (evidence based) sesuai dengan keahlian dan
                  keilmuan bidang Kesehatan secara profesional;
                </li>
                <li className="mb-4">
                  Melaksanakan dan mengembangkan penelitian berskala nasional
                  dan internasional untuk meningkatkan dan mengembangkan
                  administrasi dan pelayanan kesehatan umumnya serta
                  penyelenggaraan penelitian yang bermanfaat mendukung
                  pembelajaran;
                </li>
                <li className="mb-4">
                  Mendukung pelaksanaan pengabdian masyarakat berbasis pada
                  kebutuhan bidang kesehatan yang meningkatkan kemampuan
                  masyarakat hidup sehat optimal menuju pada kemandirian untuk
                  meningkatkan derajat kesehatan dan kualitas hidup individu,
                  keluarga dan masyarakat;
                </li>
                <li className="mb-4">
                  Mengupayakan pelaksanaan semua tatanan penyelenggaraan
                  pendidikan berkualitas dan membentuk pribadi professional,
                  berkarakter, berkomitmen dan berintegritas sesuai dengan
                  agama, etika profesi dan nilai-nilai budaya;
                </li>
                <li className="mb-4">
                  Mengembangkan sarana prasarana pembelajaran untuk
                  mendukungpelaksanaan Tri Dharma Perguruan Tinggi, menciptakan
                  budaya dan iklim belajar yang optimal serta fokus pada
                  peningkatan kualitas secara terus menerus melalui performa
                  lembaga yang terukur dan terstandarisasi.
                </li>
              </ol>
            </div>

            <div class="col-md-6">
              <h2 className="text-blue">Tujuan</h2>
              <ol style={{ textAlign: "left" }}>
                <li className="mb-4">
                  Tersusun dan terlaksananya kurikulum Sekolah Tinggi Ilmu
                  Kesehatan berbasis capaian pembelajaran melalui pengembangan
                  strategi pembelajaran metode mutakhir untuk mencapai
                  kompetensi tenaga Kesehatan dengan yang berkarakter,
                  berkomitmen, intergritas, berbelas kasih, dan inovatif sesuai
                  kerangka Kualifikasi nasional level-6 dan level-7
                </li>
                <li className="mb-4">
                  Terhasilkan lulusan tenaga Kesehatan unggul dan kompetitif;
                </li>
                <li className="mb-4">
                  Terlaksananya tata kelola yang efektif dan efisien dalam
                  pelaksanaan tata pamong untuk membangun sistem tata pamong
                  yang kredibel, transparan, akuntabel, bertanggung jawab dan
                  adil;
                </li>
                <li className="mb-4">
                  Tersedianya sumber daya manusia yang berkualitas sesuai bidang
                  keahliannya;
                </li>
                <li className="mb-4">
                  Tersedianya sarana-prasarana sesuai perkembangan teknolgi
                  untuk mendukung terciptanya suasana akademik yang kondusif;
                </li>
                <li className="mb-4">
                  Terlaksananya penelitian secara berkesinambungan untuk
                  pengembangan IPTEK di bidang kesehatan dan dapat melakukan
                  publikasi nasional dan internasional;
                </li>
                <li className="mb-4">
                  Terlaksananya pengembangan dan pelaksanaan pengabdian kepada
                  masyarakat di bidang kesehatan
                </li>
                <li className="mb-4">
                  Terjalinnya kerjasama dan kemitraan dengan berbagai pihak baik
                  dalam negeri maupun luar negeri dalam rangka memperkuat jati
                  diri STIKes Mayapada.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </SectionWhite>
      <div className="mt-5 pt-5"></div>
      <SectionNilaiUtamaKami />
      <SectionBlue
        type="normal"
        text="Landasan Hukum"
        style={{ marginTop: "24px" }}
        liText="Undang-Undang No. 28 Tahun 2004 tentang Yayasan"
      >
        <div
          className="text-white"
          dangerouslySetInnerHTML={{ __html: data && data.landasan_hukum }}
        ></div>
      </SectionBlue>
      <SectionWhite text="Struktur Organisasi STIKes Mayapada" />
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
