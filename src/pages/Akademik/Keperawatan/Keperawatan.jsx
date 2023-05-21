import "./Keperawatan.css";
import Layout from "../../../Layout/Layout";
import React from "react";
import AdmImage from "../../../assets/images/LandingKeperawatan.png";
import KepImage01 from "../../../assets/images/Keperawatan01.png";
import Typhography from "../../../components/Typhography/Typhography";
import MatkulImg1 from "../../../assets/images/matkul1.png"
import MatkulImg2 from "../../../assets/images/matkul2.png"
import MatkulImg3 from "../../../assets/images/matkul3.png"
import MatkulImg4 from "../../../assets/images/matkul4.png"
import MatkulImg5 from "../../../assets/images/matkul5.png"
import MatkulImg6 from "../../../assets/images/matkul6.png"

const dataArray = [
  {
    img: MatkulImg1,
    name: "Keperawatan Medikal Bedah",
  },
  {
    img: MatkulImg2,
    name: "Bahasa Inggris & Bahasa Jepang",
  },
  {
    img: MatkulImg3,
    name: "Kewirausahaan",
  },
  {
    img: MatkulImg4,
    name: "Keperawatan Gawat Darurat",
  },
  {
    img: MatkulImg5,
    name: "Manajemen Keselamatan Pasien",
  },
  {
    img: MatkulImg6,
    name: "Manajemen Keperawatan",
  },
];

const Keperawatan = () => {
  return (
    <Layout>
      <div>
        <img src={AdmImage} width={'100%'}>
        </img>
        <div class="centered-keperawatan">
          <h1 className="text-white">Program Studi DIII Keperawatan</h1>
          <p className="text-white mt-4">Diploma III Keperawatan adalah program studi yang menghasilkan perawat professional pemula yang berintegritas dalam memberikan asuhan keperawatan dengan menerapkan ilmu-ilmu untuk kepentingan peningkatan kesehatan masyarakat.. </p>
        </div>
      </div>
      <div class="container bg-color-adm">
        <div class="row mt-5 pt-5">
          <div class="col-md-6">
            <img src={KepImage01} width={'100%'} height={'100%'}></img>
          </div>

          <div class="col-md-6">
            <h2 className="text-blue">Visi</h2>
            <p style={{ textAlign: 'left' }}>Menghasilkan lulusan Sarjana Administrasi Rumah Sakit yang unggul dan berorientasi pada peningkatan mutu pelayanan kesehatan berdasarkan nilai komitmen, integritas, professional, berbelas kasih dan dapat dipercaya.</p>
            <h2 className="text-blue mt-5">Misi</h2>
            <ol style={{ textAlign: 'left' }}>
              <li className="mb-4">
                Menyelenggarakan program pendidikan Administrasi Rumah Sakit yang bermutu tinggi berorientasi pada mutu pelayanan kesehatan berbasis teknologi informasi;
              </li>
              <li className="mb-4">
                Meningkatkan penelitian dan pengabdian masyarakat yang inovativ dibidang administrasi rumah sakit;
              </li>
              <li className="mb-4">
                Mengembangkan networking dan kemitraan dengan lembaga dalam negeri dan luar negeri untuk meningkatkan kompetensi dan pendayagunaan lulusan;
              </li>
              <li className="mb-4">
                Melaksanakan semangat pendidikan berdasarkan nilai komitmen, integritas, professional, berbelas kasih dan dapat dipercaya.
              </li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-section-keperawatan">
        <div className="centered-keperawatan-section">
          <div className="container mt-5 pt-5">
            <h1 className="text-blue mt-5 pt-5">Kurikulum DIII Keperawatan</h1>
            <p className="text-dark mt-3 text-wrap" style={{ width: '20rem' }}>Kurikulum DIII Keperawatan dengan Jumlah 112 SKS ditempuh  dalam 6 Semester (3 tahun) dengan Keterampilan Unggul Keperawatan Medikal Bedah Kurikulum Dibagi menjadi 2 :</p>
            <ul className="content-dot">
              <li>Mata Kuliah Inti 90 SKS</li>
              <li>Mata Kuliah Institusional 22 SKS</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <div className="keperawatan-story-container">
          <Typhography
            type="title"
            text="Mata Kuliah yang Ditawarkan"
            style={{ alignSelf: "center" }}
          />
          <div className="container">
            <div className="keperawatan-story-card">
              {dataArray.map((item) => (
                <div className="card-wrapper">
                  <img className="card-img" src={item.img} />
                  <div className="card-content">
                    <Typhography
                      type="normal"
                      text={item.name}
                      size="16px"
                      fontWeight="600"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div class="container mt-5 pt-5 mb-5 text-center">
          <Typhography
            type="title"
            text="Kurikulum DIII Keperawatan"
            style={{ alignSelf: "center" }}
          />
          <div class="row justify-content-center">

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester I
              </button>
            </div>

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester II
              </button>

            </div>

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester III
              </button>
            </div>

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester IV
              </button>
            </div>

          </div>

          <div class="row justify-content-center">

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester V
              </button>
            </div>

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester VI
              </button>

            </div>

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester VIII
              </button>
            </div>

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester IX
              </button>
            </div>

          </div>
        </div>

        <div class="container mt-5 pt-5 text-center">
          <Typhography
            type="title"
            text="Jadwal Perkuliahan DIII Keperawatan"
            style={{ alignSelf: "center" }}
          />
          <div class="row justify-content-center">

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester I
              </button>
            </div>

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester II
              </button>

            </div>

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester III
              </button>
            </div>

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester IV
              </button>
            </div>

          </div>

          <div class="row justify-content-center">

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester V
              </button>
            </div>

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester VI
              </button>

            </div>

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester VIII
              </button>
            </div>

            <div class="col-lg-3 col-md-6 pt-4 mt-2">
              <button type="button" class="btn btn-blue btn-lg">
                <i class="icon-download">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                Semester IX
              </button>
            </div>

          </div>
        </div>
      </div>


    </Layout >
  );
};

export default Keperawatan;
